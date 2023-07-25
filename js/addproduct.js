
const productController = new ProductsController(0);

const newItemForm = document.querySelector('#newItemForm');

newItemForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const newItemName = document.querySelector('#newItemName');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemImageUrl = document.querySelector('#newItemImageUrl');

    const name = newItemName.value;
    const description = newItemDescription.value;
    const imageUrl = newItemImageUrl.value;

    productController.addProduct(name, description, imageUrl);

    newItemName.value = '';
    newItemDescription.value = '';
});