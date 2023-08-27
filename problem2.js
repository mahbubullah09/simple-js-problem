function matchFinder(string1, string2) {

    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Provide a valid string input.";
    }

    else{
      result=  string1.includes(string2);
      return result;
    }




}


let input1 = "Peter Parker";
let input2 = "Pet"

const output = matchFinder(input1, input2);

console.log(output);



