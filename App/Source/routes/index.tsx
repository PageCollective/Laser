
export default Route

import { fetchBeauticians , Beautician } from 'Shopify/API'
import { PageProps , Handlers } from 'Fresh/server.ts'

import  Wrap from '../islands/Wrap.tsx'


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
        <Wrap { ... context.data } />
    </>

    // const [ day , setDay ] = useState(0)


    // const con = {
    //     setDay : ( day : number ) => console.log('day',day)
    // } satisfies Context


    // return <>

    //     <div class = 'Schedule--Wrapper' >

    //         <BeauticianSelection beauticians = { beauticians } />

    //         <WeekdaySelection context = { con } />

    //         <AppointmentSelection />

    //         <AppointmentDetails />

    //         <div class = 'Schedule--Actions' >
    //             <div class = 'Schedule--Help button shadow' title = 'Help' >
    //                 <Icon_Help color = 'var(--Color-Tertiary)' />
    //             </div>
    //         </div>

    //     </div>
    // </>
}
