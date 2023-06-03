
export { Component as GitHubBadge }

import { GitHubIcon , Badge } from 'UI'


function Component (){

    return (

        <Badge link = 'https://github.com/PageCollective/Laser' >

            <GitHubIcon class = 'w-6 h-6' />

            Published on <b> GitHub </b>

        </Badge>
    )
}

