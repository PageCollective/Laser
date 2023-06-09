
export default Page

import { fromCookies , type Settings } from 'Data'
import { Handlers , PageProps } from 'Fresh/server.ts'
import { Base } from '../../Components/Page/Base.tsx'


interface Data {
    settings : Settings
}


export const handler = {

    async GET ( request , context ){

        const header = request.headers.get('cookie') ?? ''

        const settings = fromCookies(header)

        console.debug('Cookie Settings',settings)

        return context.render({
            settings : settings
        })
    }

} as Handlers<Data>


function Page ( context : PageProps<Data> ){

    const meta = {
        description : `Shop of the Laser Hair Removal salon` ,
        domain : context.url.host ,
        title : `Laser Hair Removal` ,
        image : context.url.origin + '/Preview.png' ,
        link : context.url.href
    }


    return <>

        <Base
            settings = { context.data.settings }
            meta = { meta }
            url = { context.url }
        >



        </Base>

    </>
}
