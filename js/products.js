
const productController = new ProductsController(0);

function addItemCard(product){
    const productHTML = '<div class="col-4 my-3">\n'+
    '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+product.imageUrl +'" alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+product.name+'</h5>\n' +
        '        <p class="card-text">'+product.description+'</p>\n' +
        '    </div>\n' +
        '</div>\n' +
        '</div>\n';
    const productContainer = document.getElementById("list-items");
    productContainer.innerHTML += productHTML;
}

function loadCardsListFromItemsController(){
    for(var i = 0, size = productController.products.length; i < size ; i++){
        const product = productController.products[i];
        addItemCard(product);
    }
}
loadCardsListFromItemsController();