describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('the grid is created with the right size when the size is entered', () => {
    cy.get('input').type('3');
    cy.get('button').click();
    cy.get('#table').should('exist');
  });

  // it('the correct grid square is selected when entered into the input', () => {
  //   cy.get('#table').should('exist');

  //   cy.get('input').type('3');
  //   cy.get('button').click();
  //   cy.get('#2').should
  // });

  it.only('enables players to play a game of tictactoe', () => {
    cy.get('input').type('3');
    cy.get('button').click();
    cy.get('#table').should('exist');

    cy.get('#4').click();
    cy.get('#0').click();
    cy.get('#2').click();
    cy.get('#1').click();
    cy.get('#6').click();

    cy.get('#endgame').contains(`Congratulations player X! You've won. Refresh to play again!`, { matchCase: false });
  });
});