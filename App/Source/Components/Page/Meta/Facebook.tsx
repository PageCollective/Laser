
export type { Props as FacebookProps }
export { Component as FacebookMeta }


interface Props {

    description : string
    title : string
    image : string
    link : string
}


function Component ( props : Props ){

    const { description , title , image , link } = props

    return <>

        <meta   property = 'og:description'
                content = { description } />

        <meta   property = 'og:title'
                content = { title } />

        <meta   property = 'og:image'
                content = { image } />

        <meta   property = 'og:type'
                content = { 'website' } />

        <meta   property = 'og:url'
                content = { link } />

    </>
}
