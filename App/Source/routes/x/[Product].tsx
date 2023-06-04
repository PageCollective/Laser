
export default Page

import { ProductTile } from 'UI'
import { PageProps } from 'Fresh/server.ts'
import { Base } from '../../Components/Page/Base.tsx'


interface Data {}


function Page ( context : PageProps<Data> ){

    const name = `Product`


    const meta = {
        description : `Shop of the Laser Hair Removal salon` ,
        domain : context.url.host ,
        title : `LHR - ${ name }` ,
        image : context.url.origin + '/Preview.png' ,
        link : context.url.href
    }


    return <>

        <Base meta = { meta } >



        </Base>

    </>
}
