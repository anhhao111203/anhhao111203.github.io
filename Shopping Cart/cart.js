let carts = document.querySelectorAll('.addCard');

let products = [
    {
      name: "Pug Dog 1",
      tag: "Dog-2",
      price: 12690000,
      inCart: 0,
    },
    {
      name: "Pug Dog 2",
      tag: "Dog-1",
      price: 14066000,
      inCart: 0
    },
    {
      name: "Spitz 1",
      tag: "Dog-3",
      price: 15290000,
      inCart: 0
    },
    {
      name: "Spitz 2",
      tag: "Dog-6",
      price: 12000000,
      inCart: 0
    },
    {
      name: "Dog Type 1",
      tag: "Dog-4",
      price: 12000000,
      inCart: 0
    },
    {
      name: "Dog Type 2",
      tag: "Dog-5",
      price: 10120000,
      inCart: 0
    }
    ,
    {
      name: "Dog Type 3",
      tag: "Dog-7",
      price: 6000000,
      inCart: 0
    }
    ,
    {
      name: "Dog Type 4",
      tag: "Dog-8",
      price: 17020000,
      inCart: 0
    }
  ]

for(let i=0; i < carts.length; i ++)
{
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
      })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
  
    if(productNumbers)
    {
      document.querySelector('.cart span').textContent = productNumbers;
    }
  }

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers)
    {
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else
    {
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product)
{
  let cartItems = localStorage.getItem('productsInCart');
  cartItems =JSON.parse(cartItems);

  if(cartItems!=null)
  {
    if(cartItems[product.tag]==undefined)
    {
      cartItems = {
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart+=1;
  }
  else
  {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function totalCost(product)
{
    let cartCost= localStorage.getItem('totalCost');
    if(cartCost!=null)
    {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", product.price + cartCost);
    }
    else
    {
        localStorage.setItem("totalCost", product.price);
    }
    
}

function displayCart()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    let cartCost= localStorage.getItem('totalCost');

    if(cartItems && productContainer)
    {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="/Image/Dog/${item.tag}.png"> </img>
                <span>${item.name}</span>
        </div>

        <div class="price">${item.price}VND</div>

        <div class="quantity">
          <ion-icon class="decrease" name="arrow-back-circle"></ion-icon>
          <span>${item.inCart}</span>
          <ion-icon class="increase" name="arrow-forward-circle"></ion-icon>
        </div>
        
        <div class="total">
          ${item.inCart * item.price}VND
        </div>
        
        `;
    });

    productContainer.innerHTML += `
    <div class = "basketTotalContainer" >
      <h4 class="basketTotalTitle">
        BASKET TOTAL: 
      </h4>
      <h4 class ="basketTotal">
         ${cartCost}VND
      </h4>
      `;

    } 
}

onLoadCartNumbers();
displayCart();