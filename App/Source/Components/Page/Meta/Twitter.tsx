
export type { Props as TwitterProps }
export { Component as TwitterMeta }


interface Props {

    description : string
    domain : string
    title : string
    image : string
    link : string
}


function Component ( props : Props ){

    const { description , domain , title , image , link } = props

    return <>

        <meta   property = 'twitter:card'
                content = { 'summary_large_image' } />

        <meta   property = 'twitter:description'
                content = { description } />

        <meta   property = 'twitter:domain'
                content = { domain } />

        <meta   property = 'twitter:title'
                content = { title } />

        <meta   property = 'twitter:image'
                content = { image } />

        <meta   property = 'twitter:url'
                content = { link } />

    </>
}
