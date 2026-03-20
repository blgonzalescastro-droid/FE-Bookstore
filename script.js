const products = [
    {
        id: 1,
        img: "./Images/Book1.webp",
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 19.99
    },
    {
        id: 2,
        img: "./Images/book2.webp",
        name: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 24.99
    },
    {
        id: 3,
        img: "./Images/book3.webp",
        name: "Project Hail Mary",
        author: "Andy Weir",
        price: 14.99
    },
    {
        id: 4,
        img: "./Images/book4.webp",
        name: "Heated Rivalry",
        author: "Rachel Reid",
        price: 14.99
    },
    {
        id: 5,
        img: "./Images/book5.jpg",
        name: "Great Big Beautiful Life",
        author: "Emily Henry",
        price: 22.65
    },
    {
        id: 6,
        img: "./Images/book6.jpg",
        name: "The Crash",
        author: "Freida McFadden",
        price: 11.18
    },
    {
        id: 7,
        img: "./Images/book7.jpg",
        name: "Hot Mess (Diary of a Wimpy Kid Book 19)",
        author: "Jeff Kinney",
        price: 13.64
    },
    {
        id: 8,
        img: "./Images/book8.jpg",
        name: "The Message",
        author: "Ta-Nehisi Coates",
        price: 23.04
    },
    {
        id: 9,
        img: "./Images/book9.jpg",
        name: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        price: 16.15
    },
    {
        id: 10,
        img: "./Images/book10.jpg",
        name: "Black Moses",
        author: "Caleb Gayle",
        price: 20.46
    },
    {
        id: 11,
        img: "./Images/book11.jpg",
        name: "The Vanishing Cherry Blossom Bookshop",
        author: "Takuya Asakura",
        price: 12.99
    },
    {
        id: 12,
        img: "./Images/book12.jpg",
        name: "Felicia's Favorites: A Novel",
        author: "Danielle Steel",
        price: 20.30
    },
    {
        id: 13,
        img: "./Images/book13.jpg",
        name: "Kin",
        author: "Tayari Jones",
        price: 29.00
    },
    {
        id: 14,
        img: "./Images/book14.jpg",
        name: "The First Time I Saw Him",
        author: "Laura Dave",
        price: 20.30
    },
    {
        id: 15,
        img: "./Images/book15.jpg",
        name: "The Correspondent: Deluxe Edition",
        author: "Virginia Evans",
        price: 32.00
    },
    {
        id: 16,
        img: "./Images/book16.jpg",
        name: "Educated: A Memoir",
        author: "Tara Westover",
        price: 20.00
    },
    {
        id: 17,
        img: "./Images/book17.jpg",
        name: "View from the East Wing",
        author: "Jill Biden",
        price: 32.00
    },
    {
        id: 18,
        img: "./Images/book18.jpg",
        name: "Original Sin",
        author: "Jake Tapper, Alex Thompson",
        price: 27.00
    },
    {
        id: 19,
        img: "./Images/book19.jpg",
        name: "Money, Lies, and God",
        author: "Katherine Stewart",
        price: 19.99
    },
    {
        id: 20,
        img: "./Images/book20.jpg",
        name: "The Talisman",
        author: "Stephen King",
        price: 14.99
    },
    {
        id: 21,
        img: "./Images/book21.jpg",
        name: "Mona's Eyes",
        author: "Thomas Schlesser",
        price: 28.00
    }
];
let cart = [];

const productsContainer = document.getElementById("products-container");
const cartModal = document.getElementById("cart-modal");
const cartButton = document.getElementById("cart");

function displayProducts() {
    productsContainer.innerHTML = products
        .map(
            (product) => `
      <div class="product-card" onclick="addToCart(${product.id})">
        <img src="${product.img}" alt="${product.name}"/>
        <h3>${product.name}</h3>
        <div class="product-card-bottom">
        <span>${product.author}</span>
        <span>$${product.price}</span>
        </div>
      </div>
    `,
        )
        .join("");
}
function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    cart.push(product);
}

displayProducts();