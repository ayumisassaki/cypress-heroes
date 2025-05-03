class LoginPage { 

    selectorsList() {
        const selectors = {
                loginButton: 'nav',
                emailField: "[name='email']",
                passwordField: "[name='password']",
                signinButton: '.text-white',
                createHeroButton: '.bg-blue-700',
                invalidAlert: '.text-red-500'
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/heroes')
    }

}

export default LoginPage