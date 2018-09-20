class Sorter {

  constructor() {
    this.arr = [];
  }

  add(element) {
   this.arr.push(element); 

  }

  at(index) {
    return this.arr[index];
  }

  get length() {
   return this.arr.length;

  }

  toArray() {
    return this.arr;
  
  }

  sort(indices) {

      var sotrArray=[];
       
      function compareNumbers(a, b) {
         return a - b;
      } 

      for(var i=0; i<indices.length;i++){
        sotrArray.push(this.arr[indices[i]]);
      }
      
      
      sotrArray.sort(compareNumbers);

      for(var i=0;i<sotrArray.length;i++){
        this.arr[indices[i]] = sotrArray[i];
      }
     
      
  
  }
       
  setComparator(compareFunction) {
  
  }

}

module.exports = Sorter;