const url = "https://customiseme-b89c.restdb.io/rest/benefits"

const options = {
    headers: {
        "x-apikey": "62274d9adced170e8c83a05c",
    },
};

fetch(url, options)
.then((response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
})
.then((data) => {
    //We have the data
    //console.log(data);
    getData(data);
})
.catch((e) => {
    //Whoops something went wrong
    console.error("An error occured:", e.message);
});

// getting the data

function getData(data) {
    data.forEach(addTemplate);
}

function addTemplate(oils) {

    if (oils.note === "") {
        return;
    }

    // template for top note

    if (oils.note === "headnote") {
        const topTemplate = document.querySelector("#top_note_oil").content;
        const topClone = topTemplate.cloneNode(true);

        // content

        topClone.querySelector(".oil_info img").src = `css/assets/oils/${oils.img}`;
        topClone.querySelector(".oil_info h4").textContent = oils.name;
        topClone.querySelector(".oil_info p").textContent = oils.description;

        // adding to parent

        document.querySelector(".container_oils_top").appendChild(topClone);
    }

    // template for middle note

    if (oils.note === "heartnote") {
        const middleTemplate = document.querySelector("#middle_note_oil").content;
        const middleClone = middleTemplate.cloneNode(true);

        // content

        middleClone.querySelector(".oil_info img").src = `css/assets/oils/${oils.img}`;
        middleClone.querySelector(".oil_info h4").textContent = oils.name;
        middleClone.querySelector(".oil_info p").textContent = oils.description;

        // adding to parent

        document.querySelector(".container_oils_middle").appendChild(middleClone);
    }

    // template for base note

    if (oils.note === "basenote") {
        const baseTemplate = document.querySelector("#base_note_oil").content;
        const baseClone = baseTemplate.cloneNode(true);

        // content

        baseClone.querySelector(".oil_info img").src = `css/assets/oils/${oils.img}`;
        baseClone.querySelector(".oil_info h4").textContent = oils.name;
        baseClone.querySelector(".oil_info p").textContent = oils.description;

        // adding to parent

        document.querySelector(".container_oils_base").appendChild(baseClone);
    }

}

// elements appearing on the left

let heart = document.querySelector("#heart_icon");
let cedar = document.querySelector("#cedar_icon");
let patchouli = document.querySelector("#patchouli_icon");
let rosemary = document.querySelector("#rosemary_icon");
let price = document.querySelector("#grid_left #price_container p");
let sum = 0;

displayHeart();
displayRosemary();
displayPatchouli();
displayCedar();

function hideText() {
    document.querySelector("#start_creating h2").classList.add("hidden");
}

function showHeart() {
    heart.classList.remove("hidden");
}

function showCedar() {
    cedar.classList.remove("hidden");
}

function showPatchouli() {
    patchouli.classList.remove("hidden");
}

function showRosemary() {
    rosemary.classList.remove("hidden");
}

function displayCedar() {
    document.querySelector(".container_oils_base").addEventListener("click", showCedar);
    addPrice();
}

function displayPatchouli() {
    document.querySelector(".container_oils_middle").addEventListener("click", showPatchouli);
    addPrice();
}

function displayRosemary() {
    document.querySelector(".container_oils_top").addEventListener("click", showRosemary);
    addPrice();
}

function displayHeart() {
    document.querySelector("#shapes .color_icon").addEventListener("click", showHeart);
    document.querySelector("#shapes .color_icon").addEventListener("click", hideText);
    addPrice();
}

function addPrice() {
    let newSum = sum + 10;
    price.textContent = "DKK" + newSum;
}


