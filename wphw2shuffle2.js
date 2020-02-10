function shuffle(){
var myArray = [0,1,2,3,4,5,6];
var currentNum = myArray.length;
var index, temp;

//Variables to set up the array and to set up the new mixed array

while(currentNum>0){
index = Math.floor(Math.random()* currentNum);
currentNum--;

temp = myArray[currentNum];
myArray[currentNum] = myArray[index];
myArray[index] = temp;

//While the variable which holds the current mixed numbers is greater than 0 it will shuffle the numbers randomly and make sure all the numbers are being used and set up properly


}

    document.getElementById('output').innerHTML = myArray;

}
