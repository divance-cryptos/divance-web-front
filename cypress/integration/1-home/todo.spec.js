/// <reference types="cypress" />

describe("divance web", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('visits the app', () => {
    cy.visit('/')
  })
});
