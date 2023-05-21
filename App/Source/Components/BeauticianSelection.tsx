
import { Beautician } from 'Shopify/API'


interface Props {
    beauticians : Array<Beautician>
}


function BeauticianSelection ( { beauticians } : Props ){

    const choices = beauticians
        .map(toSelection)

    return <>
        <div>{ choices }</div>
    </>
}


function toSelection ( beautician : Beautician ){

    return <>
        <div id = { beautician.name } >
            { beautician.name }
        </div>
    </>
}


export { BeauticianSelection }
