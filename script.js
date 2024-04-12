// const scroll = new LocomotiveScroll({
//   el: document.querySelector('main'),
//   smooth: true
// });

const wrapper = document.querySelector(".sliderWraper");
const lists = document.querySelectorAll(".list")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 129,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let chooseProduct = products[0]

const currentProductImg = document.querySelector(".productingImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

lists.forEach((item,index) => {
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product
        chooseProduct=products[index]

        // change text of currentProduct
        currentProductTitle.textContent=chooseProduct.title;

        // change text of currentProduct price
        currentProductPrice.textContent="$"+chooseProduct.price;

        // change text of currentProduct img
        currentProductImg.src = chooseProduct.colors[0].img;

        //assing new color

        currentProductColors.forEach((color, index) => {
          color.style.backgroundColor = chooseProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", ()=> {
    currentProductImg.src = chooseProduct.colors[index].img;
  })
})

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", ()=> {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// wrapper.style.transform = "translateX(-100vw)";

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector("#close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
    productButton.style.color = "white";
    productButton.style.backgroundColor= "black";
});

close.addEventListener("click", ()=>{
  payment.style.display = "none";
});

