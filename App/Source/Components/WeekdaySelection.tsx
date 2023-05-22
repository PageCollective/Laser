
export { WeekdaySelection }

import DaySelection from '../islands/DaySelection.tsx'



function WeekdaySelection (){

    return <>
        <div class = 'Schedule--Weekdays'>
            <div class = 'Widget'>

                <div class = 'Week' >



                </div>

                <DaySelection />

            </div>
        </div>
    </>
}


