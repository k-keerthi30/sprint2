// Initialize a new TaskManager with currentId set to 0
const productController = new ProductsController(0);

// Function to add a new item card (product) to the HTML container
function addItemCard(product) {
    // Construct the HTML card structure using the product's properties
    const productHTML = '<div class="col-4 my-3">\n' +
        '<div class="card" style="width: 20rem;">\n' +
        '    <img src="' + product.imageUrl + '" alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + product.name + '</h5>\n' +
        '        <p class="card-text">' + product.description + '</p>\n' +
        '    </div>\n' +
        '</div>\n' +
        '</div>\n';

    const productContainer = document.getElementById("list-products");

    productContainer.innerHTML += productHTML;

}

// Function to load product cards from the ProductsController and display them on the webpage
function loadCardsListFromItemsController() {
    for (var i = 0, size = productController.products.length; i < size; i++) {
        const product = productController.products[i];
        addItemCard(product);
    }
}

// Call the loadCardsListFromItemsController function to populate the product cards on the webpage
loadCardsListFromItemsController();