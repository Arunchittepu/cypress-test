class chickfile{
locators={
  txtcon: '#onetrust-close-btn-container > .onetrust-close-btn-handler',
  txtmenu:'[href="/menu"] > :nth-child(1)',
  txtdata: '[data-source="64b0fb99-0012-48a5-88c6-fe897ea8e874"] > a',
  txtitemdetails: '[href="/menu/chick-fil-a-chicken-biscuit"] > .item-details > .item-title',
  txtbtn:'.p-details > .pdp-pwo-cta > .btn-container > [href="https://order.chick-fil-a.com/load-dot-com?itemTag=BISCUIT_CHICKEN"]',
  //"div[class='pdp__half pdp__half--cream'] div[class='btn-container'] a:nth-child(1)",
  txtshow: '.sc-gsFSXq.sc-hOynoF.ddTKQB.fdxMkV',
  txtsaladsurl:'#onetrust-close-btn-container > .onetrust-close-btn-handler',
  txtmenu:'[href="/menu"] > :nth-child(1)',
  txtclickbtn:'[data-source="55d5c6e4-8ad9-4dfd-9526-bf1d833e6a54"] > a',
  txtitemDetails:'[data-source="55d5c6e4-8ad9-4dfd-9526-bf1d833e6a54"] > a',
  selectitem:'[href="/menu/cobb-salad"] > .item-details > .item-title',
  txtclicknuggets:"label[for='pdp-radio-option-2']",
  OrderSalad:'.p-details > .pdp-pwo-cta > .btn-container > [href="https://order.chick-fil-a.com/load-dot-com?itemTag=COBB_GRILLED_NUGGETS"]',
  txtcon: '#onetrust-close-btn-container > .onetrust-close-btn-handler',
  txtStories:'#stories-id > :nth-child(1)',
  txtfoodId: '#food-id',
  txtfoodwrapper:'.wrapper > .food > p > a',
  txtstoryofFood:'.blurb',
  txtHoneypepper:'article > .content > :nth-child(3) > a',
  txtLifestylePage:'#lifestyle-id',
  txtstoryLifestyle:"//a[contains(text(),'Share words of encouragement with Dad this Father’')]",
  txtNavigateAbout:'ul.flex > :nth-child(3) > :nth-child(1) > :nth-child(1)',
  txtsubcategories:':nth-child(3) > .subnav > #menusubcategoricalid > :nth-child(1) > a',
  txtname:'#dan_t_cathy_bio_w_pic>h3',
  txtshowtxt:'.wrapper>h2',
  txtimg:'.wrapper>picture>img',
  PurchaseTickets:".btn[href='https://tours.chick-fil-a.com/tours/Home/Reservation']",
  txtlocation:'.header-components > :nth-child(2) > .current-location > button',
  txtclosebtn:'#onetrust-close-btn-container > .onetrust-close-btn-handler',
  txtfindRestaurants:'#find-restaurants-modal > .content > .pwo-modal-search > .search-container > .user-input',
  txtclickRestuarants:'#find-restaurants-modal > .content > .pwo-modal-search > .btn-round',
}
handlebreakfastpage()
{
  return cy.get(this.locators.txtcon).click();
}
breakfastMainpage()
{
  return cy.get(this.locators.txtmenu).click(),
         cy.get(this.locators.txtdata).click();
}
breakfastitemdetails()
{
  return cy.get(this.locators.txtitemdetails,).click();
}
breakfastOrder(){
  cy.get(this.locators.txtbtn).click()
}
NavigateSalauds()
{
  cy.get(this.locators.txtsaladsurl).click(),
  cy.get(this.locators.txtmenu).click()
}
SelectSaladsbtn()
{
  cy.get(this.locators.txtitemDetails).click({force:true})
}
NaviagateItem()
{
  cy.get(this.locators.selectitem).click({force:true})
}
slectitemOptions()
{
  cy.get(this.locators.txtclicknuggets).click()
}
Ordernow()
{
 cy.get(this.locators.OrderSalad).click()
}
StoriesFood()
{
  cy.get(this.locators.txtcon).click()
}
NaviagtestoriesPage()
{
cy.get(this.locators.txtStories).click()
}
clickOnFood(){
  cy.get(this.locators.txtfoodId).click()
}
clickSavourliciousfood()
{
  cy.get(this.locators.txtfoodwrapper).click({force:true})
}
StoryofFood()
{
  cy.get(this.locators.txtstoryofFood).should('contain','Chicken Sandwich')
}
StoryofChickenSandwich()
{
cy.get(this.locators.txtHoneypepper).click()
}

NavigatetoLifeStyle()
{
  cy.get(this.locators.txtLifestylePage).click({force:true})
}
checklifestyle()
{
  cy.xpath(this.locators.txtstoryLifestyle)
}
NaviagateAboutPage()
{
  cy.get(this.locators.txtNavigateAbout).click()
}
SelectSubCategories()
{
  cy.get(this.locators.txtsubcategories).click()
}
FamilyOwned()
{
  cy.get(this.locators.txtname).first().invoke('show').should('have.text','\n Dan T. Cathy '),
  cy.get(this.locators.txtname).last().should('have.text','Chairman\n')
}
CheckNextGenerationsFamily()
{
  cy.get(this.locators.txtoodwrapper).should('have.text','Corporate purposeFamily ownedThe next generationInnovationSubsidiaries')
}
ImgeVisible()
{
  cy.get(this.locators.txtimg).should('be.visible')
}
// SelectPurchaseTickets()
// {
//   cy.contains(this.locators.PurchaseTickets).invoke('removeAttr','target'.click())
// }
findRestaurantLocation()
{
  cy.get(this.locators.txtlocation).click()
}
closeCookies()
{
  cy.get(this.locators.txtclosebtn).click({force:true})
}
findRestaurantCity()
{
  cy.get(this.locators.txtfindRestaurants).click().type('columbus');
}
SearchRestaurants()
{
cy.get(this.locators.txtclickRestuarants).click()
}
}

export default chickfile;