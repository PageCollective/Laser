
export default Route

import { fetchBeauticians , Beautician } from 'Shopify/API'
import { PageProps , Handlers } from 'Fresh/server.ts'

import Icon_Help from 'Icon/help.tsx'



import {
    AppointmentSelection , BeauticianSelection ,
    AppointmentDetails , WeekdaySelection
} from 'Components'


interface Data {
    beauticians : Array<Beautician>
}


export const handler = {

    async GET ( _request , context ){

        const beauticians = await fetchBeauticians()

        const data = {
            beauticians
        }

        console.log('Data',data)

        return context
            .render(data)
    }

} satisfies Handlers<Data>



function Route ( context : PageProps<Data> ){

    const { beauticians } = context.data;

    return <>


        <div class = 'Schedule--Wrapper' >

            <BeauticianSelection beauticians = { beauticians } />

            <WeekdaySelection />

            <AppointmentSelection />

            <AppointmentDetails />

            <div class = 'Schedule--Actions' >
                <div class = 'Schedule--Help button shadow' title = 'Help' >
                    <Icon_Help color = 'var(--Color-Tertiary)' />
                </div>
            </div>

        </div>
    </>
}
