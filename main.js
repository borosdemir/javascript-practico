const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");

const cardsContainer = document.querySelector ('.cards-container')

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideMenuClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideMenuClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideMenuClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideMenuClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed){
    productDetailContainer.classList.add('inactive')
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else {
    if (!isDesktopMenuClosed) {
      desktopMenu.classList.add("inactive");
    }
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside () {
  shoppingCartContainer.classList.add('inactive')

  productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside () {
  productDetailContainer.classList.add('inactive')
}

const productList = [];

productList.push({
  name: 'Bike',
  price: '120',
  image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg',
  
});
productList.push({
  name: 'Car',
  price: '20000',
  image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?cs=srgb&dl=pexels-alexgtacar-1592384.jpg&fm=jpg',
  
});
productList.push({
  name: 'Tv',
  price: '300',
  image: 'https://images.pexels.com/photos/3151392/pexels-photo-3151392.jpeg?cs=srgb&dl=pexels-andre-moura-3151392.jpg&fm=jpg',
  
});
productList.push({
  name: 'Xbox X',
  price: '500',
  image: 'https://images.pexels.com/photos/12339571/pexels-photo-12339571.jpeg?cs=srgb&dl=pexels-imthiyaz-syed-12339571.jpg&fm=jpg',
  
});

function renderProduct(arr) {
  for ( product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement ('div');
  
    const productPrice = document.createElement ('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement ('p');
    productName.innerText =product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
  
    const productInfoFigure = document.createElement ('figure');
    const productImgCard = document.createElement ('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
  
  
    productInfoFigure.appendChild(productImgCard);
  
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProduct(productList);