import userData from '../../fixtures/userData.json'
import loginPage from '../../pages/loginPage.d.ts'

const selectorsList = {
    loginButton: 'nav',
    emailField: "[name='email']",
    passwordField: "[name='password']",
    signinButton: '.text-white',
    createHeroButton: '.bg-blue-700',
    invalidAlert: '.text-red-500'
}

describe('Login page', () => {
   
    it('Login with correct credentials', () => {
    loginPage.accessLoginPage()
    //  cy.visit('/heroes')
     cy.get(selectorsList.loginButton).click()
     cy.get(selectorsList.emailField).type('admin@test.com')
     cy.get(selectorsList.passwordField).type('test123')
     cy.get(selectorsList.signinButton).click()
     cy.get(selectorsList.createHeroButton).contains('Create New Hero')
    
    });
});
    
describe('Login page', () => {

    it('Login with incorrect credential', () => {
     cy.visit('/heroes')
     cy.get(selectorsList.loginButton).click()
     cy.get(selectorsList.emailField).type('oi@test.com')
     cy.get(selectorsList.passwordField).type('test123')
     cy.get(selectorsList.signinButton).click()
     cy.get(selectorsList.invalidAlert).contains('Invalid email or password')
    });
});

describe('Login page', () => {

    it('Login with missing information ', () => {
     cy.visit('/heroes')
     cy.get(selectorsList.loginButton).click()
     cy.get(selectorsList.emailField).click()
     cy.get(selectorsList.passwordField).click()
     cy.get(selectorsList.signinButton).click()
     cy.get(selectorsList.invalidAlert).eq(0).contains('Email is required')
     cy.get(selectorsList.invalidAlert).eq(1).contains('Password is required')
    });
});

