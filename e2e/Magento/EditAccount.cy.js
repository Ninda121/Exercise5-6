describe("Register", () => {
    const newfirstname = 'Danin';
    const newlastname = 'setya';
    const email = 'nindawati31@gmail.com';
    const password = 'Ninda123!';
    const confpass = 'Ninda123!';
    const baseURL = "https://magento.softwaretestingboard.com/customer/account/index/";

    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/edit/");
      });  

    it("Success ganti nama depan dan belakang", () => {
        cy.get("#firstname").type(newfirstname);
        cy.get("#lastname").type(newlastname);

        cy.get('button[type=submit]')
        .contains('save')
        .click()
        .url()
        .should('eq', baseURL);
      });

      it("failed", () => {
        //menggunakan data kosong 
        cy.get("#firstname").type('');
        cy.get("#lastname").type('');

        cy.get('button[type=submit]')
        .contains('Save')
        .click()
        .url()
        .should('eq', baseURL);
      });

   
});