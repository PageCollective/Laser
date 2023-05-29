
export { AppointmentSelection }

import { AppointmentPreview } from 'Types'
import { ScheduleContext } from '../Hooks/Schedule.tsx'
import { useContext } from 'preact/hooks'


interface Props {
    appointments : Array<AppointmentPreview>
}


function AppointmentSelection ( props : Props ){

    const { appointments } = props;

    const { beautician } =
        useContext(ScheduleContext)


    const rows = appointments
        .filter(( appointment ) => appointment.beautician === beautician )
        .map(toRow)


    return <>

        <div class = 'Schedule--Appointments' >
            { rows }
        </div>
    </>
}


function toRow ( data : AppointmentPreview ){

    return <>
        <div

            class = 'Appointment'
            key = { data.handle }

        >

            <span

                data-type = 'order'
                title = { `First 5 letters of the appointment's Id ( ${ data.handle } )` }

            >
                { '#' + data.handle.slice(0,5) }
            </span>

            <span

                data-type = 'name'
                title = { `First and last name of the customer` }

            >
                { data.customer.split(/ +/g).map((a) => <span>{ a }</span>) }
            </span>

            <span

                data-type = 'time'
                title = { `The appointment will start at ${ data.time.split('-')[0].trim() } and end at ${ data.time.split('-')[1].trim() }` }

            >
                { data.time }
            </span>

            <span

                data-type = 'duration'
                title = { `The duration of the appointment was estimated at ${ data.duration } minutes` }

            >
                { `⌛${ data.duration }m` }
            </span>

            <span

                data-type = 'status'
                title = { `The appointment is planned ( 📅 )` }

            >
                { '📅' }
            </span>

        </div>
    </>
}
