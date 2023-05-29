
export type { Props as GenericProps }
export { Component as GenericMeta }


interface Props {

    description : string
}


function Component ( props : Props ){

    const { description } = props

    return <>

        <meta   property = 'description'
                content = { description } />

    </>
}
