const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;

        // Locators — all in one place
        this.emailInput    = page.locator('#userEmail');
        this.passwordInput = page.locator('#userPassword');
        this.loginButton   = page.locator("[value='Login']");
        this.errorMessage  = page.locator('.invalid-feedback');
    }

    // Step 1 — open the app
    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    // Step 2 — login with valid credentials
    async validLogin(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    // Step 3 — login with wrong credentials (negative test)
    async invalidLogin(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // Step 4 — get error message text
    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

}

module.exports = { LoginPage };
