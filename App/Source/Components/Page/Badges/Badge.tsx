
export { Component as Badge }

import { ComponentChildren } from 'preact'


interface Props {
    children : ComponentChildren
    link : string
}


function Component ( { children , link } : Props ){

    return (

        <a
            style = {{ width : 'fit-content' }}

            class = { `
                Badge
                flex items-center gap-3 text-gray-700
                text-lg bg-white rounded-lg border
                border-gray-300 px-5 py-1 h-11
                whitespace-nowrap
                select-none
            ` }

            href = { link }

        > { children } </a>
    )
}

