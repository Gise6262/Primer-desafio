class ProductManager {
    constructor(){
        this.products = []
    }
    
    getProducts(){
        return this.products
    }
    addProducts(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return "error campos vacios"
        } else {
            const verifyCode = this.products.find(c => c.code === code)
            if (verifyCode){
                return "el codigo se repite"
            } else {
                const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1
                const product = {id , title, description, price, thumbnail, code, stock}
                this.products.push(product)
                return "el producto se agrego correctamente"
            }
        }
    }
    getProductById(id){
        const verifyId = this.products.find(i => i.id === id)
        if(verifyId){
            return "se encontro el producto"
        } else{
            return "no se encontro el producto"
        }
    }

}

const productManager = new ProductManager();
console.log(productManager.getProducts());
console.log(productManager.addProducts("hola", "como va", 300, 'none', 2010, 25 ));
console.log(productManager.addProducts("holas", "como va???", 600, 'none', 2020, 45 ));
console.log(productManager.getProducts());
console.log(productManager.getProductById(2));

