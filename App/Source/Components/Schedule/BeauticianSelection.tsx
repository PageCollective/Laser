
export { BeauticianSelection }

import { ScheduleContext } from '../../Hooks/Schedule.tsx'
import { useContext } from 'preact/hooks'
import { Beautician } from 'Shopify/API'


interface Props {
    beauticians : Array<Beautician>
}


function BeauticianSelection ( { beauticians } : Props ){

    const { beautician , setBeautician } =
        useContext(ScheduleContext)


    const choices = beauticians
        .map(( personal ) => <>
            <Item
                selected = { personal.handle === beautician }
                onClick = { () => setBeautician(personal.handle) }
                name = { personal.name }
            />
        </> )

    return <>

        <div class = 'Beautician-Selection' >
            { choices }
        </div>
    </>
}


interface ItemProps {

    onClick : () => void

    selected : boolean
    name : string
}


function Item ( { selected , onClick , name } : ItemProps ){

    const id = `Beautician-${ name }`

    return <>

        <label
            class = 'button fill'
            key = { name }
            id = { id }
        >

            <input
                checked = { selected }
                onClick = { onClick }
                type = 'checkbox'
                id = { id }
            />

            <span>{ name }</span>

        </label>
    </>
}
