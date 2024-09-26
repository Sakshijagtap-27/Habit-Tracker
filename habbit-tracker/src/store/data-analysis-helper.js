export const analyzeHabitData = (state) => {
  const habitCheckCount = state.habbits.reduce((acc, habit) => {
      acc[habit.id] = 0;
      return acc;
  }, {});

  state.months.forEach((month) => {
      month.days.forEach((day) => {
          day.forEach((habitId) => {
              if (habitCheckCount[habitId] !== undefined) {
                  habitCheckCount[habitId] += 1;
              }
          });
      });
  });

  return habitCheckCount;
};

export const getPieChartData = (habitCheckCount, habbits) => {
  const totalChecks = Object.values(habitCheckCount).reduce(
      (acc, count) => acc + count,
      0
  );

  return habbits.map((habit) => ({
      label: habit.name,
      value: ((habitCheckCount[habit.id] / totalChecks) * 100).toFixed(2),
  }));
};
