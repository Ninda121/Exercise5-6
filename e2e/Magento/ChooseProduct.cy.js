describe('Choose Product', () => {

    //sukses shoose produk
    it('sukses choose product', () => {
      cy.visit('https://magento.softwaretestingboard.com/men.html'); 
      cy.get('.product-item-link').first().click();  
      cy.get('h1').should('be.visible');  
      cy.get('h1').should('not.be.empty'); 
      cy.get('.price').should('be.visible');  
      cy.get('.price').should('not.be.empty');
      cy.url('https://magento.softwaretestingboard.com/argus-all-weather-tank.html') ;
      cy.get('#option-label-size-143-item-166').first().click();
      cy.get('#option-label-color-93-item-52').first().click();
      cy.get('button[type=submit]').contains('Add to Cart').click()

    });

    //gagal choose product karena tidak memilih size dan warna
    it('gagal choose product', () => {
        cy.visit('https://magento.softwaretestingboard.com/men.html'); 
        cy.get('.product-item-link').first().click();  
        cy.get('h1').should('be.visible');  
        cy.get('h1').should('not.be.empty');         
        cy.get('.price').should('be.visible');  
        cy.get('.price').should('not.be.empty');
        cy.url('https://magento.softwaretestingboard.com/argus-all-weather-tank.html') ;
        cy.get('button[type=submit]').contains('Add to Cart').click()
    });

});