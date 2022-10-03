
/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given('test tourist', ()=>{
    var random= Math.floor(Math.random() * Date.now());
    let email= random+"@gmail.com";
    console.log(email)
    var tourist= {"tourist_name" : "Mike",
    "tourist_email": email,
    "tourist_location": "Paris" ,
     }
})

Then('POST and validate the body object', () => {
    cy.request('POST','http://restapi.adequateshop.com/api/Tourist',tourist).then((result)=>{   
         // Steps to validate the status and respective body objects
              expect(result.status).to.eq(201)
              expect(result.body.tourist_email).to.eq(tourist.tourist_email)
              expect(result.body.tourist_location).to.eq(tourist.tourist_location)
              expect(result.body.tourist_name).to.eq(tourist.tourist_name)    
            })
    })