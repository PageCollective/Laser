
# Appointments

MetaObject bundling appointments to a specific  
date, used to establish querying for said date.

<br>

```ts
interface Appointments {
    
    /**
     *  All appointments said to take 
     *  place on the specified date
     */
    
    list : MetaObject<Appointment> []
    
    /**
     *  Date the appointments take place
     */
    
    date : Date
}
```

<br>