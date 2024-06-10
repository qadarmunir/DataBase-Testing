// describe('template spec', () => {
//   let baseUrl = Cypress.config().baseUrl;
//   it('passes', () => {
//     cy.visit('https://www.linentech.net/login')
//   })
// })
// describe('Database Connection Test', () => {
//   it('should successfully connect to the database', () => {
//     // Use the custom Cypress task to query the database
//     cy.task('queryDb', 'SELECT 1')
//       .then(results => {
//         // Assert that the query returned a result
//         expect(results).to.exist;
//         // Assert that the result is an array
//         expect(results).to.be.an('array');
//         // Log a success message
//         cy.log('Database connection test passed. Successfully connected to the database.');
//       })
//       // .catch(error => {
//       //   // Log any errors that occur during the database query
//       //   cy.log('Error connecting to the database:', error);
//       //   // Fail the test if an error occurs
//       //   throw error;
//       // });
//   });
// });
describe('Read', () => {
  it('should retrieve all records from the "users" table', () => {
  cy.task('queryDb', 'SELECT * FROM activity_log')
  .then((result) => {
  expect(result).to.have.lengthOf(4)
  expect(result[0]).to.deep.include({ id: 1, name: 'John Doe', email: 'johndoe@example.com' })
  expect(result[1]).to.deep.include({ id: 2, name: 'Jane Doe', email: 'janedoe@example.com' })
  expect(result[2]).to.deep.include({ id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' })
  expect(result[3]).to.deep.include({ id: 4, name: 'Alice', email: 'alice@example.com' })
  })
  })
  })
