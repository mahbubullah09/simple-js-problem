function findAddress(obj) {

    if (typeof obj !== "object") {
        return "Provide a valid object."
    }
    else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";


        return street + "," + house + "," + society;

    }
}

let sampleData = {

    street: 10,
    house: '15A',
    society: 'Earth Perfect'
};


const output = findAddress(sampleData);
console.log(output);