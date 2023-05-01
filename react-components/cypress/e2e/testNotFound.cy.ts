/// <reference types="cypress" />

describe('Test NotFound page', () => {
  it('Should render notFoundPage', () => {
    cy.visit('/badRequest');
    cy.contains('Page not found 404');
  });
});
