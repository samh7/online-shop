const products = [
  {
    id: "9382fc54-6e45-4668-aab2-e2a52c5a9bbb",
    price: "4490",
    available: "true",
    stock: "562",
    img_url: "./images/blue_shirt.png",
  },
  {
    id: "da5792a7-a429-47d2-8afa-f743fc078909",
    price: "4700",
    available: "true",
    stock: "50",
    img_url: "./images/blue_dress.jpg",
  },
  {
    id: "9902a3ff-a7f9-48e6-a1ec-47ad5a2162e4",
    price: "5609",
    available: "true",
    stock: "561",
    img_url: "./images/gold_dress.png",
  },
  {
    id: "8d58a753-4073-43ff-82a7-d5080d9dd6cf",
    price: "2100",
    available: "true",
    stock: "630",
    img_url: "./images/green_dress.png",
  },
  {
    id: "a31167fb-c916-4473-a05a-fed306377650",
    price: "5002",
    available: "true",
    stock: "368",
    img_url: "./images/marron_suit.webp",
  },
  {
    id: "dcaf5ead-af9b-4441-8ec4-59f449f94608",
    price: "748",
    available: "false",
    stock: "640",
    img_url: "./images/red_shirt.png",
  },
  {
    id: "9e4e8255-3d56-4b77-8522-2fe007781de4",
    price: "709",
    available: "true",
    stock: "810",
    img_url: "./images/blue_dress.jpg",
  },
  {
    id: "c276ad55-04d4-4b71-96ab-a289c67c48fe",
    price: "500",
    available: "false",
    stock: "9607",
    img_url: "./images/red_shirt.png",
  },
  {
    id: "338a13b1-3c65-416b-94c2-efaa59d1b39c",
    price: "2906",
    available: "true",
    stock: "227",
    img_url: "./images/blue_dress.jpg",
  },
  {
    id: "169ccdce-9f41-4fc0-bc6f-ee0d926f78c2",
    price: "5901",
    available: "true",
    stock: "34",
    img_url: "./images/blue_dress.jpg",
  },
  {
    id: "c6a3bc52-2700-4d84-9380-14c13540368e",
    price: "1470",
    available: "true",
    stock: "680",
    img_url: "./images/red_shirt.png",
  },
  {
    id: "599eb72b-aac3-46cf-9cda-60122021f8e4",
    price: "1750",
    available: "false",
    stock: "955",
    img_url: "./images/blue_dress.jpg",
  },
  {
    id: "a92407bc-7377-433c-9286-3fc9f1059503",
    price: "4000",
    available: "true",
    stock: "459",
    img_url: "./images/red_shirt.png",
  },
  {
    id: "5ac71abd-6758-40a0-89f6-29af3f068dad",
    price: "2400",
    available: "true",
    stock: "43",
    img_url: "./images/blue_dress.jpg",
  },
  {
    id: "4c36e6dd-945f-416b-90e9-5a98e82d2645",
    price: "3380",
    available: "false",
    stock: "597",
    img_url: "./images/gold_dress.png",
  },
  {
    id: "15cfb64d-f87b-47db-967a-87b7abf06eb1",
    price: "4505",
    available: "true",
    stock: "718",
    img_url: "./images/red_shirt.png",
  },
  {
    id: "07b43087-cbb4-4472-b1d0-a89b8a1f09e0",
    price: "3190",
    available: "false",
    stock: "688",
    img_url: "./images/gold_dress.png",
  },
];
const productsGrid = document.getElementById("products-grid");


for (let i = 0; i < products.length; i++) {
  const productItem = document.createElement("DIV");
  productItem.innerHTML = `
  
  <div  id="product-item" class="card-card-prod mx-auto mt-10">
          <img class="prod-img shadow-lg rounded-t-sm" src="${products[i].img_url}" alt="" />
    
          <div class="flex h-32 max-h-32 overflow-hidden w-full bg-green-200 justify-between">
            <button onclick="closeSelecteItemOverlay()"  class="w-full text-2xl button-item-product protest-riot-regular">
                  Buy
              </button>
          </div>
      </div>
  `;
  productsGrid.append(productItem);
}
