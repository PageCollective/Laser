
export type { Props as ProductTileProps }
export { Component as ProductTile }

import { Product , Image } from 'Storefront/Types'
import { formatCurrency } from '../Misc/Format/Currency.ts'

import MissingIcon from 'Icon/file-broken.tsx'
import AddIcon from 'Icon/shopping-cart-plus.tsx'


interface Props {
    product : Product
}


function Component ( { product } : Props ){

    const { priceRange , handle , title , id } = product

    const price = priceRange.minVariantPrice

    console.log(priceRange)

    return (

        <a
            class = 'group'
            href = { `/x/${ handle }` }
            key = { id }
        >

            <div style = {{ aspectRatio : '1' }} class = { `
                w-full bg-white rounded-xl overflow-hidden
                border-2 border-gray-200 transition-all
                duration-500 relative
            ` } >

                <Thumbnail image = { product.featuredImage } />

                <Overlay />

            </div>

            <div class = { `
                mx-auto w-5/6 text-center
                flex flex-col justify-center
                mt-3 text-lg text-gray-800
            ` } >

                <h3 class = { `
                    font-medium relative
                ` }> { title } </h3>

                <b class = { `
                    font-bold
                ` } > { formatCurrency(price) } </b>

            </div>

        </a>
    )
}


interface ThumbnailProps {
    image : null | Image
}


function Thumbnail ( { image } : ThumbnailProps ){

    if( ! image )
        return (

            <div

                class = { `
                    flex justify-center items-center
                    absolute w-full h-full
                    group-hover:opacity-0 transition-all duration-400
                ` }
            >

                <MissingIcon class = 'w-8 h-8' />

            </div>
        )

    const { altText , url } = image

    return (

        <img

            height = '400'
            width = '400'

            alt = { altText ?? '' }
            src = { url }

            class = { `
                w-full h-full object-center
                object-contain absolute block
            ` }
        />
    )
}


function Overlay (){

    return (
        <div class = { `
            w-full h-full flex items-center justify-center
            bg-[#FFFFFFAA] opacity-0
            group-hover:opacity-100 transition-all duration-500
            absolute
        ` } >

            <AddIcon size = { 30 } />

        </div>
    )
}
