// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}


//cart

const products = [
  {
    id: 1,
    name: "STINGS",
    price: 1.7,
    image: "images/stings.jfif",
  },
  {
    id: 2,
    name: "VS",
    price: 2 ,
    image: "",
  },
  {
    id: 3,
    name: "JAGUARS",
    price: 2.4,
    image: "./images/jaguars.png",
  },

  {
    id: 7,
    name: "ALOES",
    price: 1.6,
    image: "images/aloes.jfif",
  },
  {
    id: 8,
    name: "VS",
    price: 1.2 ,
    image: "",
  },
  {
    id: 9,
    name: "SUN BIRDS",
    price: 2.2,
    image: "./images/sun birds.jfif",
  },

  {
    id: 10,
    name: "KINGDOM STARS",
    price: 1.9,
    image: "images/Kingdom Stars.png",
  },
  {
    id: 11,
    name: "VS",
    price: 1,
    image: "",
  },
  {
    id: 12,
    name: "GOLDEN FIREBALLS",
    price: 2.1,
    image: "./images/Golden Fireballs.jfif",
  },

  {
    id: 4,
    name: "CRINUMS",
    price: 3,
    image: "images/crinums.jfif",
  },
  {
    id: 5,
    name: "VS",
    price: 2 ,
    image: "",
  },
  {
    id: 6,
    name: "FLAMES",
    price: 2.4,
    image: "./images/flames.png",
  },

];
const renderProducts = () => {
  const productDiv = document.querySelector(".products");
  productDiv.innerHTML = "";

  products.forEach((item, index) => {
    productDiv.innerHTML += ` <div class="card my-2 p-3 col-md-4">
        <div class="product__image">
            <img src="${item.image}" alt="">
        </div>
        <h2 class="product__title">${item.name}</h2>
        <h3 class="product__price">${item.price}</h3>
        <button class="btn btn-primary" onclick="addToCart(${item.id})">ADD</button>
    </div>`;
  });
};

let cart = {
  items: [],
  total: "WIN",
};

const renderCartItems = () => {
  const cartDiv = document.querySelector(".cart__items");
  cartDiv.innerHTML = "";

  const totalPriceElement = document.querySelector(".total__price");
  let totalPrice = 0;
  if (cart.items.length === 0) {
    totalPriceElement.innerHTML = "Choose a team";
  } else {
    cart.items.forEach((item) => {
      totalPrice += item.total;
      cartDiv.innerHTML += `
            <div class="col-md-4 mb-4">
            <h3 class="">${item.name}</button>
        </div>
        
        <div class="col-md-4 mb-4">
        <div class="qty">${item.price}</div>
        </div>
        <div class="col-md-4 mb-4">
            <button class="btn btn-danger" onclick='removeFromCart(${item.id})'>Delete</button>
        </div>
            `;
    });
    totalPriceElement.innerHTML = `Total : ${totalPrice}`;
  }
};

const addToCart = (id) => {
  const product = products.find((product) => product.id == id);
  let existingProduct = false;
  let newCartItems = cart.items.reduce((state, item) => {
    if (item.name == product.name) {
      existingProduct = true;
      const newItem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.price,
      };
      return [...state, newItem];
    }
    return [...state, item];
  }, []);
  if (!existingProduct) {
    newCartItems.push({
      ...product,
      qty: 1,
      total: product.price,
    });
  }
  cart={
    ...cart,
    items:newCartItems
  }
  renderCartItems();
};

const removeFromCart=(id)=>{
let newCartItems=cart.items.reduce((state,item)=>{
    if(item.id==id){
        const newItem={
            ...item,
            qty:item.qty-1,
            total:(item.qty-1)*item.price
        }
        if (newItem.qty>0) {
            return [...state,newItem]
        }
        else{
            return state
        }
    }
    return [...state,item]
},[])
cart={
    ...cart,
    items:newCartItems
}
renderCartItems();
}

renderCartItems();
renderProducts();
currentBalance();

//odds

function calculateOdds() {
	var probability = parseFloat(document.getElementById("probability").value);
	var betAmount = parseFloat(document.getElementById("betAmount").value);
	var decimalOdds = (1 / (probability / 100)).toFixed(2);
	var payout = (betAmount * decimalOdds).toFixed(2);
	var profit = (payout - betAmount).toFixed(2);
	document.getElementById("decimalOdds").innerHTML = decimalOdds;
	document.getElementById("payout").innerHTML = "R" + payout;
	document.getElementById("profit").innerHTML = "R" + profit;
}

function currentBalance(){
  //let tot = localStorage.getItem("Total");
  //debugger;
  document.getElementById("currBalance").innerText = localStorage.getItem("Total");
  return tot;
}
  const withdraw_btn = document.getElementById('PayButton');
  withdraw_btn.addEventListener('click', function(){
  const withdrawTotal = getInputNumb("withdrawalAmount");

  //updateSpanTest("currWithdraw", withdrawTotal);
  updateSpanTest("currBalance", -1 * withdrawTotal);
  //setting up the input field blank when clicked
  document.getElementById('withdrawalAmount').value = "";
  })

//function to parse string input to int
function getInputNumb(idName){
  const amount = document.getElementById(idName).value;
  const amountTotal = parseFloat(amount);
  return amountTotal;
}

function updateSpanTest(idName, addedNumber){
  //x1.1 updating balance the same way
  const currentAmount = document.getElementById(idName).innerText;
  const currentStringToInt = parseFloat(currentAmount);

  const total = currentStringToInt + addedNumber;
  localStorage.setItem("Total", total);

  //x1.2 setting this value in balance
  document.getElementById(idName).innerText = total;
  window.location.replace("success.html");
}
// debugger;
document.getElementById("currBalance").innerText = localStorage.getItem("Total");
function currentBalance(){
//let tot = localStorage.getItem("Total");
//debugger;
document.getElementById("currBalance").innerText = localStorage.getItem("Total");
}






