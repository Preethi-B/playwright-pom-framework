const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.cartItems      = page.locator('.cartSection h3');
        this.checkoutButton = page.locator('text=Checkout');
        this.totalAmount    = page.locator('.totalRow .amount');
    }

    // Get all item names in cart
    async getCartItemNames() {
        return await this.cartItems.allTextContents();
    }

    // Check if a specific product is in the cart
    async isProductInCart(productName) {
        const items = await this.getCartItemNames();
        return items.includes(productName);
    }

    // Get total amount
    async getTotalAmount() {
        return await this.totalAmount.textContent();
    }

    // Proceed to checkout
    async checkout() {
        await this.checkoutButton.click();
    }

}

module.exports = { CartPage };
