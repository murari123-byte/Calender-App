import "./calender.css";

export default function WeekDays(){
    const days=["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return (
        <div className="weekdays">
            {days.map((day,index)=>(
                <div key={day} className={`weekday ${index===0 || index===6?"weekend":""}`}>
                    {day}
                    </div>
            ))}
        </div>
    );
}