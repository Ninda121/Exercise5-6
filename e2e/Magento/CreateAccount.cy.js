describe("Register", () => {
    const firstname = 'Ninda';
    const lastname = 'setyowati';
    const email = 'nindawati31@gmail.com';
    const password = 'Ninda123!';
    const confpass = 'Ninda123!';
    const baseURL = "https://magento.softwaretestingboard.com/customer/account/";

    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
      });  

    it("Success Register", () => {
        cy.get("#firstname").type(firstname);
        cy.get("#lastname").type(lastname);
        cy.get("#email_address").type(email);
        cy.get("#password").type(password);
        cy.get("#password-confirmation").type(confpass);

        cy.get('button[type=submit]')
        .contains('Create an Account')
        .click()
        .url()
        .should('eq', baseURL);
      });

      it("failed", () => {
        //menggunakan data kosong 
        cy.get("#firstname").type('');
        cy.get("#lastname").type('');
        cy.get("#email_address").type(email);
        cy.get("#password").type(password);
        cy.get("#password-confirmation").type('');

        cy.get('button[type=submit]')
        .contains('Create an Account')
        .click()
        .url()
        .should('eq', baseURL);
      });

   
});