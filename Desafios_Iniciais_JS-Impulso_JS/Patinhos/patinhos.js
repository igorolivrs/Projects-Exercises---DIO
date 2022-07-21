let n = parseInt(gets());
        
while(n != -1) { 
    if (n == 0) {
        print(n);
    }else {
        print(n -=1);        
        n = parseInt(gets()); 
    }; 

};