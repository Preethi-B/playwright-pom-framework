const { test, expect } = require('@playwright/test');
const { POManager }    = require('../pageobjects/POManager');
const testData         = require('../data/testData.json');

// ============================================================
// TEST 1 — Valid Login
// ============================================================
test('Valid login should go to Dashboard', async ({ page }) => {

    // Step 1 — create POManager
    const pm = new POManager(page);

    // Step 2 — get login page and open app
    const loginPage = pm.getLoginPage();
    await loginPage.goTo();

    // Step 3 — login with valid credentials from testData.json
    await loginPage.validLogin(
        testData.validUser.email,
        testData.validUser.password
    );

    // Step 4 — verify we reached dashboard
    await expect(page).toHaveURL(/dashboard/);
    console.log('✓ Login successful');

});

// ============================================================
// TEST 2 — Invalid Login
// ============================================================
test('Invalid login should show error message', async ({ page }) => {

    const pm = new POManager(page);
    const loginPage = pm.getLoginPage();

    await loginPage.goTo();

    // login with wrong credentials
    await loginPage.invalidLogin(
        testData.invalidUser.email,
        testData.invalidUser.password
    );

    // verify error message appears
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Incorrect');
    console.log('✓ Error message shown correctly');

});

// ============================================================
// TEST 3 — Add Product to Cart
// ============================================================
test('Login, search product and add to cart', async ({ page }) => {

    const pm = new POManager(page);

    // Step 1 — Login
    const loginPage = pm.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(
        testData.validUser.email,
        testData.validUser.password
    );

    // Step 2 — Search and add product on Dashboard
    const dashboardPage = pm.getDashboardPage();
    const productNames = await dashboardPage.getAllProductNames();
    console.log('Products available:', productNames);

    await dashboardPage.searchProductAndAddToCart(testData.products.product1);

    // Step 3 — Go to Cart
    await dashboardPage.goToCart();

    // Step 4 — Verify product is in cart
    const cartPage = pm.getCartPage();
    const isInCart = await cartPage.isProductInCart(testData.products.product1);
    expect(isInCart).toBeTruthy();
    console.log('✓ Product found in cart');

});
