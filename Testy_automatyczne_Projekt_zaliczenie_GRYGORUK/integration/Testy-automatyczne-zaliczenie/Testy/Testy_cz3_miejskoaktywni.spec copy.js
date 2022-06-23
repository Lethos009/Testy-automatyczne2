/// <reference types="cypress" />

Cypress.Commands.add("closeCookiePopup", () => {
  cy.get("#cookieMonster > div > input").click().should("not.be.visible");
});

context(
  "Testy automatyczne II - projekt na zaliczenie - Arkadiusz Grygoruk, podyplomowe - Tester oprogramowania 2021/2022",
  () => {

    describe("Website tests - Miejskoaktywni", () => {
        
      beforeEach("Open google.com and confirm privacy", () => {
        cy.visit("http://miejskoaktywni.pl/index.php#/home");
        cy.url().should("contain", "miejskoaktywni");
        cy.closeCookiePopup();
      });

      it("Test 1 - Contact info through location subpage", () => {
        cy.get('body> div:nth-child(5) > div:nth-child(8)> div:nth-child(1) >div> div:nth-child(2) > ul > li:nth-child(3) > ul > li:nth-child(8) > a').click({force: true}).wait(3000);
        cy.get('body > div:nth-child(5) > div:nth-child(8) > div:nth-child(6) > div:nth-child(2) > a').click();
        cy.get('[data-id="kontakt-1192"] > .project_content > .project_content_content > :nth-child(1)').should('be.visible').should('contain', 'Białystok');

      });


      it("Test 2 - Contact info by search", () => {
        cy.get('#search_box').click({force: true}).wait(2000);
        cy.get('[type="text"]').type('Kontakt{enter}').wait(2000);
        cy.contains('div', 'teleadresowymi Toru').click({force: true});
        cy.get('[data-id="kontakt-1192"] > .project_content > .project_content_content > :nth-child(1)').should('be.visible')
        cy.url().should("contain", "kontakt-1192");

      });
     
      it("Test 3 - Contact info through 'About US' subpage", () => {
        cy.get('.outsideUl > :nth-child(6) > a').click().wait(2000);
        cy.get('[data-id="kontakty-56"] > .description > .download_files > .download_file').click({force: true}).wait(2000);
        cy.get('[data-id="tor-bialystok-1670"] > .description').click();
        cy.url().should("contain", "tor-bialystok");
        cy.get('[data-id="tor-bialystok-1670"] > .project_content > .project_content_content > :nth-child(1)').should('be.visible')
        

      });


    });
  }
);