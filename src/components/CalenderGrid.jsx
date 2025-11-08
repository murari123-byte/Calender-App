import CalenderCell from "./CalenderCell";
import "./calender.css";

export default function CalenderGrid({dates,today, getEventsForDate}){
    return(
        <div className="calenderGrid">
            {dates.map((date,index)=>(
                <CalenderCell
                key={index} date = {date}
                isToday = { date && date.getDate()===today.getDate() &&
                    date.getMonth()===today.getMonth() && date.getFullYear()===today.getFullYear()
                }
                events={getEventsForDate(date)} />
            ))}
        </div>
    );
}