describe("Register", () => {
    beforeEach(() => {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
      //cy.viewport(320, 480);
    });

    it("Success Register", () => {
        //cy.get("#firstname").post("ninda");
        //cy.get("#lastname").post("setyowati");
        //cy.get("#email_address").post("nindawati31@gmail.com");
        //cy.get("#password").post("password");
        //cy.get("#password-confirmation").post("password");
        //cy.get(".action submit primary").click();

        /*cy.request('POST',"#firstname" , { firstname: 'Ninda' })
        cy.request('POST',"#lastname" , { lasttname: 'Setyowati' })
        cy.request('POST',"#email_address" , { email_address: 'nindawati31@gmail.com' })
        cy.request('POST',"#password" , { password: 'password123!' })
        cy.request('POST',"#password-confirmation" , { password: 'password123!' })
        cy.get(".action submit primary").click();
        //cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')*/

        //cy.get('[data-test="title"]').should("be.visible");
        //cy.verifyVisible('[data-test="title"]');
        //cy.url().should("include", "/inventory.html");
      });
    

});
