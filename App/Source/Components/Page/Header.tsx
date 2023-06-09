
export type { Props as HeaderProps }
export { Component as Header }

// import Cart from "../islands/Cart.tsx";


interface Props {
    url : URL
}


function Component ( props : Props ){

    const { url } = props

    return (

        <header
            class = { `
                flex flex-col
                items-center
            ` }
        >

            <div
                class = { `
                    w-full bg-white
                    min-h-[10rem]
                    grid items-center justify-center
                ` }
            >

                <h1
                    class = { `
                        Title font-bold text-4xl font-[Inter]
                        text-gray-700
                    ` }
                > Laser Hair Removal </h1>

            </div>

            <div
                class = { `
                    h-[2px]
                    w-full bg-white
                    bg-gradient-to-b
                    from-white
                    to-[#f9f9f9]
                ` }
            />

            <nav
                class = { `
                    grid grid-flow-col auto-cols-fr
                    gap-8 items-center justify-center
                    mt-6
                ` }
            >

                <Link
                    current = { url.pathname === '/' }
                    link = '/'
                    name = 'Products'
                />

                <Link
                    current = { url.pathname === '/Appointments' }
                    link = '/Appointments'
                    name = 'Appointments'
                />

            </nav>

        </header>
    )
}



interface LinkProps {
    current : boolean
    link : string
    name : string
}


function Link ( props : LinkProps ){

    const { current , link , name } = props

    return (

        <a

            disabled = { current }
            href = { link }

            class = { `
                rounded-full
                flex items-center justify-center
                py-1 px-6
                font-bold
                text-gray-700
                text-lg
                ${ ( current ) ? `bg-white pointer-events-none` : '' }
            ` }

        > { name } </a>
    )
}
