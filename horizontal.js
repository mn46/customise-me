
const url = "https://customiseme-b89c.restdb.io/rest/products";
const options = {
    headers: {
        "x-apikey": "62274d9adced170e8c83a05c",
    },
};


fetch(url, options)
  .then((response) => {
    if(!response.ok) {
          throw Error (response.statusText);
    }
      return response.json();
  })

.then((data) => {
    console.log(data);
    handleData(data);
})

.catch((e) => {
    console.error("an error occured:", e.message);
});

function handleData(data) {
  console.log(data);
  data.forEach(showSoap);
}

function showSoap(product) {
console.log(product);

  const template = document.querySelector("#product_group").content;

  const copy = template.cloneNode(true);
  
  copy.querySelector(".product_link a").setAttribute("href", `product.html?_id=${product._id}`)

  copy.querySelector(".product_link img").src=`./css/assets/products/${product.img}`;
  copy.querySelector("h3").textContent = product.name;
  copy.querySelector(".price").textContent = product.price;

  const parent = document.querySelector(".soap");
  parent.appendChild(copy);
}
