export default {
  // async afterCreate(event) {
  //   const { result } = event;
  //   console.log(result.defaultSchedule);
  //   const calanderJSON = getYearCalendar(result.defaultSchedule, 2026);
  //   await strapi.documents("api::timezone.timezone").update({
  //     documentId: result.documentId,
  //     data: {
  //       schedule: calanderJSON,
  //     },
  //   });
  // },
  async beforeCreate(event) {
    // const { data } = event.params;
    // console.log(data)
    //  if (!data.defaultSchedule) {
    //   return;
    // }
    // if (data.defaultSchedule.id) {
    //   const schedule = await strapi.db
    //     .query("api::timezone.timezone")
    //     .findOne({
    //       where: {
    //         id:data.defaultSchedule.id
    //       },
    //       populate: {
    //         defaultSchedule: true,
    //       },
    //     });
    //     console.log(schedule)
    //   data.schedule = getYearCalendar(data.defaultSchedule, 2026);
    // }
  },
 
  //  async afterCreate(event) {
  //   const { result } = event;
  //   console.log("AFTERCREATE RUNSSSS")
  //   // console.log(
  //   //   "DEFAULT SCHEDULE:",
  //   //   JSON.stringify(result.defaultSchedule, null, 2)
  //   // );

  //   if (!result.defaultSchedule) {
  //     return;
  //   }

  //   const calendar = getYearCalendar(
  //     result.defaultSchedule,
  //     2026
  //   );

  //   await strapi
  //     .documents("api::timezone.timezone")
  //     .update({
  //       documentId: result.documentId,
  //       data: {
  //         schedule: calendar,
  //       },
  //     });
  // },
};

function getYearCalendar(defaultSchedule, year) {
  const months = [];

  // const defaultSchedule = result.defaultSchedule;

  for (let month = 0; month < 12; month++) {
    const firstDate = new Date(year, month, 1);

    const monthName = firstDate.toLocaleString("en-US", {
      month: "long",
    });

    const firstDay = firstDate.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      const weekday = date.toLocaleString("en-US", {
        weekday: "long",
      });

      // Source of truth = defaultSchedule
      const schedule = defaultSchedule[weekday];

      days.push({
        wd: weekday,
        date: day,
        isWorking: schedule?.isWorking ?? false,
        openTime: schedule?.isWorking ? schedule.openTime.substring(0, 5) : "",
        closeTime: schedule?.isWorking
          ? schedule.closeTime.substring(0, 5)
          : "",
      });
    }

    months.push({
      name: monthName,
      firstDay,
      days,
    });
  }

  return months;
}
