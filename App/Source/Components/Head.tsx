
export type { Props as HeadProps }
export { Component as Head }

import { FacebookMeta , TwitterMeta , GenericMeta } from './_.ts'
import { Head } from 'Fresh/runtime.ts'


interface Props {

    description : string
    domain : string
    image : string
    title : string
    link : string
}


function Component ( props : Props ){

    const { title } = props

    return (
        <Head>

            <title> { title } </title>

            <link   sizes = '32x32'
                    href = '/favicon.ico'
                    rel = 'icon' />

            <FacebookMeta { ... props } />
            <TwitterMeta { ... props } />
            <GenericMeta { ... props } />

        </Head>
    )
}
