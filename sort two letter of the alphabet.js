const array = ['apple', 'programming', 'illya', 'dima', 'roman', 'java'];

function sort(array)       
{                              
    for (let i = 0; i < array.length; i++){
      let result = array[i];
      let j = i - 1;
       while (j >= 0 && array[j][1] > result[1]){
         array[j+1] = array[j]; j--;
       }
       array[j+1] = result;
     }                    
    console.log(array);
}

sort(array)