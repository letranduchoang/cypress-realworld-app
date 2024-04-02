// import { User } from "models";

// describe("Cypress Studio Demo", function () {
//   beforeEach(function () {
//     cy.task("db:seed");

//     cy.database("find", "users").then((user: User) => {
//       cy.login(user.username, "s3cret", { rememberUser: true });
//     });
//   });
//   it("create new transaction", function () {
//     // Extend test with Cypress Studio
//   });
//   it("create new bank account", function () {
//     // Extend test with Cypress Studio
//   });
// });
/// <reference types="Cypress" />
const username = 'chiphoi'
const password = '123456'

describe('My First Test Suite', function () {

  it('My FirstTest case', function () {

    cy.visit("/")
    cy.get('#username').type(username)
    cy.get("#password").type(password)
    cy.get('[data-test="signin-submit"]').click()
    cy.get('')
  })



})