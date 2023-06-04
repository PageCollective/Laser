
export default Page

import { Handlers , PageProps } from 'Fresh/server.ts'
import { fetchProducts } from '../Shopify/Storefront/Queries/Products/_.ts'
import { ProductTile } from 'UI'
import { Product } from 'Storefront/Types'
import { Base } from '../Components/Page/Base.tsx'


interface Data {
    products : Array<Product>
}


export const handler = {

    async GET ( _request , context ){

        const productResponse = await fetchProducts({});
        console.log('Products',productResponse)

        return context.render({
            products : productResponse.data?.products.nodes ?? []
        })
    }

} as Handlers<Data>


function Page ( context : PageProps<Data> ){


    const { products } = context.data

    const tiles = products
        .map(( product ) => (

            <ProductTile
                product = { product }
                key = { product.id }
            />
        ))


    const meta = {
        description : `Shop of the Laser Hair Removal salon` ,
        domain : context.url.host ,
        title : `Laser Hair Removal` ,
        image : context.url.origin + '/Preview.png' ,
        link : context.url.href
    }


    return <>

        <Base meta = { meta } >

            <h2
                class = 'sr-only'
                id = 'information-heading'
            > Product List </h2>

            <div class = { `
                grid gap-x-8 gap-y-10
                grid-cols-2 lg:grid-cols-3
            ` } > { tiles } </div>

        </Base>

    </>
}
