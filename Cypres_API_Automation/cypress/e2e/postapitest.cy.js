
describe("test cases for POST API", ()=>{


// Example for POST method
it.only('test group', ()=>{
    cy.request({
        method:'POST',
        url:'https://api-ssl.bitly.com/v4/bitlinks',
        headers:{
            authorization: 'Bearer 262d99a7026be1a9e37e983245cc2c3d6088720c'
        }
    }).then((result)=>{
           console.log(result)
            // Steps to validate the status and respective body objects
            expect(result.status).to.eq(201)
           
            })
    
    })

})