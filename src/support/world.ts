import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { Page, BrowserContext, Browser } from "@playwright/test";
import BaseTest from "../../BaseTest";

interface CustomWorldOptions extends IWorldOptions {}

class CustomWorld extends World {
  page!: Page;
  context!: BrowserContext;
  browser!: Browser;
  baseTest!: BaseTest;

  constructor(options: CustomWorldOptions) {
    super(options);
    // No inicializar page/context aquí
  }
}

setWorldConstructor(CustomWorld);
