
class valuePair
{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
    getKey()
    {
        return this.key;
    }
    getValue()
    {
        return this.value;
    }
    toString(){
        return "["+this.key+"-"+this.value+"]";
    }
}

// Designing HashTable Using Sperate Chaining
// to avoid collision 
class SeparateChaining
{
    constructor(){
        this.table = [];
    }
     
    loseloseHashCode(key){
        var hashcode = 0;
        for(var i = 0 ; i < key.length; i++){
            hashcode += key.charCodeAt(i);
        }
        return hashcode % 37;
    }

    put(key, value){
        var getHashCode = this.loseloseHashCode(key);
        if(this.table[getHashCode] == undefined)
            this.table[getHashCode] = new LinkedList();

        this.table[getHashCode].add(new valuePair(key, value));
    }
    get(key){
        var getHashCode = this.loseloseHashCode(key);
        if(this.table[getHashCode] !== undefined){

            var curr = this.table[getHashCode].getHead();

            while(curr.next){
                if(curr.element.getKey() === key)
                    return curr.element.getValue();

                curr = curr.next;
            }

            if(curr.element.getKey() === key)
                return curr.element.getValue();

        }
        return undefined;
    }
    remove(key){
        var getHashCode = this.loseloseHashCode(key);
        if(this.table[getHashCode] !== undefined)
        {
            var curr = getHead();

            while(curr.next){
                if(curr.element.getKey() === key){
                    this.table[getHashCode].remove(curr.element);
                    if(this.table[getHashCode].isEmpty()){
                        this.table[getHashCode] = undefined;
                    }
                    return true;
                }
                curr = curr.next;
            }

            if(curr.element.getKey() === key){
                this.table[getHashCode].remove(curr.element);
                if(this.table[getHashCode].isEmpty()){
                    this.table[getHashCode] = undefined;
                }
                return true;
            }
        }
        return false;
    }
    print(){
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] !== undefined) {
               console.log(this.table[i].printList());
            }
        }
    }
}
var hashtable = new SeparateChaining();
hashtable.put("sum", "sumit");
hashtable.put("sum", "aman");
hashtable.put("am", "amit");
hashtable.put("sm", "smruti");
hashtable.put("go", "sourav");
hashtable.put("go", "gourav");
hashtable.put("go", "pratyush");

hashtable.print();
