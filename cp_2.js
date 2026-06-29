// Constant definition for the external Store Products API endpoint
const API_URL = "https://www.course-api.com/javascript-store-products";

// =========================================================================
// STEP 3: fetchProductsThen() Implementation
// Uses fetch() and .then() chaining to log product names or catch errors.
// =========================================================================
function fetchProductsThen() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP status error: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            console.log("--- fetchProductsThen() Name Output ---");
            products.forEach(product => {
                // Properly accessing the nested 'fields' object to get the name
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            // Catches and logs any network or fetch errors to the console
            console.error("fetchProductsThen failed:", error);
        });
}

// =========================================================================
// STEP 4: fetchProductsAsync() Implementation
// Uses async/await and try/catch to retrieve data and handle results.
// =========================================================================
async function fetchProductsAsync() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP status error: ${response.status}`);
        }
        const products = await response.json();
        
        // Fulfills requirement to pass the results to displayProducts
        displayProducts(products);
    } catch (error) {
        // Fulfills requirement to call handleError if the fetch fails
        handleError(error);
    }
}

// =========================================================================
// STEP 5: displayProducts(products) Implementation
// Selects container, loops through the first 5 products, and appends HTML.
// =========================================================================
function displayProducts(products) {
    // Select the #product-container element
    const container = document.getElementById("product-container");
    
    // Clear out container initially to avoid any duplicate rendering conflicts
    container.innerHTML = "";

    // Loop through the first 5 products returned by the API using .slice()
    const topFiveProducts = products.slice(0, 5);

    topFiveProducts.forEach(product => {
        // Safely extract the deeply nested attributes from the API payload
        const name = product.fields.name;
        const imageUrl = product.fields.image[0].url;
        const priceCents = product.fields.price;
        
        // Convert price from cents to a standard user-friendly currency format ($xx.xx)
        const formattedPrice = `$${(priceCents / 100).toFixed(2)}`;

        // Create the product card element wrapper
        const card = document.createElement("div");
        card.classList.add("product-card");

        // Construct HTML elements to show each product's name, image, and price
        card.innerHTML = `
            <img src="${imageUrl}" alt="${name}" class="product-image">
            <h3 class="product-name">${name}</h3>
            <p class="product-price">${formattedPrice}</p>
        `;

        // Append the constructed card to the product container
        container.appendChild(card);
    });
}

// =========================================================================
// STEP 6: Reusable handleError(error) Function
// Logs a clear message with the error details.
// =========================================================================
function handleError(error) {
    console.error(`An error occurred: ${error.message}`);
}

// =========================================================================
// STEP 7: Core Runtime Initializations
// Calls both required execution functions at the absolute bottom of the script.
// =========================================================================
fetchProductsThen();
fetchProductsAsync();
