
export { WeekdaySelection }

import WeekSelection from '../islands/WeekSelection.tsx'
import DaySelection from '../islands/DaySelection.tsx'



function WeekdaySelection (){

    return <>
        <div class = 'Schedule--Weekdays'>
            <div class = 'Widget'>

                <WeekSelection />

                <DaySelection />

            </div>
        </div>
    </>
}


