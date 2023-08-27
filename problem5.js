function canPay(changeArray, totalDue) {
        
    if(changeArray.length == 0){
        return "Nothing in your array"
    }

    else if(typeof totalDue !== "number" ){
        return "Provide a valid numer in 2nd parameter"
    }


    else{

        let totalChange=0;
        for(var i=0; i<changeArray.length; i++){
            totalChange += changeArray[i];
         
        }

        if(totalChange>=totalDue){
            return true;
        }

        else{
            return false;
        }


    }


}



taka=[1,5,5];
price=10;

const output=canPay(taka, price);
console.log(output);