// Item 9 
// loacal var declaration 
function swap(a,i,j) { 
        temp = a[i];// globaly defined 
        a[i] = a[i]; 
        a[j] = temp; 
} 

function swap(a, i, j) { 
        var temp = a[i]
        a[i] = a[j] 
        a[j] = temp; 
} 


