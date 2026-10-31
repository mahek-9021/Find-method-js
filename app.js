let cl=console.log;

var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];


// Find() method

// task1

let id = 5;

let result= companies.find((params)=>{
    return params.id === id;

});

cl(result);


// task2

let givenId2 = 9;

let result2  = companies.find((params)=>{
    return params.id === givenId2;  
});
cl(result2)


// task3

let givenId3 = 10;

let result3 = companies.find((comp)=>{
    return comp.category.toLowerCase().includes('retail');
});
cl(result3);


// task4

let result4 = companies.find((comp)=>{
    return comp.start > 1985 && comp.end < 2005;

});
cl(result4)


    // task5
let givenId5 = 2
    let result5 = companies.find((params)=>{
     return params.id === givenId5;
    })
cl(result5);