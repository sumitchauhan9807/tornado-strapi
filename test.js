import { google } from 'googleapis';

const getGoogleCalendar = () => {
  const oauth2Client = new google.auth.OAuth2(
    '245550131841-9tck9ipmei4luh3hj06s24tau90armg2.apps.googleusercontent.com',
    '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',
    'http://localhost'
  );

  oauth2Client.setCredentials({
    refresh_token: '1//0g9dxWwVfd7TaCgYIARAAGBASNwF-L9IrqBgD1moakHORM-X9GYEWqi9NuvS1fa-eUQ8xcmbW2rDK8n6GyQySKS97_4boHmwEGsY',
  });

  return google.calendar({
    version: 'v3',
    auth: oauth2Client,
  });
};

const createWorkingInformationEvents = async ({
  calendar,
  calendarId,
  timezone,
  year = new Date().getFullYear(),
}) => {
  const events = [];

  const startDate = new Date(`${year}-01-01T00:00:00`);
  const endDate = new Date(`${year + 1}-01-01T00:00:00`);

  for (
    let date = new Date(startDate);
    date < endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dateString = date.toISOString().split('T')[0];

    const event = await calendar.events.insert({
      calendarId,

      requestBody: {
        summary: 'Working Information',

        description: 'Working: Yes',

        start: {
          dateTime: `${dateString}T08:00:00`,
          timeZone: timezone,
        },

        end: {
          dateTime: `${dateString}T13:00:00`,
          timeZone: timezone,
        },

        extendedProperties: {
          private: {
            type: 'working_information',
            date: dateString,
            isWorking: 'true',
          },
        },
      },
    });

    events.push(event.data);

    console.log(`Created working event: ${dateString}`);
  }

  return events;
};

export const createCalendar = async ({
  name,
  timezone,
  year = new Date().getFullYear(),
}) => {
  const calendar = getGoogleCalendar();

  // 1. Create the calendar
  const response = await calendar.calendars.insert({
    requestBody: {
      summary: `Timezone - ${name}`,
      description: `Strapi Timezone ID: ${name}`,
      timeZone: timezone,
    },
  });

  const calendarData = response.data;

  console.log('Calendar created:', calendarData.id);

  // 2. Create working information events
  // const events = await createWorkingInformationEvents({
  //   calendar,
  //   calendarId: calendarData.id,
  //   timezone,
  //   year,
  // });

  return {
    calendar: calendarData,
    // events,
  };
};

createCalendar({
  name: 'superman',
  timezone: 'Asia/Kolkata',
  year: 2026,
});