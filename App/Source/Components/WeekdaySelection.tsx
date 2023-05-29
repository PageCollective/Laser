
export { WeekdaySelection }

import WeekSelection from './WeekSelection.tsx'
import DaySelection from './DaySelection.tsx'



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


