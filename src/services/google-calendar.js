import { google } from "googleapis";

const getGoogleCalendar = () => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return google.calendar({
    version: "v3",
    auth: oauth2Client,
  });
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
      summary: `{name}`,
      description: `Strapi Timezone ID: ${name}`,
      timeZone: timezone,
    },
  });

  const calendarData = response.data;

  console.log("Calendar created:", calendarData.id);

  // 2. Create working information events
  const events = createWorkingInformationEvents({
    calendar,
    calendarId: calendarData.id,
    timezone,
    year,
  });

  return response.data;
};

// export const createCalendar = async ({ name, timezone }) => {
//   const calendar = getGoogleCalendar();

//   const response = await calendar.calendars.insert({
//     requestBody: {
//       summary: `Timezone - ${name}`,
//       description: `Strapi Timezone ID: ${name}`,
//       timeZone: timezone,
//     },
//   });

//   console.log(response)

//   return response.data;
// };

// const createWorkingInformationEvents = async ({
//   calendar,
//   calendarId,
//   timezone,
//   year = new Date().getFullYear(),
// }) => {
//   const events = [];

//   const startDate = new Date(`${year}-01-01T00:00:00`);
//   const endDate = new Date(`${year + 1}-01-01T00:00:00`);

//   for (
//     let date = new Date(startDate);
//     date < endDate;
//     date.setDate(date.getDate() + 1)
//   ) {
//     const dateString = date.toISOString().split("T")[0];

//     const event = await calendar.events.insert({
//       calendarId,

//       requestBody: {
//         summary: "Working Information",

//         description: "Working: Yes",

//         workingHours: {
//           start: `${dateString}T08:00:00`,
//           end: `${dateString}T13:00:00`,
//         },
//         // start: {
//         //   dateTime: `${dateString}T08:00:00`,
//         //   timeZone: timezone,
//         // },

//         // end: {
//         //   dateTime: `${dateString}T13:00:00`,
//         //   timeZone: timezone,
//         // },

//         extendedProperties: {
//           private: {
//             type: "working_information",
//             date: dateString,
//             isWorking: "true",
//           },
//         },
//       },
//     });

//     events.push(event.data);

//     console.log(`Created working event: ${dateString}`);
//   }

//   return events;
// };

const createWorkingInformationEvents = async ({
  calendar,
  calendarId,
  timezone,
  year = new Date().getFullYear(),
}) => {
  const event = await calendar.events.insert({
    calendarId,

    requestBody: {
      summary: "Working Information",
      description: "Working: Yes",

      start: {
        dateTime: `${year}-01-01T08:00:00`,
      },

      end: {
        dateTime: `${year}-01-01T13:00:00`,
      },

      // Repeat every day
      recurrence: [`RRULE:FREQ=DAILY;COUNT=${isLeapYear(year) ? 366 : 365}`],

      extendedProperties: {
        private: {
          type: "working_information",
          isWorking: "true",
          workingHours: JSON.stringify({
            start: "08:00",
            end: "13:00",
          }),
        },
      },
    },
  });

  console.log(
    `Created recurring working information event for ${year}: ${event.data.id}`,
  );

  return event.data;
};

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
