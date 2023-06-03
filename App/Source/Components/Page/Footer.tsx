
export { Component as Footer }

import { ShopifyBadge , GitHubBadge , FreshBadge } from 'UI'


function Component (){

    return (
        <footer class = { `
            w-11/12 max-w-5xl
            mx-auto mt-24 sm:!mt-28 mb-8
            flex items-center
            md:justify-between justify-center
        ` } >

            <span class = { `
                flex items-center gap-4
                flex-col md:flex-row
            ` } >

                <FreshBadge />
                <ShopifyBadge />
                <GitHubBadge />

            </span>

        </footer>
    )
}
