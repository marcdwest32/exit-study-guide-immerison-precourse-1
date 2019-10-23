// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
    // Be sure you understand the instructions.
    // Pseudocode your logic.
    // Breathe.
    // You can do this.


/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////


const pureShuffle = array => {
    let myArray = Array.from(array);
    
    for(let i = myArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
    }
    return myArray;
};

const isPalindrome = (string) => {
    string = string.toLowerCase();
    if (!string) {
        return undefined;
    }
    return string === string.split('').reverse().join('');
}

const mergeObjects = (...objs) => {
    return Object.assign(...objs);
    // _.each(objs, (object) => {
    //     _.each(object, (value, key) => {
    //         obj[key] = value;
    //     })
    // })
    // return obj;
};

const semiMerge = (object, ...objs) => {
    objs.forEach(obj => {
        for(let key in obj) {
            if(obj[key]) {
                object[key] = obj[key]
            }
        }
    })
    console.log(object)
    return object
}

//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    for (let key in obj) {
        if(obj[key] === value) {
            obj[key] = newValue
        } else if (typeof obj[key] === 'object') {
            replaceValuesInObj(obj[key], value, newValue)
        }
    }
    return obj;
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    for (let key in obj) {
        if(typeof obj[key] === 'object') {
            addKeysToExistingObj(obj[key], newKey, newValue);
        } else if (!obj.hasOwnProperty(newKey)) {
            obj[newKey] = newValue;
        }
    }
    return obj;
};

var map = (arr, func, result = []) => {
    if(arr.length === 0) {
        return [];
    } else {
        result.push(func(arr[0]));
        map(arr.slice(1), func)
    }
    return result;
}


/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
    { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
    { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
    { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
    { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
    { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
    { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
    { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
    { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
    { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
    { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];

/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = (comedians) => {
    return comedians.filter(comedian => comedian.begin >= 2005 && comedian.actor.length > 10)
        .map(comedian => {
            comedian = {
                appearanceNumber: `#${comedian.number}`,
                name: comedian.actor,
                seasonsActive: comedian.end - (comedian.begin - 1),
            }
            return comedian
        })
};

var comedianNamesFilteredAndMapped = (comedians) => {
    // Your code here

};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    return comedians.reduce((actors, comedian) => {
        if (comedian.begin >= 2005 && comedian.actor.length > 10) {
            const newComedian = {
                appearanceNumber: `#${comedian.number}`,
                name: comedian.actor,
                seasonsActive: comedian.end - (comedian.begin - 1),
        }
        actors.push(newComedian)
        }
        return actors;
    }, [])
};

var comediansReduced2 = (comedians) => {
    // Your code here

};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
