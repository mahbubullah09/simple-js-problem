function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Please provide a valid number."
    }

    else{

        result= number*number*number;
        return result;
    }


}

const output= cubeNumber(4);
console.log(output);