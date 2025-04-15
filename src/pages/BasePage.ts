import {expect, Locator, Page} from '@playwright/test';
import {getConfig} from '../utils/config';

export default class BasePage {
  readonly page: Page;
  readonly baseUrl: string;
  public url: string = getConfig().baseUrl;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = this.url;
  }

  /**
   * Navigate to a specific URL
   * @param path - The path to navigate to
   */
  async navigate(path: string = ''): Promise<void> {
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
   * Get Locator using data-testid
   */
  async getByTestId(testId: string): Promise<Locator> {
    return this.page.getByTestId(testId);
  }

  /**
   * Get Locator using aria-label
   */
  async getByLabel(label: string): Promise<Locator> {
    return this.page.getByLabel(label);
  }

  /**
   * Get Locator by placeholder
   */
  async getByPlaceholder(placeholder: string): Promise<Locator> {
    return this.page.getByPlaceholder(placeholder);
  }

  /**
   * getByText
   */
  async getByText(text: string): Promise<Locator> {
    return this.page.getByText(text);
  }

  /**
   * getByRole
   */
  async getByRole(role: string, name?: string): Promise<Locator> {
    return this.page.getByRole(role as any, name ? {name} : undefined);
  }

  /**
   * Click on CSS locator
   */
  async click(locator: string | Locator, timeout: number = 10000): Promise<void> {
    const element = typeof locator === 'string' ? await this.getElement(locator) : locator;

    await Promise.all([
      expect(element).toBeVisible({timeout}),
      expect(element).toBeEnabled({timeout}),
    ]);

    await element.scrollIntoViewIfNeeded();
    await element.click({trial: true});
    await element.click();
  }

  /**
   * Fill a form field
   * @param locator - The selector of the form field
   * @param value - The value to fill
   */
  async fill(locator: string | Locator, value: string): Promise<void> {
    const element = typeof locator === 'string' ? await this.getElement(locator) : locator;
    await element.fill(value);
  }

  /**
   * Get text from an element
   * @param locator - The selector to get text from
   */
  async getText(locator: string | Locator): Promise<string> {
    const element = typeof locator === 'string' ? await this.getElement(locator) : locator;
    return await element.innerText();
  }

  async verifyTextByAttribute(locator: string, attribute: string): Promise<string | undefined> {
    try {
      const element = await this.getElement(locator);
      return await element.getAttribute(attribute) ?? undefined;
    } catch (error) {
      console.error(`🔥 Error getting attribute '${attribute}' from '${locator}':`, error);
      return undefined;
    }
  }

  /**
   * Check if element is visible
   * @param locator - The selector to check visibility
   */
  async isVisible(locator: string | Locator): Promise<boolean> {
    const element = typeof locator === 'string' ? await this.getElement(locator) : locator;
    return await element.isVisible();
  }

  /**
   * Wait for element to be visible
   * @param locator - The selector to wait for
   * @param timeout - The timeout in milliseconds
   */
  async waitForElement(locator: string | Locator, timeout: number = 10000): Promise<void> {
    const element = typeof locator === 'string' ? await this.getElement(locator) : locator;
    await element.waitFor({state: 'visible', timeout});
  }

  /**
   * Select option from dropdown
   * @param locator
   * @param value - The value to select
   */
  async selectOption(locator: string | Locator, value: string): Promise<void> {
    const element = typeof locator === 'string' ? await this.getElement(locator) : locator;
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

  /**
   * Wait for specific time
   */
  async waitForTimeout(time: number) {
    await this.page.waitForTimeout(time);
  }
}
