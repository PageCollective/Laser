
export { parse as parseJSON }


function parse ( json : string ) : null | any {

    try {
        return JSON.parse(json)
    } catch ( _exception ) {
        return null
    }
}
