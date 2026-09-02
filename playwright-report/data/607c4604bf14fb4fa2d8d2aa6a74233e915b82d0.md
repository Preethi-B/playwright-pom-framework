# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ecommerce.spec.js >> Invalid login should show error message
- Location: tests/ecommerce.spec.js:32:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.invalid-feedback')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]: wrong@gmail.com
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]: wrongpass
          - button "Login" [active] [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e59]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e70]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class LoginPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  | 
  8  |         // Locators — all in one place
  9  |         this.emailInput    = page.locator('#userEmail');
  10 |         this.passwordInput = page.locator('#userPassword');
  11 |         this.loginButton   = page.locator("[value='Login']");
  12 |         this.errorMessage  = page.locator('.invalid-feedback');
  13 |     }
  14 | 
  15 |     // Step 1 — open the app
  16 |     async goTo() {
  17 |         await this.page.goto('https://rahulshettyacademy.com/client');
  18 |     }
  19 | 
  20 |     // Step 2 — login with valid credentials
  21 |     async validLogin(email, password) {
  22 |         await this.emailInput.fill(email);
  23 |         await this.passwordInput.fill(password);
  24 |         await this.loginButton.click();
  25 |         await this.page.waitForLoadState('networkidle');
  26 |     }
  27 | 
  28 |     // Step 3 — login with wrong credentials (negative test)
  29 |     async invalidLogin(email, password) {
  30 |         await this.emailInput.fill(email);
  31 |         await this.passwordInput.fill(password);
  32 |         await this.loginButton.click();
  33 |     }
  34 | 
  35 |     // Step 4 — get error message text
  36 |     async getErrorMessage() {
> 37 |         return await this.errorMessage.textContent();
     |                                        ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  38 |     }
  39 | 
  40 | }
  41 | 
  42 | module.exports = { LoginPage };
  43 | 
```