# 🧪 SauceDemo E2E Automation – Cypress + Cucumber BDD

This project is an automated end-to-end testing suite for [SauceDemo.com](https://www.saucedemo.com/) using:
- ✅ [Cypress](https://docs.cypress.io/)
- ✅ [Cucumber BDD](https://github.com/badeball/cypress-cucumber-preprocessor)
- ✅ ✅ GitHub Actions CI/CD for headless execution
- ✅ Page Object Model + Custom Commands

---

## 📂 Project Structure

```
cypress/
│
├── e2e/
│   ├── features/                  # BDD Feature files
│   │   ├── login.feature
│   │   ├── cart.feature
│   │   ├── checkout.feature
│   │   └── session.feature
│   │
│   └── step_definitions/         # Step definitions mapped to feature files
│       ├── loginSteps.js
│       ├── cartSteps.js
│       ├── checkoutSteps.js
│       └── sessionSteps.js
│
├── pages/                        # Page Object Model files
│   ├── loginPage.js
│   ├── inventoryPage.js
│   ├── cartPage.js
│   └── checkoutPage.js
│
├── support/
│   ├── commands.js               # Custom Cypress commands
│   └── e2e.js                    # Global config & imports
│
└── fixtures/
    └── testData.json             # Test data if needed
```

---

## 🚀 Test Coverage

| TC#  | Scenario                                                 |
|------|----------------------------------------------------------|
| TC01 | Login with valid credentials                             |
| TC02 | Login with invalid credentials                           |
| TC03 | Inventory page displays 6 products                       |
| TC04 | Add product to cart                                      |
| TC05 | Remove product from cart                                 |
| TC06 | View cart and verify item                                |
| TC07 | Complete checkout with valid information                 |
| TC08 | Checkout validation with missing fields                 |
| TC09 | Logout from the menu                                     |
| TC10 | Product details page displays correct information        |

---

## 📦 Installation

```bash
npm install
```

---

## ▶️ Run Tests Locally

```bash
npx cypress open   # For interactive mode
npx cypress run    # For headless mode
```

---

## ✅ Run with GitHub Actions

Tests run automatically on every push to `main` via GitHub CI/CD.

See the workflow:  
`.github/workflows/cypress.yml`

---

## 🧰 Tech Stack

- [Cypress v13+](https://docs.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [GitHub Actions](https://docs.github.com/en/actions)
- Page Object Model (POM)
- Custom Cypress Commands

---

## 🙋‍♂️ Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add your message'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).