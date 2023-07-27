
// Create a ItemsController class
class ProductsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.products = [];
        this.currentId = currentId;
        this.loadProductsFromLocalStorage();
    }

    // Create the addItem method
    addProduct(name, description, imageUrl) {
        const product = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl

        };

        // Push the product to the products array
        this.products.push(product);

        // Convert the 'products' array to a JSON string and store it in localStorage under the key "products"
        localStorage.setItem("products", JSON.stringify(this.products));

    }

    loadProductsFromLocalStorage() {
        // Retrieve the stored JSON string from localStorage using the key "products" 
        const storageProducts = localStorage.getItem("products")
        if (storageProducts) {
            // If there are products stored in localStorage, parse the JSON string back into an array of products
            const products = JSON.parse(storageProducts)
            // Loop through each product and add it to the 'products' array in the class
            for (var i = 0, size = products.length; i < size; i++) {
                const product = products[i];
                this.products.push(product);
            }
        }
    }
}




