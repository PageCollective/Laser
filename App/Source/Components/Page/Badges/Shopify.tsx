
export { Component as ShopifyBadge }

import { ShopifyIcon , Badge } from 'UI'


function Component (){

    return (

        <Badge link = 'https://www.shopify.com/' >

            <ShopifyIcon class = 'w-6 h-6' />

            Connected to <b> Shopify </b>

        </Badge>
    )
}

