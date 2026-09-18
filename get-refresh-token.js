const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const credentials = JSON.parse(
  fs.readFileSync('./client_secret.json', 'utf8')
);

const { client_id, client_secret, redirect_uris } = credentials.installed;

const REDIRECT_URI = redirect_uris[0];

const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  REDIRECT_URI
);

const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: SCOPES,
});

console.log('\nOpen this URL in your browser:\n');
console.log(authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  '\nAfter authorization, paste the code here: ',
  async (code) => {
    try {
      const { tokens } = await oauth2Client.getToken(code);

      if (!tokens.refresh_token) {
        throw new Error(
          'No refresh token returned. Try again with prompt=consent.'
        );
      }

      console.log('\n========================================');
      console.log('GOOGLE_REFRESH_TOKEN');
      console.log('========================================\n');

      console.log(tokens.refresh_token);

      console.log('\n========================================');
      console.log('Add this to your .env:');
      console.log('========================================\n');

      console.log(
        `GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`
      );

      console.log('\nKeep this token secret.\n');

      rl.close();
    } catch (error) {
      console.error(
        '\nOAuth failed:',
        error.response?.data || error.message || error
      );

      rl.close();
      process.exit(1);
    }
  }
);