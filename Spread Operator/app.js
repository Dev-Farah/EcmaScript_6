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

const amsterdamCenters = { ...worldTradeCenters.netherlands.amsterdam};
console.log(amsterdamCenters);

document.write(`<h2>Amsterdam Trade Centers</h2>`);
for (const entry of Object.entries(amsterdamCenters)) {
    document.write(`${entry[0]}: ${entry[1]} <br />`);
};
// console.log(worldTradeCenters.netherlands.amsterdam);
// OR
// document.write(`<h3>amsterdam Trade Centers:</h3><p>${Object.values(amsterdamCenters)}</p><br />`);





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
document.write(`<h2>Extracted Movies:</h2>`);
for (let i = 0; i < copyInnermostArray.length; i++) {
    document.write(`${copyInnermostArray[i]}<br />`);
}
// console.log(someMovies);
// OR
// document.write(`<h2>Extracted Movies:</h2><p>${copyInnermostArray}</p>`);