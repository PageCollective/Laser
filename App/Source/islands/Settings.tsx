
export default Component

import { useKeys } from '../Hooks/Keys.tsx'
import { signal } from '@preact/signals'
import { Toggle } from 'UI'

import Cookie from 'Cookies'


export const detailed = signal(true)


function Component (){

    const [ isOpen ] = useKeys()

    const isAvailable = navigator.cookieEnabled

    const save = () => {

        const settings = {
            minimalist : ! detailed.value
        }

        Cookie.set('Settings',JSON.stringify(settings))
    }


    return (

        <dialog

            id = 'SettingsDialog'

            style = {{ display : ( isOpen ) ? 'flex' : 'none' }}

            class = { `
                fixed w-full h-full
                flex items-center justify-center
                z-50 bg-[#DDDDDD66]
            ` }
        >

            <div

                style = 'grid-template-columns : 1fr auto'

                class = { `
                    max-w-4xl
                    w-fit
                    h-fit
                    min-w-[20rem]
                    bg-white rounded-xl border-2 border-gray-200
                    p-12

                    flex flex-col
                    gap-10
                    font-mono

                ` }
            >

                { ( ! isAvailable ) && <>

                    <div class = { `
                        border-2 rounded-lg border-red-500
                        bg-red-50
                        p-4
                    ` } >

                        <h3 class = 'text-xl font-bold text-red-500' >
                            Cookies Disabled
                        </h3>

                        <p class = 'text-base text-red-800' >
                            The following settings cannot be saved as <br/>
                            you have disabled cookies for this site.
                        </p>

                    </div>

                </> }


                <div

                    style = 'grid-template-columns : 1fr auto'

                    class = { `
                        grid gap-2
                        items-center
                        text-lg
                        p-4
                    ` }
                >

                    <div>

                        <h3 class = 'text-xl font-bold' >
                            Minimalist
                        </h3>

                        <p class = 'text-base' >
                            Only display parts of the shop <br/>
                            that are essential for shopping.
                        </p>

                    </div>


                    <Toggle

                        onToggle = {

                            ( value ) => {
                                detailed.value = value;
                                save()
                            }
                        }

                        active = { detailed.value }
                    />

                </div>

            </div>

        </dialog>
    )
}
