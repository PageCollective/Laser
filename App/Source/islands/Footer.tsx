
export default Component

import { detailed } from './Settings.tsx'

import FooterBadges from '../Components/FooterBadges.tsx'


function Component (){

    return (

        <footer

            style = {{ display : ( detailed.value ) ? 'flex' : 'none'  }}

            class = { `
                w-11/12 max-w-5xl
                mx-auto mb-8
                flex-col items-center
            ` }
        >

            { ( detailed.value ) && <FooterBadges /> }

        </footer>
    )
}
