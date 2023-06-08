
export default Component

import {
    ShopifyBadge , GitHubBadge ,
    TablerBadge , FreshBadge
} from 'UI'



function Component (){

    return (

        <span class = { `
            Footer_Badges
            flex flex-col md:grid md:grid-cols-2
            items-center justify-center
            gap-4
        ` } >

            <FreshBadge />

            <TablerBadge />

            <GitHubBadge />

            <ShopifyBadge />

        </span>
    )
}
