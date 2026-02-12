import { init } from "@checksum-ai/runtime";

const { test, defineChecksumTest, expect, checksumAI } = init();

test.describe("Empty state when no products exist", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to page and clear localStorage for test isolation
    await checksumAI("Navigate to home page", async () => {
      await page.goto("/");
    });
    await page.evaluate(() => localStorage.clear());
  });

  test(
    defineChecksumTest(`Empty state when no products exist @bug`, "cD1eF"),
    { annotation: [{ type: "bug", description: `Detailed bug description` }] },
    async ({ page }) => {
      // Step 1: Set localStorage 'products' to an empty array
      await page.evaluate(() => {
        localStorage.setItem("products", JSON.stringify([]));
      });

      // Step 2: Refresh the page
      await checksumAI("Refresh the page to show empty state", async () => {
        await page.reload();
      });

      // Step 3: Verify the empty state message 'No products found' is displayed
      const emptyStateHeading = page.getByRole("heading", {
        name: "sfsfsfsdfsfsdf",
      });
      await expect
        .skipAutoRecovery(
          emptyStateHeading,
          "Empty state heading 'No products found' should be visible"
        )
        .toBeVisible({ timeout: 5_000 });

      // Step 4: Verify the message 'Create your first product to get started' is displayed
      const emptyStateMessage = page.getByText(
        "Create your first product to get started"
      );
      await expect(
        emptyStateMessage,
        "Empty state message should be visible"
      ).toBeVisible();

      // Step 5: Verify no product cards are visible in the product list area
      const productCards = page.locator(".product-item");
      await expect(
        productCards,
        "No product cards should be visible"
      ).toHaveCount(0);
    }
  );
});
