import { init, IChecksumPage } from "@checksum-ai/runtime";

const { test, defineChecksumTest, login, expect, checksumAI } = init();

test.describe("Create, edit and delete a new product", () => {
  /** Helper to get a product card by its name */
  const getProductItem = (page: IChecksumPage, name: string) =>
    page.locator(".product-item").filter({ hasText: name });

  test.beforeEach(async ({ page }) => {
    // Clear localStorage for test isolation
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
  });

  test(
    defineChecksumTest("Create, edit and delete a new product", "hObKP"),
    async ({ page, vs }) => {
      vs.productName = "cktest-Product-" + Date.now();
      vs.productDescription = "This is a test product for CRUD operations";
      vs.updatedProductName = vs.productName + " - Updated";
      vs.updatedProductDescription = "Updated description for CRUD test";

      // Step 1: Navigate to the home page
      await checksumAI("Navigate to the home page", async () => {
        await page.goto("/");
      });

      // Step 2: Click 'Create New Product' button
      await checksumAI("Click Create New Product button", async () => {
        await page.locator("#createProductBtn").click();
      });

      // Step 3: Fill in the product form
      await checksumAI("Fill in the product name", async () => {
        await page.locator("#productName").fill(vs.productName);
      });

      await checksumAI("Fill in the product description", async () => {
        await page.locator("#productDescription").fill(vs.productDescription);
      });

      // Step 4: Click 'Save Product' button
      await checksumAI("Click Save Product button", async () => {
        await page.locator("#saveBtn").click();
      });

      // Step 5: Verify toast message 'Product created successfully' appears
      const toast = page.locator(".toast");
      await expect(toast, "Toast notification should be visible").toBeVisible();
      await expect(toast, "Toast should show product created message").toHaveText("Product created successfully");

      // Step 6: Verify redirected to home page and the new product appears in the list
      await expect(page, "Should be redirected to home page").toHaveURL(/index\.html|\/$/);
      const productItem = getProductItem(page, vs.productName);
      await expect(productItem, "Newly created product should appear in the list").toBeVisible();

      // Step 7: Click 'Edit' button on the created product
      await checksumAI("Click Edit button on the created product", async () => {
        await productItem.locator(".btn-edit").click();
      });

      // Step 8: Verify on edit page with form pre-filled
      await expect(page.locator("#pageTitle"), "Page title should show Edit Product").toHaveText("Edit Product");
      await expect(page.locator("#productName"), "Product name field should be pre-filled").toHaveValue(vs.productName);
      await expect(page.locator("#productDescription"), "Product description field should be pre-filled").toHaveValue(vs.productDescription);

      // Step 9 & 10: Change the product name and description
      await checksumAI("Update the product name", async () => {
        await page.locator("#productName").fill(vs.updatedProductName);
      });

      await checksumAI("Update the product description", async () => {
        await page.locator("#productDescription").fill(vs.updatedProductDescription);
      });

      // Step 11: Click 'Save Product' button
      await checksumAI("Click Save Product button to save updates", async () => {
        await page.locator("#saveBtn").click();
      });

      // Step 12: Verify toast message 'Product created successfully' appears
      await expect(toast, "Toast notification should be visible after update").toBeVisible();
      await expect(toast, "Toast should show success message after update").toHaveText("Product created successfully");

      // Step 13: Verify redirected to home page and product shows updated name
      await expect(page, "Should be redirected to home page after update").toHaveURL(/index\.html|\/$/);
      const updatedProductItem = getProductItem(page, vs.updatedProductName);
      await expect(updatedProductItem, "Updated product should appear in the list").toBeVisible();

      // Step 14: Click 'Delete' button on the updated product
      await checksumAI("Click Delete button on the updated product", async () => {
        await updatedProductItem.locator(".btn-delete").click();
      });

      // Step 15: Verify delete confirmation modal appears
      const deleteModal = page.locator("#deleteModal");
      await expect(deleteModal, "Delete confirmation modal should appear").toBeVisible();

      // Step 16: Click 'Delete' button in the modal to confirm
      await checksumAI("Click Delete button in the modal to confirm deletion", async () => {
        await page.locator("#confirmDeleteBtn").click();
      });

      // Step 17: Verify toast message 'Product deleted successfully' appears
      await expect(toast, "Toast notification should be visible after deletion").toBeVisible();
      await expect(toast, "Toast should show product deleted message").toHaveText("Product deleted successfully");

      // Step 18: Verify the product is removed from the list
      await expect(updatedProductItem, "Deleted product should no longer appear in the list").not.toBeVisible();
    }
  );
});
