// creating Dictionaries
class Dictionaries {

    // Declaring items as objects
    constructor() {
        this.items = {};
    }

    // returns true if key is present
    // in items
    has(key) {
        return key in this.items;
    }

    // Add an element to the dictionary 
    // with specified key and value
    set(key, value) {
        this.items[key] = value;
    }

    // retuns value for the specified 
    // key or else returns undefined
    get(key) {
        if (this.has(key))
            return this.items[key];
        else
            return undefined;
    }

    // returns an array conataining 
    // values for specified key
    values(key) {
        var values = [];
        for (var k in this.items) {
            if (this.has(k))
                values.push(this.items[k]);
        }
        return values;
    }

    // returns the entire item object
    getItems() {
        return this.items;
    }

    // Re - initialize the item 
    // it dumps all the existing element
    // clearing the item object
    clear() {
        this.items = {};
    }

    // Returns the number of element in 
    // Dictionary
    size() {
        return Object.keys(this.items).length;
    }

    // returns all the keys of the dictioanry
    keys() {
        return Object.keys(this.items);
    }

    // remove an element with a specified 
    // key
    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

}