class ProductsController {
    constructor(currentId = 0) {
        this.products = [];
        this.currentId = currentId;
        this.loadProductsFromLocalStorage();
    }

    addProduct(name, description, imageUrl) {
        const product = {
            id: this.currentId++, // Increment the currentId property
            name: name,
            description: description,
            imageUrl: imageUrl

        };
        this.products.push(product); // Push the product to the products array

        localStorage.setItem("products", JSON.stringify(this.products));

    }
    loadProductsFromLocalStorage() {
        const storageProducts = localStorage.getItem("products")
        if (storageProducts) {
            const products = JSON.parse(storageProducts)
            for (var i = 0, size = products.length; i < size; i++) {
                const product = products[i];
                this.products.push(product);
            }
        }
    }
}




