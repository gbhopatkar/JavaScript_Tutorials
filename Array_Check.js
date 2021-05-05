function Array_Check(num){
    if(isNaN(num) === true){return console.log(false);}
    else{
    var arr_num = [1,53,65,89,106];
    for(var i=0;i<arr_num.length;i++)
    {if (arr_num[i] === num){return console.log(true)}}
    return console.log(false)
    }
}