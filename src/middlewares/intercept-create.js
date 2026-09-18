module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // console.log(ctx.path, "ctx.pathctx.pathctx.path");
    if (
      ctx.method === "POST" &&
      ctx.path ===
        "/content-manager/collection-types/api::timezone.timezone/actions/publish"
    ) {
      // console.log("CREATING SCHEDULE FROM DEFAULT SCHEDULE");
      const calanderJSON = getYearCalendar(
        ctx.request.body.defaultSchedule,
        2026,
      );
      ctx.request.body.schedule = calanderJSON;
      // console.log("Updated body:", ctx.request.body);
      /// content-manager/collection-types/api::timezone.timezone/oh2wbdd3ikm5kbhj9w3qokk5
    }
    // Update
    if (
      ctx.method === "POST" &&
      ctx.path.match(
        /^\/content-manager\/collection-types\/api::timezone\.timezone\/[^/]+\/actions\/publish$/,
      )
    ) {
      // console.log(ctx.request.body);
      // console.log("Timezone publish/update");
      // console.log("CREATING SCHEDULE FROM DEFAULT SCHEDULE");
      const calanderJSON = getYearCalendar(
        ctx.request.body.defaultSchedule,
        2026,
      );
      ctx.request.body.schedule = calanderJSON;
    }

    await next();
  };
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
