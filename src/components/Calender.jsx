import { useState } from "react";
import "./calender.css";
import WeekDays from "./WeekDays";
import CalenderGrid from "./CalenderGrid";
import { generateCaleGrid } from "../utils/calender";
import events from "../data/events.json";

export default function Calender(){
    const today=new Date();
    const [curMonth,setCurMonth]=useState(today.getMonth());
    const [curYear,setCurYear]=useState(today.getFullYear());
    const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];

    const dates=generateCaleGrid(curMonth,curYear);
    const gotoNextMonth=()=>{
        if(curMonth===11){
            setCurMonth(0);
            setCurYear(curYear+1);
        }else{
            setCurMonth(curMonth+1);
        }
    };

    const gotoPrevMonth=()=>{
        if(curMonth===0){
            setCurMonth(11);
            setCurYear(curYear-1);
        }else{
            setCurMonth(curMonth-1);
        }
    };

    function getEventsForDate(date) {
        if(!date) return [];
        return events.filter(event=>{
            const eventDate=new Date(event.date);
            return(
                eventDate.getDate()===date.getDate() && eventDate.getMonth()===date.getMonth() &&
                eventDate.getFullYear()===date.getFullYear()
            );
        });
    }
    return(
        <div className="calenderContainer">
            <div className="calender-header">
                <button onClick={gotoPrevMonth}>&lt;</button>
                <h2>{monthNames[curMonth]} {curYear}</h2>
                <button onClick={gotoNextMonth}>&gt;</button>

            </div>
            <WeekDays/>
            <CalenderGrid dates={dates} today={today} getEventsForDate={getEventsForDate}/>
        </div>
    );
}
