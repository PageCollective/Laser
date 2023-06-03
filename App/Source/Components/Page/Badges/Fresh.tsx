
export { Component as FreshBadge }

import { FreshIcon , Badge } from 'UI'


function Component (){

    return (

        <Badge link = 'https://fresh.deno.dev' >

            <FreshIcon class = 'w-8 h-8' />

            Made with <b> Fresh </b>

        </Badge>
    )
}

