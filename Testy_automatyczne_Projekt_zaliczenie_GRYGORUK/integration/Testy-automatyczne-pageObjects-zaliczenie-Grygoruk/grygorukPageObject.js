class olxPageObject{

    _confirmPopUpButton = '#onetrust-accept-btn-handler';

    _loginEmailValidation = ':nth-child(2) > .focusbox > .desc > #se_emailError > .errorboxContainer > .error';
    _loginPasswordValidation = ':nth-child(3) > .focusbox > .desc > #se_emailError > .errorboxContainer > .error';

    _registerEmailValidation = '.active > .focusbox > .desc > #se_emailError > .errorboxContainer > .error';
    _registerPasswordValidation = ':nth-child(5) > .focusbox > .desc > #se_emailError > .errorboxContainer > .error';
    
    
    getConfirmPopUpButton(){
        return cy.get(this._confirmPopUpButton);
    }

    getLoginEmailValidation(){
        return cy.get(this._loginEmailValidation);
    }

    getLoginPasswordValidation(){
        return cy.get(this._loginPasswordValidation);
    }

    getRegisterEmailValidation(){
        return cy.get(this._registerEmailValidation);
    }

    getRegisterPasswordValidation(){
        return cy.get(this._registerPasswordValidation);
    }

    disableUncaughtException(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          });
    }   
    
}
export default olxPageObject
