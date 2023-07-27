// Initialize a new TaskManager with currentId set to 0
const productController = new ProductsController(0);

// Select the New Task Form
const jewelleryProductForm = document.querySelector('#jewelleryProductForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {

    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const jewelleryProductName = document.querySelector('#jewelleryProductName');
    const jewelleryProductDescription = document.querySelector('#jewelleryProductDescription');
    const jewelleryProductImageUrl = document.querySelector('#jewelleryProductImageUrl');

    // Get the values of the inputs
    const name = jewelleryProductName.value;
    const description = jewelleryProductDescription.value;
    const imageUrl = jewelleryProductImageUrl.value;

    // Add the task to the task manager
    productController.addProduct(name, description, imageUrl);

    // Clear the form
    jewelleryProductName.value = '';
    jewelleryProductDescription.value = '';
});