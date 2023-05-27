
# Beautician

MetaObject describing the personal and their schedule.

<br>

```ts
interface Beautician {
    
    /**
     *  Display name shown in the interface
     */
    
    name : SingleTextLine
    
    /**
     *  Image file shown in the interface
     */
    
    avatar ?: Date
    
    /**
     *  List of dates the personal is not available
     */
    
    unavailable : Date []
    
    /**
     *  JSON describing the personals regular schedule
     */
     
    schedule : {
        
        Monday    : [ 'HH:MM' , 'HH:MM' ] ,
        Tuesday   : [ 'HH:MM' , 'HH:MM' ] ,
        Wednesday : [ 'HH:MM' , 'HH:MM' ] ,
        Thursday  : [ 'HH:MM' , 'HH:MM' ] ,
        Friday    : [ 'HH:MM' , 'HH:MM' ] ,
        Saturday  : [ 'HH:MM' , 'HH:MM' ] ,
        Sunday    : [ 'HH:MM' , 'HH:MM' ]
    }
}
```

<br>