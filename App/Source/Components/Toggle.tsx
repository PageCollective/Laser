
export type { Props as ToggleProps }
export { Component as Toggle }


interface Props {

    onToggle : ( state : boolean ) => void
    active : boolean
}


function Component ( props : Props ){

    const { onToggle , active } = props

    const color = ( active )
        ? 'bg-green-400' : 'bg-red-400'


    return (

        <div

            onClick = { () => onToggle( ! active ) }

            class = { `
                ${ color } rounded-md
                w-6 h-6 cursor-pointer
            ` }

        />
    )
}
