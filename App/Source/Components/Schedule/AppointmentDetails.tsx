
import { ScheduleContext } from '../../Hooks/Schedule.tsx'
import { useContext } from 'preact/hooks'


function AppointmentDetails (){

    const { day , week } = useContext(ScheduleContext)

    return <>

        <div class = 'Schedule--Details' >

            <p>
                Selected Day : { day }
            </p>

            <p>
                Selected Week : { week }
            </p>

        </div>
    </>
}


export { AppointmentDetails }
