
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

    return <>
        <Wrap { ... context.data } />
    </>
}
