
declare global {

    interface Window {
        IS_BROWSER : boolean
    }
}


import { useLayoutEffect , useState } from 'preact/hooks'
import { createContext , Component } from 'preact'
import { weekOfYear } from 'https://deno.land/std@0.188.0/datetime/mod.ts'
import { Beautician } from '../Shopify/Queries/Types.ts'

export type { Context }
export {
    Provider as ScheduleProvider
}


const Context = createContext<Context>({} as Context)


export const ScheduleContext = Context

interface Context {

    setBeautician : ( beautician : string ) => void
    setWeek : ( week : number ) => void
    setDay : ( day : number ) => void

    beautician : null | string
    week : number
    day : number
}


function getDay (){

    const day = new Date()
        .getDay()

    return ( day - 1 + 7 ) % 7
}

function getWeek (){
    return weekOfYear(new Date)
}

const toweek = getWeek()
const today = getDay()


interface Props {
    beauticians : Array<Beautician>
}



type History = null | {
    beautician ?: string
}

class Provider extends Component<Props> {

    render (){

        const [ beautician , setBeautician ] = useState< null | string >(null);
        const [ week , setWeek ] = useState(toweek)
        const [ day , setDay ] = useState(today)


        useLayoutEffect(() => {

            console.log('Window.histry',window.history)

            let beautician = window.history.state?.beautician as string | undefined

            if( beautician && ! this.props.beauticians.find(( personal ) => personal.handle === beautician ) )
                beautician = undefined;

                beautician ??= this.props.beauticians.at(0)!.handle

            setBeautician(beautician)

        },[])

        const data = {

            setBeautician : ( beautician : string ) => {

                const temp = window.history.state ?? {} as History

                temp.beautician = beautician;

                window.history.replaceState(temp,'Unused')
                console.log('Nnew State',window.history.state)

                setBeautician(beautician)
            } ,
            setWeek ,
            setDay ,

            beautician ,
            week ,
            day

        } satisfies Context



        return <>
            <ScheduleContext.Provider value = { data } >
                { this.props.children }
            </ScheduleContext.Provider>
        </>
    }
}
