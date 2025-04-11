import {Page} from "@playwright/test";
import BasePage from "./src/pages/BasePage";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import ProductDetailInformationPage from "./src/pages/ProductDetailInformationPage";
import RegisterPage from "./src/pages/RegisterPage";
import SearchPage from "./src/pages/SearchPage";


export default class BaseTest {
  readonly page: Page;

  readonly basePage: BasePage;
  readonly homePage: HomePage;
  readonly loginPage: LoginPage;
  readonly registerPage: RegisterPage;
  readonly searchPage: SearchPage;
  readonly productDetailInformationPage: ProductDetailInformationPage;

  constructor(page: Page) {
    this.page = page;

    this.basePage = new BasePage(page);
    this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
    this.registerPage = new RegisterPage(page);
    this.searchPage = new SearchPage(page);
    this.productDetailInformationPage = new ProductDetailInformationPage(page);
  }
}