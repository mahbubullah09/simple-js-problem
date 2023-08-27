//select student whose are fullfilled scic condition

const students = [
    { name: "mehedy bro", email: 'mehedy@gamil.com', avg: 56, fiftyPercent: true },
    { name: "rokib bro", email: 'rokib@gamil.com', avg: 57, fiftyPercent: false },
    { name: "sakib bro", email: 'sakib@gamil.com', avg: 42, fiftyPercent: false },
    { name: "sojib bro", email: 'sojib@gamil.com', avg: 52, fiftyPercent: true },
    { name: "sunny bro", email: 'sunny@gamil.com', avg: 32, fiftyPercent: false },
    { name: "saki bro", email: 'sunny@gamil.com', avg: 37, fiftyPercent: true },
    { name: "jackie bro", email: 'jackie@gamil.com', avg: 57, fiftyPercent: true }
]


const selected= students.filter((select) =>  select.avg >= 50 && select.fiftyPercent === true);

console.log(selected);
const selectedName= selected.map((sName) => sName.name).join(' , ');
const selecteEmail= selected.map((sMail) => sMail.email).join(' , ');


console.log(selectedName);
console.log(selecteEmail);

let count=1;
for(select of selected){
    
console.log(`${count++}. Name: ${select.name} & email: ${select.email}`);





}