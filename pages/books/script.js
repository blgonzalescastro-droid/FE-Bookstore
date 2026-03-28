const books = [
    {
        id: 1,
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 19.99,
        category: "Classic Fiction",
        img: "assets/Images/Book1.webp",
        rating: 4.7,
        reviews: 15200,
        badge: "Bestseller",
        description: "A portrait of the Jazz Age that tells the story of the mysterious Jay Gatsby and his pursuit of Daisy Buchanan."
    },
    {
        id: 2,
        name: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 24.99,
        category: "Non-Fiction",
        img: "/assets/Images/book2.webp",
        rating: 4.8,
        reviews: 45000,
        badge: "Bestseller",
        description: "An exploration of the history of Homo sapiens, from the evolution of archaic human species in the Stone Age to the twenty-first century."
    },
    {
        id: 3,
        name: "Project Hail Mary",
        author: "Andy Weir",
        price: 14.99,
        category: "Sci-Fi",
        img: "./assets/Images/book3.webp",
        rating: 4.9,
        reviews: 28400,
        badge: "Bestseller",
        description: "A lone astronaut must save the earth from disaster in this propulsive target-oriented thriller."
    },
    {
        id: 4,
        name: "Heated Rivalry",
        author: "Rachel Reid",
        price: 14.99,
        category: "Romance",
        img: "./Images/book4.webp",
        rating: 4.6,
        reviews: 8200,
        badge: "Bestseller",
        description: "A steamy sports romance between two hockey stars who have been rivals for years."
    },
    {
        id: 5,
        name: "Great Big Beautiful Life",
        author: "Emily Henry",
        price: 22.65,
        category: "Contemporary Fiction",
        img: "./Images/book5.jpg",
        rating: 4.7,
        reviews: 12000,
        badge: "New Release",
        description: "A heartwarming story about family, love, and the messy beauty of life."
    },
    {
        id: 6,
        name: "The Crash",
        author: "Freida McFadden",
        price: 11.18,
        category: "Psychological Thriller",
        img: "./Images/book6.jpg",
        rating: 4.5,
        reviews: 9800,
        badge: "Must Read",
        description: "A gripping thriller where a simple accident leads to a web of lies and deadly secrets."
    },
    {
        id: 7,
        name: "Hot Mess (Diary of a Wimpy Kid Book 19)",
        author: "Jeff Kinney",
        price: 13.64,
        category: "Children's Fiction",
        img: "./Images/book7.jpg",
        rating: 4.8,
        reviews: 5600,
        badge: "New",
        description: "Greg Heffley is back in another hilarious adventure that will keep kids and adults laughing."
    },
    {
        id: 8,
        name: "The Message",
        author: "Ta-Nehisi Coates",
        price: 23.04,
        category: "Politics/Social Science",
        img: "./Images/book8.jpg",
        rating: 4.4,
        reviews: 3100,
        badge: "Influential",
        description: "An exploration of how the stories we tell can either liberate or enslave us."
    },
    {
        id: 9,
        name: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        price: 16.15,
        category: "Fantasy",
        img: "./Images/book9.jpg",
        rating: 4.8,
        reviews: 65000,
        badge: "Bestseller",
        description: "A huntress is captured by a faerie lord and discovers a world of magic and danger she never imagined."
    },
    {
        id: 10,
        name: "Black Moses",
        author: "Caleb Gayle",
        price: 20.46,
        category: "Historical Biography",
        img: "./Images/book10.jpg",
        rating: 4.3,
        reviews: 1200,
        badge: "Critical Acclaim",
        description: "The incredible story of a man who fought for justice and equality in a divided nation."
    },
    {
        id: 11,
        name: "The Vanishing Cherry Blossom Bookshop",
        author: "Takuya Asakura",
        price: 12.99,
        category: "Magical Realism",
        img: "./Images/book11.jpg",
        rating: 4.6,
        reviews: 2400,
        badge: "Trending",
        description: "A mysterious bookshop in Tokyo appears only to those who truly need it."
    },
    {
        id: 12,
        name: "Felicia's Favorites: A Novel",
        author: "Danielle Steel",
        price: 20.30,
        category: "Drama",
        img: "./Images/book12.jpg",
        rating: 4.2,
        reviews: 7800,
        badge: "Popular",
        description: "A touching story of friendship and rediscovery among a group of women."
    },
    {
        id: 13,
        name: "Kin",
        author: "Tayari Jones",
        price: 29.00,
        category: "Family Saga",
        img: "./Images/book13.jpg",
        rating: 4.5,
        reviews: 4200,
        badge: "Editors' Pick",
        description: "An epic story of family secrets and the ties that bind us across generations."
    },
    {
        id: 14,
        name: "The First Time I Saw Him",
        author: "Laura Dave",
        price: 20.30,
        category: "Contemporary Romance",
        img: "./Images/book14.jpg",
        rating: 4.4,
        reviews: 5100,
        badge: "Sweet Read",
        description: "A chance encounter leads to a life-changing romance in this charming novel."
    },
    {
        id: 15,
        name: "The Correspondent: Deluxe Edition",
        author: "Virginia Evans",
        price: 32.00,
        category: "Mystery",
        img: "./Images/book15.jpg",
        rating: 4.7,
        reviews: 900,
        badge: "Deluxe",
        description: "An investigative journalist uncovers a conspiracy that goes to the highest levels of power."
    },
    {
        id: 16,
        name: "Educated: A Memoir",
        author: "Tara Westover",
        price: 20.00,
        category: "Memoir",
        img: "./Images/book16.jpg",
        rating: 4.8,
        reviews: 38000,
        badge: "Bestseller",
        description: "The unforgettable account of a young woman who leaves her survivalist family to seek an education."
    },
    {
        id: 17,
        name: "View from the East Wing",
        author: "Jill Biden",
        price: 32.00,
        category: "Autobiography",
        img: "./Images/book17.jpg",
        rating: 4.5,
        reviews: 2100,
        badge: "Insightful",
        description: "A unique look at life inside the White House and the role of the First Lady."
    },
    {
        id: 18,
        name: "Original Sin",
        author: "Jake Tapper, Alex Thompson",
        price: 27.00,
        category: "Political Thriller",
        img: "./Images/book18.jpg",
        rating: 4.3,
        reviews: 1500,
        badge: "New",
        description: "A fast-paced thriller set in the corridors of power in Washington D.C."
    },
    {
        id: 19,
        name: "Money, Lies, and God",
        author: "Katherine Stewart",
        price: 19.99,
        category: "Investigative Non-Fiction",
        img: "./Images/book19.jpg",
        rating: 4.4,
        reviews: 3200,
        badge: "Controversial",
        description: "An investigation into the intersection of faith, politics, and finance."
    },
    {
        id: 20,
        name: "The Talisman",
        author: "Stephen King",
        price: 14.99,
        category: "Horror/Fantasy",
        img: "./Images/book20.jpg",
        rating: 4.6,
        reviews: 18500,
        badge: "Classic",
        description: "A boy travels across America and a parallel world to find a talisman that will save his mother."
    },
    {
        id: 21,
        name: "Mona's Eyes",
        author: "Thomas Schlesser",
        price: 28.00,
        category: "Art Fiction",
        img: "./Images/book21.jpg",
        rating: 4.7,
        reviews: 6400,
        badge: "Beautifully Written",
        description: "A grandfather takes his granddaughter to see the world's masterpieces before she loses her sight."
    }
];
let cart = [];

// API 
async function getBooks () {
    try {
        const response = await fetch("../../data/books.json");
        if (!response.ok){ 
            throw new Error(response.status);
        } 
        
        const data = await response.json();
        return data;

    } catch(error){
        console.error(error);
        return []; 
    }
}

// 

const booksContainer = document.getElementById("booksGrid");
let allBooks = [];


async function init() {
    allBooks = await getBooks();
    displayBooks(allBooks);
}

init();

function displayBooks(books) {
    if (!booksContainer || !books) return;

    booksContainer.innerHTML = books.map(book => {
        
        const rounded = Math.round(Number(book.rating) || 0);
        const stars = "★".repeat(rounded) + "☆".repeat(5 - rounded);
        const badge = book.badge ? `<span class="badge">${book.badge}</span>` : "";

        return `
        <div class="book-card">
            <div class="book-image-container">
                <img src="${book.img}" alt="${book.name}" class="book-image">
                ${badge}
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.name}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-category">${book.category}</p>
                
                <div class="book-footer">
                    <span class="book-price">$${book.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                </div>
            </div>
        </div>
        `;
    }).join("");
}


displayBooks();


function sortBooks(sortBy) {
    let sorted = [...allBooks];

    switch(sortBy) {
        case "price-low":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "price-high":
            sorted.sort((a, b) => b.price - a.price);
            break;
        case "rating":
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case "newest":
            sorted.sort((a, b) => b.id - a.id);
            break;
        default:
            sorted.sort((a, b) => a.id - b.id);
    }

    displayBooks(sorted);
}

function addToCart(bookId) {
    
    const bookToAdd = books.find(book => book.id === bookId);

    const exists = cart.find(item => item.id === bookId);

    if (exists) {
        exists.quantity++; 
    } else {
        
        cart.push({ ...bookToAdd, quantity: 1 });
    }
    updateCartUI();
}


function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

   
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">Delete</button>
        </div>
    `).join("");

   
    const totalMoney = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerText = totalMoney.toFixed(2);
}


function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}


function toggleCart() {
    document.getElementById("cart-dropdown").classList.toggle("hidden");
}


