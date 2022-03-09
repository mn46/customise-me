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
    console.log(data);
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

    if (oils.note = "") {
        return;
    }

// template for top note

    if (oils.note = "headnote") {
        const topTemplate = document.querySelector("#top_note_oil").content;
        const topClone = topTemplate.cloneNode(true);

        // content

        topClone.querySelector(".oil_info img").src = "";
        topClone.querySelector(".oil_info h4").textContent = oils.name;
        topClone.querySelector(".oil_info p").textContent = oils.description;

        // adding to parent

        document.querySelector(".container_oils_top").appendChild(topClone);
    }
    

    function hoverElement() {
        document.querySelector(".color_icon").addEventListener("click", swapImage());

        function swapImage() {
            document.querySelector(".color_icon img:first-of-type").classList.add("hidden");
            document.querySelector(".color_icon img:last-of-type").classList.remove("hidden");
        }
    }

    

    console.log(hoverElement);
    hoverElement();


}

// creating the template