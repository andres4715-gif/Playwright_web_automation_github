import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { BrowserContext } from "@playwright/test";

interface CustomWorldOptions extends IWorldOptions {
  page?: Page;
  context?: BrowserContext;
}

class CustomWorld extends World {
  page!: Page;
  context!: BrowserContext;

  constructor(options: CustomWorldOptions) {
    super(options);
    if (options.page) {
      this.page = options.page;
    }
  }
}

setWorldConstructor(CustomWorld);
