function Palindrom(str){var str_len =str.length;
    for (var i = 0;i<str_len;i++){
        for (var j = str_len-i-1;j>str_len-i-2;j--){
           if(str.substring(i, i+1)!==str.substring(j, j+1)){
               return 'String is not a Palindrom'
           }}}return 'String is a Palindrom'}