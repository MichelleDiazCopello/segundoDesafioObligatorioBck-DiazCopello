const fs = require ( 'fs' );


class ProductManager {
    constructor ( path ) {
        this.path = path;
        this.products = [];
    };

    static id = 0;

    async addProduct ( product ) {
        const products = await this.getProducts ();
        products.push ( product );
        await fs.promises.writeFile ( this.path, JSON.stringify ( products ), 'utf-8' );
    };    

    async getProducts () {
        try {
            const data = await fs.promises.readFile ( this.path, 'utf-8' );
            const parseData = JSON.parse ( data );
            return parseData;
        } catch (error) {
            console.log ( 'No existen datos' );
            return [];
        };
    };

    async modifyProduct () {
        const modify = await fs.promises.appendFile ( this.path, 'utf-8');
        return modify;
    };

    async deleteProduct () {
        const deleteProd = await fs.promises.unlink ( this.path );
        return deleteProd;
    };
};
    const db = async () => {
        const productManager = new ProductManager ( './products.json' ); 
        let data = await productManager.getProducts ();

        const almonds = {
            title: "Almond",
            description: "Almonds are a type of tree nut with many health benefits. They are an excellent source of vitamin E, magnesium, and fiber. Almonds are also high in protein and healthy fats, making them a great snack option.",
            price: 5.99,
            thumbnail: "https://acdn.mitiendanube.com/stores/960/315/products/almendras-enteras-non-pareil-peladas-chile-1kg-201606300743071-383879671f6a353e6415525085451904-640-0.jpg", 
            stock: 100
        };
        const cashews = {
            title: "Cashew",
            description: "Cashews are a type of tree nut that are rich in nutrients. They are a good source of protein, healthy fats, and minerals like copper, magnesium, and zinc. Cashews are also a good source of antioxidants, which can help protect against disease.",
            price: 6.99,
            thumbnail: "https://www.activearthfood.com.au/cdn/shop/products/cashew-nuts.jpg?v=1593169570", 
            stock: 100
        };

        await productManager.addProduct ( almonds );
        await productManager.addProduct ( cashews );
        data = await productManager.getProducts ();
        console.log ( data );
    };

db ();