export function generateCaleGrid(month, year){
    const dates=[];
    const firstDay=new Date(year,month,1).getDay();
    const daysinMonth=new Date(year,month+1,0).getDate();
    for(let i=0;i<firstDay;i++){
        dates.push(null);
    }
    for(let j=1;j<=daysinMonth;j++){
        dates.push(new Date(year, month,j)); //assume j as "day"
    }
    while(dates.length<42){
        dates.push(null);
    }
    return dates;
}