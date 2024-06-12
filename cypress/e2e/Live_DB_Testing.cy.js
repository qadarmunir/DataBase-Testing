describe('Example to Demonstrate SQL Database Testing in Cypress', () => {


   it.only('Verify that there is only one row in customer table that is accessable by id ', function () {
        cy.task('queryDb', "SELECT `id`, `group_id`, `customer_number`, `name`, `gl_code`, `email`, `send_email`, `image`, `failed_sms`, `special_cog_price_label`, `created_at`, `updated_at`, `deleted_at`, `organization_id`, `customer_type`, `contract_expiry_date`, `item_order`, `item_order2`, `billing_procedure`, `billing_period`, `special_cog_price`, `custom_price`, `rewash_price_by_weight`, `stains_price_by_weight`, `billing_type`, `priority`, `propelr_id`, `linen_ach_token` FROM `customer` WHERE id=2609;").then((result) => {
            cy.log(JSON.stringify(result))
            expect(result.length).to.equal(1);

            // Extract the row from the result
            // const row = result[0];
        
            // // Assert on specific fields/values
            // expect(row.id).to.equal(1945);
            // expect(row.group_id).to.equal(36);
            // expect(row.customer_number).to.equal('CVS');
            // expect(row.name).to.equal('City Vehicle Service');
            // expect(row.email).to.equal('lauras@cityvehicleservices.com.au');
            // expect(row.send_email).to.equal(1);
            // Add more assertions for other fields as needed
        })
    })
    it('Verify that there is only one row in customer table that is accessable by id ', function () {
        cy.task('queryDb', "SELECT * FROM `customer` ORDER BY `id` DESC LIMIT 1;").then((result) => {
            cy.log(JSON.stringify(result));
            // Check if a row is retrieved
            expect(result.length).to.equal(1);
            // Extract the last row from the result
            const lastRow = result[0];
            // Perform assertions on the last row
            // For example:
            expect(lastRow.id).to.equal(1945);
            expect(lastRow.group_id).to.equal(36);
            expect(lastRow.customer_number).to.equal('CVS');
            expect(lastRow.name).to.equal('City Vehicle Service');
            expect(lastRow.email).to.equal('lauras@cityvehicleservices.com.au');
            expect(lastRow.send_email).to.equal(1);
            // Add more assertions for other fields as needed
          
        })
    })
  })