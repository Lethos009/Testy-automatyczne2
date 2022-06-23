/// <reference types="cypress" />

import queries from '../../../fixtures/querriesZaliczenieGrygoruk.json';

Cypress.Commands.add('closeCookiePopup',()=>{
    cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
});

context('Testy automatyczne II - projekt na zaliczenie - Arkadiusz Grygoruk, podyplomowe - Tester oprogramowania 2021/2022', ()=> {
    describe('Website tests - google.com', ()=> {

        beforeEach('Open google.com and confirm privacy', ()=>{
            cy.visit('http://www.google.com');
            cy.url().should('contain', 'www.google.com');
            cy.closeCookiePopup();
        });

        it('Test 1 - Weather search with mouse click on first dropdown result',()=>{
            cy.get('.gLFyf').type(queries[0].input1).wait(2000);
            cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
            cy.get('#rcnt').contains('div', queries[0].input1, { matchCase: false }).should('contain', queries[0].input1); 
        })

        it('Test 2 - Weather search performed with {Enter}',()=>{
            cy.get('.gLFyf').type(queries[0].input1 + '{enter}');
            cy.url().should('include', '/search?q='+ queries[0].input1);
            cy.get('div[data-async-context="query:' + queries[0].input1 + '"]').should('be.visible');
        })


        it('Test 3 - Weather search with mouse click on search button',()=>{
            cy.get('.gLFyf').type(queries[0].input1);
            cy.get('.CqAVzb > center > .gNO89b').click();
            cy.url().should('include', '/search?q='+ queries[0].input1);
            
        })

    });

});