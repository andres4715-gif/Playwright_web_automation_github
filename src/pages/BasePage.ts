import {Page, Locator} from "@playwright/test";

export default class BasePage {
  readonly page: Page;
  readonly baseUrl: string;

  public url: string = "https://demo.nopcommerce.com/";

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = this.url;
  }

  /**
   * Navigate to a specific URL
   * @param path - The path to navigate to
   */
  async navigate(path: string = ""): Promise<void> {
    await this.page.goto(`${this.baseUrl}${path}`);
  }

  /**
   * Get element by selector
   * @param selector - The selector to find element
   */
  async getElement(selector: string): Promise<Locator> {
    return this.page.locator(selector);
  }

  /**
   * Click on an element
   * @param selector - The selector to click on
   */
  async click(selector: string): Promise<void> {
    const element = await this.getElement(selector);
    await element.click();
  }

  /**
   * Fill a form field
   * @param selector - The selector of the form field
   * @param value - The value to fill
   */
  async fill(selector: string, value: string): Promise<void> {
    const element = await this.getElement(selector);
    await element.fill(value);
  }

  /**
   * Get text from an element
   * @param selector - The selector to get text from
   */
  async getText(selector: string): Promise<string> {
    const element = await this.getElement(selector);
    return await element.innerText();
  }

  /**
   * Check if element is visible
   * @param selector - The selector to check visibility
   */
  async isVisible(selector: string): Promise<boolean> {
    const element = await this.getElement(selector);
    return await element.isVisible();
  }

  /**
   * Wait for element to be visible
   * @param selector - The selector to wait for
   * @param timeout - The timeout in milliseconds
   */
  async waitForElement(
    selector: string,
    timeout: number = 10000
  ): Promise<void> {
    const element = await this.getElement(selector);
    await element.waitFor({state: "visible", timeout});
  }

  /**
   * Select option from dropdown
   * @param selector - The dropdown selector
   * @param value - The value to select
   */
  async selectOption(selector: string, value: string): Promise<void> {
    const element = await this.getElement(selector);
    await element.selectOption(value);
  }

  /**
   * Get current URL
   */
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Take screenshot
   * @param path - Path to save screenshot
   */
  async takeScreenshot(path: string): Promise<void> {
    await this.page.screenshot({path});
  }

  async waitForTimeout(time: number) {
    await this.page.waitForTimeout(time);
  }
}
