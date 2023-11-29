class ProductManager {
    constructor () {
        this.products = [];
    }

    static code = 0;

    addProduct ( title, description, price, thumbnail, code, stock) {
        ProductManager.code++;
        const product = {
            title,
            description,
            price,
            thumbnail,
            code: ProductManager.code,
            stock,
        }
        this.products.push ( product );
    }    

    getProducts () {
        return this.products;
    }

    getProduct ( productCode ) {
        return this.products.find ( product => product.code === productCode);
        console.error ( "Not Found" );
    }

//     getProductsByCode ( productCode ) {
//         const product = this.getProduct ( productCode );
//         if ( product ) {
//             if ( !product.code.includes ( productCode ) ) {
//                 product.code.push (  );
//             }
//         }
//         else {
//             console.log ( "Not Found" );
//         }
//     }
}

const product = new ProductManager ();
product.addProduct ('Almond', 'Almonds are a type of tree nut with many health benefits. They are an excellent source of vitamin E, magnesium, and fiber. Almonds are also high in protein and healthy fats, making them a great snack option.', 5.99, 'https://acdn.mitiendanube.com/stores/960/315/products/almendras-enteras-non-pareil-peladas-chile-1kg-201606300743071-383879671f6a353e6415525085451904-640-0.jpg', 1, 100 );

product.addProduct ('Cashews', 'Cashews are a type of tree nut that are rich in nutrients. They are a good source of protein, healthy fats, and minerals like copper, magnesium, and zinc. Cashews are also a good source of antioxidants, which can help protect against disease.', 5.99, 'https://www.activearthfood.com.au/cdn/shop/products/cashew-nuts.jpg?v=1593169570', 2, 100 );


const products = product.getProducts ();
console.log ( products );