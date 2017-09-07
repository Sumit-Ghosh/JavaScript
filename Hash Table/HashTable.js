// HashTable class
class HashTable
{
    // Constructor to initialize 
    // table array
    constructor()
    {
        this.table = [];
    }

    // method to be implemented 
    // get()
    // put()
    // remove()

    // generate hashcode
    loseloseHashCode(key)
    {
        var hashcode = 0;

        // Iterating over the array and suming the 
        // ascii value of each character
        for(var i = 0; i< key.length; i++)
        {
            hashcode += key.charCodeAt(i);
        }
        return hashcode % 37;
    }

    // Adding key and value to the table 
    put(key, value)
    {
        var getHashCode = this.loseloseHashCode(key);
        console.log(getHashCode + " - " + key);
        this.table[getHashCode] = value;
    }

    // Finding the value for corresponding key
    get(key)
    {
        return this.table[this.loseloseHashCode(key)];
    }
    
    // Remove key form the table
    remove(key)
    {
        this.table[this.loseloseHashCode(key)] = undefined;
    }

    // Print the contains of Hash Table
    printTable()
    {
        for(var i = 0; i < this.table.length; i++)
        {
            if(this.table[i] != undefined)
                console.log(i+ " - " + this.table[i]);
        }
    }
}

// Using the HashTable class
// Creating object for HashTable
var hashtable = new HashTable();

// Adding element to the table
hashtable.put("sum", "sumit");
hashtable.put("am", "amit");
hashtable.put("sm", "smruti");
hashtable.put("go", "sourav");

hashtable.printTable();

hashtable.remove("go");

hashtable.printTable();