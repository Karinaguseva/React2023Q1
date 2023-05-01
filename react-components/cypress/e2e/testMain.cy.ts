/// <reference types="cypress" />

describe('Test Main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should render main page', () => {
    cy.get('[href="/"]').click();
    cy.get('[href="/about"]').click();
    cy.get('[href="/forms"]').click();
  });
  it('Should render 13 cards', () => {
    cy.get('[data-cy="card"]').should('have.length', 13);
  });
  it('Should save search value', () => {
    cy.get('[data-cy="search"]').type('puf{enter}');
    cy.contains('About').click();
    cy.contains('Forms').click();
    cy.contains('Main').click();
    cy.get('[data-cy="search"]').should('have.value', 'puf');
  });
  it('Should find card after search', () => {
    cy.get('[data-cy="search"]').type('puf{enter}');
    cy.get('[data-cy="card"]').should('have.length', 1);
  });
  it('Should open modal window for card and close', () => {
    cy.contains('Puffskein').click();
    cy.contains('Puffskein Fur');
    cy.get('[class="modal__close"]').click();
  });
});
