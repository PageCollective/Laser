
export { WeekdaySelection }

import { Context } from "../Hooks/Context.tsx";
import DaySelection from '../islands/DaySelection.tsx'



function WeekdaySelection ( { context } : { context : Context } ){

    return <>
        <div class = 'Schedule--Weekdays'>
            <div class = 'Widget'>

                <div class = 'Week' >



                </div>

                <DaySelection context = { context } />

            </div>
        </div>
    </>
}


