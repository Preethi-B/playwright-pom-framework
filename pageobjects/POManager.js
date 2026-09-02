const { LoginPage }     = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { CartPage }      = require('./CartPage');

// POManager — manages ALL page objects in one place
// Tests just call getLoginPage() instead of creating pages themselves

class POManager {

    constructor(page) {
        this.page = page;

        // create all pages here — ONCE
        this.loginPage     = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage      = new CartPage(page);
    }

    getLoginPage()     { return this.loginPage; }
    getDashboardPage() { return this.dashboardPage; }
    getCartPage()      { return this.cartPage; }

}

module.exports = { POManager };
