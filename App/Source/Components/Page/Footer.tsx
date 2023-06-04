
export { Component as Footer }

import {
    ShopifyBadge , GitHubBadge ,
    TablerBadge , FreshBadge
} from 'UI'


function Component (){

    return (
        <footer class = { `
            w-11/12 max-w-5xl
            mx-auto mt-24 sm:!mt-28 mb-8
            flex items-center
            md:justify-between justify-center
        ` } >

            <span class = { `
                flex flex-col md:flex-row flex-wrap
                items-center justify-center
                gap-4
            ` } >

                <FreshBadge />
                <ShopifyBadge />
                <GitHubBadge />
                <TablerBadge />

            </span>

        </footer>
    )
}
