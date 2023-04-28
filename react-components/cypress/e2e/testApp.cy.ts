/// <reference types="cypress" />
// @ts-check
// cypress/support/e2e.js
import '@cypress/code-coverage/support';

describe('App E2E', () => {
  it('Renders main page', () => {
    cy.visit('/');
    cy.get('[href="/"]').click();
    cy.get('[href="/about"]').click();
    cy.get('[href="/forms"]').click();
  });
  it('Should save search value', () => {
    cy.visit('/');
    cy.get('input').type('puf{enter}');
    cy.contains('About').click();
    cy.contains('Forms').click();
    cy.contains('Main').click();
    cy.get('input').should('have.value', 'puf');
  });
  it('Open modal window for card', () => {
    cy.visit('/');
    cy.contains('Puffskein').click();
    cy.contains('Puffskein Fur');
    cy.get('[class="modal__close"]').click();
  });
  it('form fills out correctly', () => {
    cy.visit('/forms');
    cy.get('[type="submit"]').click();
    cy.get('[placeholder="Beast Name"]').type('Crimson beast');
    cy.get('[placeholder="Beast Description"]').type('Very very long description');
    cy.get('[type="date"]').type('2023-04-01');
    cy.get('[type="radio"]').first().check();
    cy.get('[type="number"]').type('1000');
    cy.get('[class="forms__input house"]').select('Gryffindor');
    cy.get('input[type=file]').selectFile('src/assets/mainBg.jpeg', { force: true });
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
  });
  it('Renders notFoundPage', () => {
    cy.visit('/badRequest');
    cy.contains('Page not found 404');
  });
});
