/// <reference types="cypress" />

const curent = new Date().toISOString().slice(0, 10);

describe('Test Forms page', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });
  it('Should show error messages without data', () => {
    cy.get('[type="submit"]').click();
    cy.get('[class="input__error"]').should('be.visible');
  });
  it('Should show error for invalid Name input', () => {
    cy.get('[placeholder="Beast Name"]').type('crimson beast');
    cy.get('[type="submit"]').click();
    cy.get('[class="input__error"]')
      .eq(0)
      .should('have.text', 'Should starts with uppercased letter');
  });
  it('Should show error for invalid Description input', () => {
    cy.get('[placeholder="Beast Description"]').type('Very very');
    cy.get('[type="submit"]').click();
    cy.get('[class="input__error"]').eq(1).should('have.text', 'Should contains 3 words');
  });
  it('Should show error for invalid Date input', () => {
    cy.get('[type="date"]').type('2025-04-01');
    cy.get('[type="submit"]').click();
    cy.get('[class="input__error"]')
      .eq(2)
      .should(
        'have.text',
        `Date should be earlier than ${curent.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}`
      );
  });
  it('Should show error for invalid Cost input', () => {
    cy.get('[type="number"]').type('-1');
    cy.get('[type="submit"]').click();
    cy.get('[class="input__error"]').eq(4).should('have.text', 'Should be greater than 0');
  });
  it('Should show error for invalid File input', () => {
    cy.get('input[type=file]').selectFile('src/app.test.tsx', { force: true });
    cy.get('[type="submit"]').click();
    cy.get('[class="input__error"]').eq(6).should('have.text', 'Selected file is not an image');
  });
  it('Should fill form correctly', () => {
    cy.get('[placeholder="Beast Name"]').type('Crimson beast');
    cy.get('[placeholder="Beast Description"]').type('Very very long description');
    cy.get('[type="date"]').type('2023-04-01');
    cy.get('[type="radio"]').first().check();
    cy.get('[type="number"]').type('1000');
    cy.get('[class="forms__input house"]').select('Gryffindor');
    cy.get('input[type=file]').selectFile('src/assets/mainBg.jpeg', { force: true });
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.get('[data-cy="popup"]').should('be.visible');
  });
  it('Should render cards after every fill', () => {
    cy.get('[placeholder="Beast Name"]').type('Crimson beast');
    cy.get('[placeholder="Beast Description"]').type('Very very long description');
    cy.get('[type="date"]').type('2023-04-01');
    cy.get('[type="radio"]').first().check();
    cy.get('[type="number"]').type('1000');
    cy.get('[class="forms__input house"]').select('Gryffindor');
    cy.get('input[type=file]').selectFile('src/assets/mainBg.jpeg', { force: true });
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.get('[data-cy="form-card"]').should('have.length', 1);
    cy.get('[placeholder="Beast Name"]').type('Crimson beast');
    cy.get('[placeholder="Beast Description"]').type('Very very long description');
    cy.get('[type="date"]').type('2023-04-01');
    cy.get('[type="radio"]').first().check();
    cy.get('[type="number"]').type('1000');
    cy.get('[class="forms__input house"]').select('Gryffindor');
    cy.get('input[type=file]').selectFile('src/assets/mainBg.jpeg', { force: true });
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.get('[data-cy="form-card"]').should('have.length', 2);
  });
});
