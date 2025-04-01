import {Page} from "@playwright/test";
import BasePage from "./src/pages/BasePage";
import LoginPage from "./src/pages/LoginPage";
import HomePage from "./src/pages/HomePage";
import RegisterPage from "./src/pages/RegisterPage";

export default class BaseTest {
  readonly page: Page;

  readonly basePage: BasePage;
  readonly homePage: HomePage;
  readonly loginPage: LoginPage;
  readonly registerPage: RegisterPage;

  constructor(page: Page) {
    this.page = page;

    this.basePage = new BasePage(page);
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.registerPage = new RegisterPage(page);
  }
}