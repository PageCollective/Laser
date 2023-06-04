
export default Page

import { Handlers , PageProps } from 'Fresh/server.ts'
import { fetchProducts } from '../Shopify/Storefront/Queries/Products/_.ts'
import { ProductTile } from 'UI'
import { Product } from 'Storefront/Types'
import { Footer } from '../Components/Page/Footer.tsx'
import { Head } from '../Components/Head.tsx'


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

    return <>

        <style> { `

            body {
                background : #f9f9f9 ;
            }

        ` } </style>


        <div class = { `
            flex flex-col justify-center
            lg:max-w-4xl max-w-xs
            mx-auto
        ` } >

            <Head
                description = { `Shop of the Laser Hair Removal salon` }
                domain = { context.url.host }
                title = { `Laser Hair Removal` }
                image = { context.url.origin + '/Preview.png' }
                link = { context.url.href }
            />

            <div
                aria-labelledby = 'information-heading'
                class = 'w-11/12 max-w-5xl mx-auto mt-28'
            >

                <h2
                    class = 'sr-only'
                    id = 'information-heading'
                > Product List </h2>

                <div class = { `
                    grid gap-8
                    grid-cols-2 lg:grid-cols-3
                ` } > { tiles } </div>

            </div>

            <Footer />

        </div>

    </>
}
