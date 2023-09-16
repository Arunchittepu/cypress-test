import chickfile from '../pageObjectModel/chick'

const chic = new chickfile();
describe('template spec', () => {
  beforeEach('visit chickfile page',() =>{
  cy.visit('https://www.chick-fil-a.com/')
  cy.wait(3000);
  })
  it('Navigate to Breakfast Menu and order', () => {
    chic.handlebreakfastpage()
    chic.breakfastMainpage()
    cy.wait(3000);
    cy.url().should('eq', 'https://www.chick-fil-a.com/menu#breakfast')
    cy.wait(3000);
    chic.breakfastitemdetails()
    chic.breakfastOrder()
    cy.wait(3000)
    });
  it('Navigate to Salauds and Order',()=>{
    chic.NavigateSalauds()
    cy.wait(3000);
    chic.SelectSaladsbtn()
    chic.NaviagateItem()
    chic.slectitemOptions()
    chic.Ordernow()
    cy.wait(3000)
    })
  it('Navigate to stories Food',()=>{
    chic.StoriesFood()
    chic.NaviagtestoriesPage()
    cy.url().should('eq','https://www.chick-fil-a.com/stories')
    chic.clickOnFood()
    chic.clickSavourliciousfood()
    chic.StoryofFood()
    chic.StoryofChickenSandwich()
    cy.wait(3000);
    })   
  it('Navigate to Lifestyle page',()=>{
    chic.NavigatetoLifeStyle()
    chic.checklifestyle()
    cy.wait(3000);
    })   
  it('Navigate to AboutPage',()=>{
    chic.NaviagateAboutPage()
    chic.SelectSubCategories()
    cy.url().should('eq','https://www.chick-fil-a.com/about/who-we-are')
    chic.FamilyOwned()
    cy.wait(3000);
    })
  it('Find Resturants',()=>{
    chic.findRestaurantLocation()
    chic.closeCookies()
    chic.findRestaurantCity()
    chic.SearchRestaurants()
    })
     
})