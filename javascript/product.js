// console.log("hello");
// const browserUrl = window.location.search;
// const urlParams = new URLSearchParams(browserUrl);
// const id = urlParams.get("_id")

const url = "https://customiseme-b89c.restdb.io/rest/products/62274ce4b55385400001867f";
// const url = `https://customiseme-b89c.restdb.io/rest/products?q={"_id":"${id}"}`;
// const url = "https://customiseme-b89c.restdb.io/rest/products"; 
// an id=62274ce4b55385400001867f

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
    handleData(data);
})
.catch((e) => {
    //Whoops something went wrong
    console.error("An error occured:", e.message);
});

function handleData(soap) {
    console.log("soapShowing");
    document.querySelector("h2").textContent = soap.name;
    // document.querySelector("h2").textContent = soap.Title;

    document.querySelector(".ingredientList").textContent = soap.ingredients;
    document.querySelector(".shortProductDescription").textContent = soap.description;
    document.querySelector(".price").textContent = soap.price;

    document.querySelector(".productpage img").src=`./${soap.img}`;
    // document.querySelector("img.moviePoster").alt=movie.Title;
    // document.querySelector("img.moviePoster").src=`./${movie.image}`;
}

