
export default Route

import Header from '../Components/Header.tsx'

function Route ( { children } : { children : React.ReactNode } ){
    return <>

        <Header />

        { children }

    </>
}
