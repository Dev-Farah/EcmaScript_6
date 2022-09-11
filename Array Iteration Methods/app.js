let mobiles = [
    {
        brand: "apple",
        model: "iphone 13 mini",
        src: "./images/Apple/iphone-13-mini.jpg",
        details: {
            RAM: `4 GB`,
            ROM: `512 GB`,
            Price: `Rs.272,900`,
        },
    },
    {
        brand: "apple",
        model: "iphone 13",
        src: "./images/Apple/iphone-13-green.jpg",
        details: {
            RAM: `4 GB`,
            ROM: `512 GB`,
            Price: `Rs.300,500`,
        },
    },
    {
        brand: "apple",
        model: "iphone 13 pro",
        src: "./images/Apple/iphone-13-pro.jpg",
        details: {
            RAM: `8 GB`,
            ROM: `1 TB`,
            Price: `Rs.394,000`,
        },
    },
    {
        brand: "apple",
        model: "iphone 13 pro max",
        src: "./images/Apple/iphone-13-pro-max.jpg",
        details: {
            RAM: `8 GB`,
            ROM: `1 TB`,
            Price: `Rs.416,300`,
        },
    },
    {
        brand: "oppo",
        model: "oppo reno6",
        src: "./images/Oppo/OPPO Reno6.webp",
        details: {
            RAM: `8 GB + 5 GB`,
            ROM: `128 GB`,
            Price: `Rs.64,999`,
        },
    },
    {
        brand: "oppo",
        model: "reno6 pro 5g",
        src: "./images/Oppo/OPPO Reno6 Pro 5G.webp",
        details: {
            RAM: `12 GB + 7 GB`,
            ROM: `256 GB`,
            Price: `Rs.106,999`,
        },
    },
    {
        brand: "oppo",
        model: "oppo f17",
        src: "./images/Oppo/F17.webp",
        details: {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.37,999`,
        },
    },
    {
        brand: "oppo",
        model: "oppo f19 pro",
        src: "./images/Oppo/F19-Pro.webp",
        details: {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.46,999`,
        },
    },
    {
        brand: "samsung",
        model: "galaxy a03",
        src: "./images/Samsung/Galaxy-A03.jpg",
        details: {
            Display: `6.5″`,
            ROM: `64 GB`,
            Price: `Rs.23,999`,
        },
    },
    {
        brand: "samsung",
        model: "galaxy a32",
        src: "./images/Samsung/Galaxy-A32.png",
        details: {
            Display: `6.4″`,
            ROM: `128 GB`,
            Price: `Rs.47,500`,
        },
    },
    {
        brand: "samsung",
        model: "galaxy s20 fe",
        src: "./images/Samsung/Galaxy-S20 FE.jpg",
        details: {
            Display: `6.5″`,
            ROM: `128 GB`,
            Price: `Rs.102,999`,
        },
    },
    {
        brand: "samsung",
        model: "galaxy s22 ultra",
        src: "./images/Samsung/Galaxy-S22 Ultra.jpg",
        details: {
            Display: `6.8″`,
            ROM: `256 GB`,
            Price: `Rs.285,999`,
        },
    },
    {
        brand: "vivo",
        model: "y33s",
        src: "./images/Vivo/Vivo Y33s.jpg",
        details: {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.39,999`,
        },
    },
    {
        brand: "vivo",
        model: "y53s",
        src: "./images/Vivo/Vivo Y53s.jpg",
        details: {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.40,999`,
        },
    },
    {
        brand: "vivo",
        model: "v23 5g",
        src: "./images/Vivo/Vivo V23 5G.jpg",
        details: {
            RAM: `12 GB`,
            ROM: `256 GB`,
            Price: `Rs.89,999`,
        },
    },
    {
        brand: "vivo",
        model: "x70 pro",
        src: "./images/Vivo/Vivo X70 Pro.jpg",
        details: {
            RAM: `12 GB`,
            ROM: `256 GB`,
            Price: `Rs.139,999`,
        },
    },
];


// Get HTML DOM Elements
let brands = document.getElementById("brands");
let models = document.getElementById("models");
let productDetails = document.getElementById("productDetails");


// Getting All Brands from the Array of Objects
let allBrands = mobiles.map((val) => { return val.brand });
// console.log(allBrands);

// Remove Duplicates from all Brands
let getBrands = allBrands.filter((item, index) => allBrands.indexOf(item) === index);
// // OR
// let getBrands = [...new Set(allBrands)];
console.log(getBrands);


function fillMianKeys() {
    brands.innerHTML = `<option value="#" selected disabled>Select</option>`;

    for (let key of getBrands) {
        brands.innerHTML += `<option value="${key}">${titleCase(key)}</option>`;
        // console.log(key);
    };
};
fillMianKeys();


function fillDropdown2() {
    // Get Models of selected brand
    let getModels = mobiles.filter((val) => { if (val.brand == brands.value) { return val } }).map(val => { return val.model });
    // console.log(getModels);

    models.disabled = false;
    models.innerHTML = `<option value="#" selected disabled>Select</option>`;

    for (let keys of getModels) {
        models.innerHTML += `<option value="${keys}">${titleCase(keys)}</option>`;
        // console.log(keys);
    };
};

function showDetails() {
    productDetails.innerHTML = "";
    console.log(models.value);
    let getObject = mobiles.find(val => { if (val.model === models.value) { return val } });
    // // OR
    // let getObject = mobiles.filter(val => { if (val.model === models.value) { return val } })[0];
    let details = getObject.details;
    // console.log(getObject.src);


    // Create elements for image display
    let figure = document.createElement("figure");
    productDetails.appendChild(figure);

    let img = document.createElement("img");
    img.setAttribute("src", getObject.src);
    img.setAttribute("width", "280px");
    figure.appendChild(img);

    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `<h4>${titleCase(models.value)}</h4>`
    figure.appendChild(figcaption);

    let ul = document.createElement("ul");
    for (let i of Object.entries(details)) {
        ul.innerHTML += `<li><b>${i[0]}</b><br />${i[1]}</li>`;
    };
    productDetails.appendChild(ul);
};


// Convert text in Title Case
function titleCase(string) {
    let arr = string.split(" ");

    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j][0].toUpperCase() + arr[j].slice(1).toLowerCase();
    }
    let titleCase = arr.join(" ");

    // replacing some strings
    titleCase = titleCase.replace(/Iphone/g, "iPhone").replace(/5g/g, "5G").replace(/ Fe/g, " FE");
    // console.log(titleCase);
    return titleCase;
};