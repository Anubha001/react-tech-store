import { awaitExpression } from "@babel/types";

// wait for x seconds x : 2 - 8s
function delay(seconds) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
    return promise;
}

function randomDelay() {
    return Math.floor(Math.random() * (4)) + 2;
}

function randBetween(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}

const PRODUCT_CATEGORIES = [
    'FASHION',
    'MOBILES',
    'LAPTOPS',
    'CAMERA',
    'DAILY-PRODUCTS',
    'BEAUTY'
];

function createProducts(n) {
    let products = [];
    for (let i =0; i < n; i++) {
        const category = PRODUCT_CATEGORIES[randBetween(0, PRODUCT_CATEGORIES.length)]; 
        products.push({
            id: i,
            name: 'Product_' + i,
            category
        });
    }
    return products;
}

const initialProducts = createProducts(100);


export default class MockProductsApi {
    /**
     * Fetch paginated set of products 
     * @param {Number} start Starting offset
     * @param {Number} end  Ending offset for pagination
     * @returns {Array} products The paginated set of products 
     */
    static async fetchProducts(start, end) {
        await delay(randomDelay());
        return initialProducts.slice(start, end + 1);
    }

    static async fetchProductCategories() {
        await delay(2);
        return PRODUCT_CATEGORIES;
    }
    
    static async filterProducts(filters, start, end) {
        // Filters is an array of the set of filters to apply
        await delay(randBetween(0, 3));
        return initialProducts.filter((item) => {
            let filterSatisfied = true;
            filters.forEach((filter) => {
                if (item[filter.name] !== filter.value) {
                    filterSatisfied = false;
                }
            });
            return filterSatisfied;
        }).slice(start, end);
    }
}