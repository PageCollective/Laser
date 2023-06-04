
export type { Props as BaseProps }
export { Component as Base }

import { HeadProps , Head } from '../Head.tsx'
import { ComponentChild } from 'preact'
import { Footer } from './Footer.tsx'

import Settings from '../../islands/Settings.tsx'


interface Props {
    children : ComponentChild
    meta : HeadProps
}


function Component ( props : Props ){

    const { children , meta } = props


    return <>

        <link rel = 'stylesheet' href = '/Index.css' />

        <style> { `

            body {
                background : #f9f9f9 ;
            }

        ` } </style>


        <Settings />


        <div class = { `
            flex flex-col justify-center
            lg:max-w-4xl max-w-xs
            mx-auto min-h-[100dvh]
        ` } >

            <Head { ... meta } />

            <div

                aria-labelledby = 'information-heading'
                children = { children }

                class = { `
                    w-11/12 max-w-5xl mx-auto mt-28
                    flex-grow
                ` }
            />

            <Footer />

        </div>

    </>
}
