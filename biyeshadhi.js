//select a patro from this object .If patro has a govt job then salary must be greater than 20000 & if patro has non-govt job then salary must be greater than 40000 




const patro = [
    { name: "Abdullah", job: "govt", salary: 17000 },
    { name: "Abbas", job: "non-govt", salary: 25000 },
    { name: "Karim", job: "govt", salary: 21000 },
    { name: "Hasib", job: "non-govt", salary: 47000 },
    { name: "Jamil", job: "govt", salary: 23000 },
    { name: "Mehedi", job: "non-govt", salary: 55000 },
  ];



  const jamai = patro.filter((pola)=> (pola.job === 'govt' && pola.salary >= 20000) || (pola.job === "non-govt" && pola.salary >= 40000));

const jamaiIndex = Math.floor(Math.random()*jamai.length);

const jamaiName = jamai[jamaiIndex].name;
const jamaiJob = jamai[jamaiIndex].job;
const jamaiSalary = jamai[jamaiIndex].salary;
console.log(`Name: ${jamaiName} 
Job: ${jamaiJob}
Salary: ${jamaiSalary}`);



