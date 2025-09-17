/// <reference types="cypress" />

/**
 * https://www.saucedemo.com/?utm_source=chatgpt.com
 */

it('first test', () => {
  cy.login()
  cy.addToCart()
  cy.checkOut()
})