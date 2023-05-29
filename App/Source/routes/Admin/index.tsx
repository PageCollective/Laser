
export default Route

import { fetchBeauticians , fetchAppointmentIds , fetchAppointments , Beautician } from 'Shopify/API'
import { PageProps , Handlers, HandlerContext } from 'Fresh/server.ts'
import { AppointmentPreview } from 'Types'

import Wrap from '../../islands/Wrap.tsx'


interface Failure {

}


interface Data {
    appointments : Array<AppointmentPreview>
    beauticians : Array<Beautician>
    errors : Array<Failure>
}


async function GET ( request : Request , context : HandlerContext<Data> ){

    const data = {
        appointments : [] ,
        beauticians : await fetchBeauticians() ,
        errors : [] ,

    } as Data

    const date = getParam('Date'); //! Validate format

    if( date ){

        console.log('Date',date)

        const appointmentIds = await
            fetchAppointmentIds({ date })

        console.log('Ids',appointmentIds)

        if( appointmentIds.success && appointmentIds.ids.length ){

            const appointments = await
                fetchAppointments(appointmentIds.ids)

            for ( const appointment of appointments )
                if( appointment.success )
                    data.appointments.push(appointment.data)
        }
    }

    console.log('Data',data)

    return context
        .render(data)

    function getParam ( name : string ){
        return new URL(request.url)
            .searchParams.get(name)
    }
}


export const handler = { GET } satisfies Handlers<Data>




function Route ( context : PageProps<Data> ){

    return <>
        <Wrap { ... context.data } />
    </>
}
