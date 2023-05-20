
export default Route

import { PageProps , Handlers } from 'Fresh/server.ts'
import { graph } from '../Graph.ts'


interface Data {
    test : string
}


interface MetaObjectByHandle {

    data : {
        metaobjectByHandle : {
            displayName : string
        }
    }
}


export const handler = {

    async GET ( _request , context ){

        const query = `

            query MetaObjectByHandle ( $handle : MetaobjectHandleInput! ){

                metaobjectByHandle ( handle : $handle ){
                    displayName
                }
            }
        `

        const meta = await graph.query<MetaObjectByHandle>({
            data : {

                query ,

                variables : {
                    handle : {
                        handle : 'test' ,
                        type : 'test'
                    }
                }
            }
        })

        const data = {
            test : meta.body.data.metaobjectByHandle.displayName
        }

        return context.render(data)
    }

} satisfies Handlers<Data>



function Route ( context : PageProps<Data> ){

    const { data , url } = context;

    const testing = data.test;

    return <>

        <div>{ testing }</div>

        <p>

            This is an empty test page for the Laser app.

        </p>
    </>
}
