const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productListContainer = document.querySelector(".productlist");
const header = document.querySelector("h1").textContent = category

let allData, currentData;

fetch(`https://dummyjson.com/products/category/${category}`)
.then((res)=>res.json())
.then(data => {
    allData = currentData = data;
    showProducts(allData);
  });

function showProducts(data) { 
    console.log(data); 
productListContainer.innerHTML = "";
data.products.forEach((element)=>{
  productListContainer.innerHTML += `
        <div class="productlist_card">
          <div class="nedsat">-${element.discountPercentage}%</div>
          <a href="product.html">
            <img src="${element.thumbnail}" alt="product image" />
            <div class="product_info">
              <div class="text">
                <h3>${element.title}</h3>
                <h4>LIVINÈ EDITIONS</h4>
              </div>
              <div class=nedsat_pris>
              <p> DKK ${(element.price - element.price*element.discountPercentage/100).toFixed(2)},-</p>
              </div>
              <div class="pris">
                <p>DKK ${element.price},-</p>
              </div>
            </div>
          </a>
        ` ;
})
  }
