/// <reference types="cypress" />

import queries from "../../../fixtures/querriesZaliczenieGrygoruk.json";
import olxPageObject from "../../../integration/Testy-automatyczne-pageObjects-zaliczenie-Grygoruk/grygorukPageObject";

const olx = new olxPageObject();


context(
  "Testy automatyczne II - projekt na zaliczenie - Arkadiusz Grygoruk, podyplomowe - Tester oprogramowania 2021/2022",
  () => {

    describe("Website tests - OLX", () => {
      beforeEach("Open OLX landing page and confirm cookies and privacy", () => {
        cy.visit("https://www.olx.pl/");
        cy.url().should("contain", "olx");
        olx.getConfirmPopUpButton().click().should("not.be.visible").wait(2000);
      });

      it("Test 1 - Search for a car in specified location through searchbar", () => {
        olx.disableUncaughtException();
        cy.get('[data-cy="homepage_input_textsearch"]').type(queries[1].input1);
        cy.get('[data-cy="homepage_input_locationsearch"]').type(queries[1].input2).wait(1000);
        cy.get('[data-cy="homepage_link_autosuggest"] > :nth-child(1) > .tdnone').click();
        cy.get('[data-cy="homepage_button_search"]').click();
        cy.url().should("contain", queries[1].input2);
        cy.get('[data-testid="listing-grid"]').should("contain", queries[1].input1);
        
      });

      it("Test 2 - Search for a car manually through 'categories'", () => {
        olx.disableUncaughtException();
        cy.get(':nth-child(2) > :nth-child(2) > .item > .link > .cat-icon').click();
        cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory > .link > span').click();
        cy.get(':nth-child(2) > .css-tw2gb3 > .css-t0lbh8 > .css-1qvyz1h').click();
        cy.get('.css-1g9b9fl').contains('span', queries[1].input1, { matchCase: false }).click({force: true});
        cy.url().should("contain", queries[1].input1);
        cy.get('body > div:nth-child(1) > div > div > form > div:nth-child(5) > div').should("contain", queries[1].input1);
      });


      it("Test 3 - Checking for field validation when loging in with empty form", () => {
        olx.disableUncaughtException();
        cy.get('#topLoginLink').click();
        cy.url().should("contain", "account");
        cy.get('.login-page > .login-box > .login-tabs > .login-tabs__content > .active > .login-form > #loginForm > .standard-login-box > #se_userLogin').click();
        olx.getLoginEmailValidation().should("be.visible");
        olx.getLoginPasswordValidation().should("be.visible");

      });

      it("Test 4 - Checking for field validation when registering in with empty form", () => {
        olx.disableUncaughtException();
        cy.get('#topLoginLink').click();
        cy.url().should("contain", "account");
        cy.get('.login-page > .login-box > .login-tabs > .login-tabs__navigation > ul > :nth-child(2) > #register_tab').click().wait(1500);
        cy.get('.active > #registerForm > #button_register').should("be.visible").click();
        olx.getRegisterEmailValidation().should("be.visible");
        olx.getRegisterPasswordValidation().should("be.visible");

      });

    });
});