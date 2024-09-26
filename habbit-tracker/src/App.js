import moment from "moment";
import { useState, useEffect, useContext } from "react";
import ReactGA from "react-ga4";

import Header from "./components/UI/Header";
import MonthFilter from "./components/Filter/MonthFilter";
import Habbits from "./components/Habbits/Habbits";
import HabitPieChart from './components/Charts/HabitPieChart';
import { analyzeHabitData, getPieChartData } from './store/data-analysis-helper';
import habbitContext from './store/habbit-context'; 


const App = () => {
    // Access context without destructuring into 'state'
    const habbitCtx = useContext(habbitContext);
    const { habbits, months } = habbitCtx; // Direct access to habbits and months
    const [dateFilter, setDateFilter] = useState(moment());
    const [habitData, setHabitData] = useState([]); // Pie chart data

    const monthId = `${dateFilter.month() + 1}_${dateFilter.year()}`;
    const filterTitle = dateFilter.format("MMMM yyyy.");
    const numOfDaysInMonth = dateFilter.daysInMonth();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: `/month/${monthId}` });
    }, [monthId]);

    const changeMonthHandler = (value) => {
        const newDate =
            value > 0
                ? moment(dateFilter).add(value, "months")
                : moment(dateFilter).subtract(Math.abs(value), "months");
        const selectedMonth = habbitCtx.months.find(
            (month) => month.id === `${newDate.month() + 1}_${newDate.year()}`
        );
        if (!selectedMonth) {
            habbitCtx.addMonth({
                id: `${newDate.month() + 1}_${newDate.year()}`,
                days: [...Array(newDate.daysInMonth()).keys()].map(() => []),
            });
        }
        setDateFilter(newDate);
    };

    // Analyze habit data and generate pie chart data
    useEffect(() => {
        if (habbits && months) {
            const habitCheckCount = analyzeHabitData({ habbits, months });
            const pieChartData = getPieChartData(habitCheckCount, habbits);
            setHabitData(pieChartData); // Set pie chart data
        }
    }, [habbits, months]);

    return (
        <>
            <Header />
            <MonthFilter title={filterTitle} onMonthChanged={changeMonthHandler} />
            <Habbits monthId={monthId} numOfDays={numOfDaysInMonth} />

            {/* Render the pie chart if habit data is available */}
            {habitData.length > 0 && (
                <div>
                    <h2 className="habit-chart-headline">Habit Completion Chart</h2>
                    <HabitPieChart habitData={habitData} />
                </div>
            )}
        </>
    );
};

export default App;
