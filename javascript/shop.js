//alert("hello")

const url = "https://customiseme-b89c.restdb.io/rest/products";

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

function handleData(data){
    console.log(data);
    data.forEach(showProduct);
}

function showProduct(product){
    console.log(product);
//grab the template
const template = document.querySelector("#productTemplate").content;

//clone it
const copy = template.cloneNode(true);

//change content
copy.querySelector("a").setAttribute("href", `product.html?_id=${product._id}`)
//copy.querySelector("a").setAttribute("href", `product.html?_id=${product.id}`)

copy.querySelector("h2").textContent = product.name;
copy.querySelector(".price").textContent = product.price;
//document.querySelector(".addToCartArea.price").textContent = product.price;

copy.querySelector("img").src=`./css/assets/products/${product.img}`;
    // document.querySelector("img").alt=soap.name;

//grab parent
const parent = document.querySelector(".productsGrid");

//append
parent.appendChild(copy);
}