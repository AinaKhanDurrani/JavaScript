function sumOfArray(){

    var array=document.getElementById('array').value

    var arr=array.split(',');
    var sum=0
    for (let i=0;i<arr.length ; i++){
        sum += parseInt(arr[i]);

    }
    document.getElementById('result').innerHTML = "Result: " + sum;

}
function findMax(){

    var array=document.getElementById('array').value

    var arr=array.split(',');
    
    var max=arr[0];
    for (let i=1;i<arr.length ; i++){
       if(max<parseInt(arr[i])){
        max=parseInt(arr[i])
       }

    }
    document.getElementById('result').innerHTML = "Result: " + max;

}
function findMin(){

    
    var array=document.getElementById('array').value

    var arr=array.split(',');
    var min=arr[0];
    for (let i=1;i<arr.length ; i++){
       if(min>parseInt(arr[i])){
        min=parseInt(arr[i])
       }

    }
    document.getElementById('result').innerHTML = "Result: " + min;

}
