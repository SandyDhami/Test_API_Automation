
/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

    // Example for GET
    // TC cases for validating the GET /groups/{group_guid}
    // Validating the success response status code and then the expected values in response body
    
    function getRequest(){
        cy.request({
            method:'GET',
            url:'https://api-ssl.bitly.com/v4/groups?organization_guid',
            headers:{
                authorization: 'Bearer 262d99a7026be1a9e37e983245cc2c3d6088720c'}
            })
    }


 Given('get the group and check status', ()=>{
    getRequest()
    }).then((result)=>{
         // Steps to validate the status and respective body objects
         expect(result.status).to.eq(200)
         expect(result.body).to.not.be.null
         })
    

 Then('check the body object', () => {
    getRequest()
    }).then((result)=>{
    expect(result.body.groups[0].name).to.eq('sandeepdhami')
    expect(result.body.groups[0].organization_guid).to.eq('Om9mcHzs4hJ')
    expect(result.body.groups[0].guid).to.eq('Bm9mcZX9jiP')
    expect(result.body.groups[0].references.organization).to.eq('https://api-ssl.bitly.com/v4/organizations/Om9mcHzs4hJ')
    expect(result.body.groups[0].role).to.eq('org-admin')
     })

