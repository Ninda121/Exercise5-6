describe("Login", () => {
    const email = 'nindawati31@gmail.com';
    const pass = 'Ninda123!';
    const baseURL = "https://magento.softwaretestingboard.com/customer/account/index/";

    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
      });  

    it("Success Login", () => {
        cy.get("#email").type(email);
        cy.get("#pass").type(pass);

        cy.get('button[type=submit]')
        .contains('Sign In')
        .click()
        .url()
        .should('eq', baseURL);
      });

      it("failed", () => {
        //menggunakan password kosong 
        cy.get("#email").type(email);
        cy.get("#pass").type('');

        cy.get('button[type=submit]')
        .contains('Sign In')
        .click()
        .url()
        .should('eq', baseURL);
      });

   
});