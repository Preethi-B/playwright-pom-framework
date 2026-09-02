class DashboardPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.productCards   = page.locator('.card-body');
        this.productTitles  = page.locator('.card-body b');
        this.cartButton     = page.locator("[routerlink*='cart']");
        this.ordersButton   = page.locator("button[routerlink*='myorders']");
    }

    // Get all product names on the page
    async getAllProductNames() {
        return await this.productTitles.allTextContents();
    }

    // Search for a product by name and add to cart
    async searchProductAndAddToCart(productName) {
        const count = await this.productCards.count();

        for (let i = 0; i < count; i++) {
            const title = await this.productCards.nth(i).locator('b').textContent();

            if (title === productName) {
                // found the product — click Add to Cart
                await this.productCards.nth(i).locator('text= Add To Cart').click();
                console.log(`Added to cart: ${productName}`);
                break;
            }
        }
    }

    // Go to cart
    async goToCart() {
        await this.cartButton.click();
    }

    // Go to orders
    async goToOrders() {
        await this.ordersButton.click();
    }

}

module.exports = { DashboardPage };
