
export default Route

import { AppProps } from 'Fresh/server.ts'
import { Head } from 'Fresh/runtime.ts'


function Route ( { Component } : AppProps ){
    return <>

        <Head>

            <link rel = 'stylesheet' href = '/app.css' />

        </Head>

        <Component />

    </>
}
