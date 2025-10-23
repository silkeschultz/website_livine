const productContainer = document.querySelector(".product-main");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://dummyjson.com/products/${id}`)
.then((res)=>res.json())
.then(data =>showProduct(data))
  
  function showProduct(product) { 
  productContainer.innerHTML = `<div class="product-card">
        <div class="image-container">
          <div class="discount-badge">-${product.discountPercentage}%</div>
          <img src="${product.thumbnail}" alt="product image" />
        </div>
      </div>

      <div class="product-info">
        <p class="brand">LIVINÈ EDITIONS</p>
        <h2 class="title">${product.title}</h2>
        <p class="price">${product.price} DKK</p>
        <hr class="divider" />
        <p class="description">${product.description}</p>
        <p class="stock"><span class="dot"></span>${product.stock} PÅ LAGER </p>
        <button class="add-to-cart">Add to cart</button>
      </div>`
  }