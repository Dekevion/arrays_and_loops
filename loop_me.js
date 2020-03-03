const companies = [
    {name: 'Company 1', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company 2', category: 'Retail', start: 1992, end: 2005},
    {name: 'Company 3', category: 'Auto', start: 1999, end: 2006},
    {name: 'Company 4', category: 'Retail', start:2000, end: 2017},
    {name: 'Company 5', category: 'Retail', start:2000, end: 2017},
    {name: 'Company 6', category: 'Retail', start:2000, end: 2017},
    {name: 'Company 7', category: 'Retail', start:2000, end: 2017},
];

const ages = [33,12,20,16,5,54,44,61,15,20,60,22,21];


// FOR

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}
 // console log each company and pluck out the current index with i


//FOREACH

companies.forEach(function (each_company,index) {
   console.log(index + 1 + ": " + each_company.name)
});

//FILTER

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
    if(i < 21) {
        canDrink.push(i);
        console.log(canDrink)
    }
}

// const canDrink = ages.filter(function (age) {
//     if(age >= 21){
//         return true
//     }
// });
// console.log(canDrink);

