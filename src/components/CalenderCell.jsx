import "./calender.css";

export default function CalenderCell({date,isToday,events=[] }){
    return(
        <div className={`calenderCell ${isToday ? "today-cell":""}`}>
            {date && <span className="date-number">{date.getDate()}</span>}
            
            <div className="eventsContainer">
                {events.map((eve,idx)=>(
                    <div key={idx} className="event-item">
                        {eve.title}
                        </div>
                ))}
            </div>
              </div>
    );
}