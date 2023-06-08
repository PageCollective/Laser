
export { parse as parseCookie }


type CookieGroup = {
    Value : string
    Key : string
}

interface MatchError {
    error : 'FailedToMatch' ,
    value : string
}


const CookiePattern = /^(?<Key>[\s\S]*?)="?(?<Value>[\s\S]*)"?$/


function parse ( raw : string ){

    const
        cookies = new Map<string,string> ,
        errors = new Array<MatchError> ;

    for ( const cookie of raw.split('; ') ){

        const match = cookie
            .match(CookiePattern)

        if( match ){

            const { Value , Key } = match
                .groups as CookieGroup

            const value = decodeURIComponent(Value)
            const key = decodeURIComponent(Key)

            cookies.set(key,value)

            continue
        }

        errors.push({
            error : 'FailedToMatch' ,
            value : cookie
        })
    }


    return {
        cookies ,
        errors
    }
}
