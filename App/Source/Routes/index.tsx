
export default Route

import { fetchBeauticians , Beautician } from 'Shopify/API'
import { PageProps , Handlers } from 'Fresh/server.ts'


import {
    AppointmentSelection , BeauticianSelection ,
    AppointmentDetails , WeekdaySelection
} from 'Components'


interface Data {
    beauticians : Array<Beautician>
}


// interface MetaObjectByHandle {

//     data : {
//         metaobjectByHandle : {
//             displayName : string
//         }
//     }
// }


export const handler = {

    async GET ( _request , context ){

        const beauticians = await fetchBeauticians()

        console.log('Beauty',beauticians)

        // const query = `

        //     query MetaObjectByHandle ( $handle : MetaobjectHandleInput! ){

        //         metaobjectByHandle ( handle : $handle ){
        //             displayName
        //         }
        //     }
        // `

        // const meta = await graph.query<MetaObjectByHandle>({
        //     data : {

        //         query ,

        //         variables : {
        //             handle : {
        //                 handle : 'test' ,
        //                 type : 'test'
        //             }
        //         }
        //     }
        // })

        const data = {
            beauticians
            // test : ''//meta.body.data.metaobjectByHandle.displayName
        }

        return context
            .render(data)
    }

} satisfies Handlers<Data>



function Route ( context : PageProps<Data> ){

    const { data , url } = context;
    const { beauticians } = data;

    return <>

        <div>

            <BeauticianSelection beauticians = { beauticians } />

            <WeekdaySelection />

            <AppointmentSelection />

            <AppointmentDetails />

        </div>
    </>
}
