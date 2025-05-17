import { config } from '@/lib';

describe('Your first test', () => {
  it('should visit the app', () => {
    cy.visit('/');
    cy.title().should('eq', config.website.title + ' | ' + config.website.subtitle);
    cy.get('link[rel="icon"][href="/favicon.ico"][sizes="any"]').should('exist');
  });
});
