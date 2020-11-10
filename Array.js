const Memory = require('./memory.js')
const memory = new Memory()

console.log(Memory)


class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value){
        this._resize(this.length +1);
        memory.set(this.ptr + this.length,value);
        this.length++
       }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index){
        if(index < 0 || index >= this.length){
            throw new console.error(('index errors'));
        }
        return memory.get(this.ptr + index)
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
Array.SIZE_RATIO = 6

const myArray =  new Array()

myArray.push(20)
myArray.push(34)
myArray.push(44)
myArray.push(6)
myArray.push(44)
myArray.remove(4)
myArray.insert(1,3)

// myArray.get(6)
console.log(myArray)  

console.log(myArray.insert(3,55))  
console.log(myArray.get(4))  
// console.log(memory)  