function CatFind (num : number | string) {
    if (typeof num === 'string') {
        const intNum =parseInt(num)
        switch(intNum) {
            case 1 :
                return 'مواد غذایی'
    
            case 2 :
                return 'شستشو نظافت'
    
            case 3 :
                return 'آرایشی بهداشتی'
    
            case 4 :
                return 'خانه آشپزخانه'
                        
            case 5 :
                return 'برق و روشنایی'
        
            case 6 :
                return 'لوازم تحریر '
        
            case 7 :
                return 'سلامت محور'
        
            case 8 :
                return 'موارد دیگر'
        }
    }
    else {
    switch(num) {
        case 1 :
            return 'مواد غذایی'

        case 2 :
            return 'شستشو نظافت'

        case 3 :
            return 'آرایشی بهداشتی'

        case 4 :
            return 'خانه آشپزخانه'
                    
        case 5 :
            return 'برق و روشنایی'
    
        case 6 :
            return 'لوازم تحریر '
    
        case 7 :
            return 'سلامت محور'
    
        case 8 :
            return 'موارد دیگر'
    }
    }   
    return null
}


export {CatFind}