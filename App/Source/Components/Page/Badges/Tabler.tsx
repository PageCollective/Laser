
export { Component as TablerBadge }

import { Badge } from 'UI'

import TablerIcon from 'Icon/brand-tabler.tsx'


function Component (){

    return (

        <Badge link = 'https://tabler-icons.io/' >

            <TablerIcon class = 'w-6 h-6' />

            Icons by <b> Tabler </b>

        </Badge>
    )
}

