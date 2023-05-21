
import { Beautician } from 'Shopify/API'


interface Props {
    beauticians : Array<Beautician>
}


function BeauticianSelection ( { beauticians } : Props ){

    const choices = beauticians
        .map(toSelection)

    return <>

        <div class = 'Beautician-Selection' >
            { choices }
        </div>
    </>
}


function toSelection ( beautician : Beautician ){

    return <>
        <div key = { beautician.name } class = 'button fill' >
            { beautician.name }
        </div>
    </>
}


export { BeauticianSelection }
