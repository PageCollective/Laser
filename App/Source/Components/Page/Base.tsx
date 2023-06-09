
export type { Props as BaseProps }
export { Component as Base }

import { HeadProps , Head } from '../Head.tsx'
import { Settings as Sett } from 'Data'
import { ComponentChild } from 'preact'
import { Header } from './Header.tsx'

import SettingsData from '../../islands/SettingsData.tsx'
import Settings from '../../islands/Settings.tsx'
import Footer from '../../islands/Footer.tsx'


interface Props {
    children : ComponentChild
    settings : Sett
    meta : HeadProps
    url : URL
}


function Component ( props : Props ){

    const { children , meta , url } = props


    return <>

        <SettingsData settings = { props.settings } />

        <link rel = 'stylesheet' href = '/Index.css' />

        <style> { `

            body {
                background : #f9f9f9 ;
            }

        ` } </style>


        <Settings />


        <Header url = { url } />

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
                    mb-24
                ` }
            />

            <Footer />

        </div>

    </>
}
