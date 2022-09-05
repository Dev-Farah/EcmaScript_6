// Instructions:
// Create a nested array and 3 level nested object...
// Copy the innermost nested value(s) (using the Spread Operator) 
// and store it in a separate variable(s).


// -------------------- Copy Object values using "Spread Operator" --------------------

const worldTradeCenters = {
    china: {
        beijing: {
            building1: "The China World Trade Center",
            building2: "World Trade Center Beijing CCPIT",
        },
    },
    germany: {
        hamburg: {
            building1: "World Trade Center Hamburg",
            building2: "Hanseatic Trade Center",
        },
    },
    netherlands: {
        amsterdam: {
            building1: "World Trade Center (Amsterdam)",
            building2: "World Trade Center Amsterdam Schiphol Airport",
        },
    },
};

const AmsterdamCenters = { ...worldTradeCenters.netherlands.amsterdam};
console.log(AmsterdamCenters);
document.write(`<h3>Amsterdam Trade Centers:</h3><p>${Object.values(AmsterdamCenters)}</p><br />`);
// console.log(worldTradeCenters.netherlands.amsterdam);





// -------------------- Copy Array values using "Spread Operator" --------------------

const someMovies = [
    'Begin Again',
    'Soul',
    [
        'Matrix', 
        'Matix Reloaded', 
        'Matrix Revolutions'
    ],
    [
        'Frozen', 
        'Frozen 2',
        [
            'Tangled',  
            'Alladin'
        ]
    ]
];

const copyInnermostArray = [...someMovies[3][2]];
console.log(copyInnermostArray);
document.write(`<h3>Extracted Movies:</h3><p>${copyInnermostArray}</p>`);
// console.log(someMovies);