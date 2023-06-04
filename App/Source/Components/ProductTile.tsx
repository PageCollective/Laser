
export type { Props as ProductTileProps }
export { Component as ProductTile }

import { Product , Image } from 'Storefront/Types'
import { formatCurrency } from '../Misc/Format/Currency.ts'

import MissingIcon from 'Icon/file-broken.tsx'
import OpenIcon from 'Icon/external-link.tsx'


interface Props {
    product : Product
}


function Component ( { product } : Props ){

    const { priceRange , handle , title } = product

    const price = priceRange.minVariantPrice

    const link = `/x/${ handle }`

    return (

        <div class = 'group select-none' >

            <a
                style = {{ aspectRatio : '1' }}

                href = { link }

                class = { `
                    w-full bg-white rounded-xl overflow-hidden
                    border-2 border-gray-200 transition-all
                    duration-500 relative block
                ` }
            >

                <Thumbnail image = { product.featuredImage } />

                <Overlay />

            </a>

            <div class = { `
                mx-auto w-5/6 text-center gap-1
                flex flex-col justify-center
                mt-3 text-gray-800
                text-md lg:text-lg
            ` } >

                <b class = 'font-bold select-text' >
                    { formatCurrency(price) }
                </b>

                <a href = { link } >

                    <h3 class = { `
                        Underline
                        font-medium relative
                        select-text
                    ` }> { title } </h3>

                </a>

            </div>

        </div>
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

            <OpenIcon size = { 30 } />

        </div>
    )
}
