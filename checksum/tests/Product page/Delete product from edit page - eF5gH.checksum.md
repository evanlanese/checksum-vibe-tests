---
title: Delete product from the edit page with confirmation
checksumTestId: eF5gH
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "Product Delete From Edit" and Description: "Delete from edit page"

## Data Cleanup
**Method:** Not Required
- Product is deleted during test

## Test Steps

1. Locate the product "Product Delete From Edit" in the product list
2. Click the "Edit" button on the product card
3. Verify the "Delete Product" button is visible on the edit page
4. Click the "Delete Product" button
5. Verify the delete confirmation modal appears with text "Are you sure you want to delete this product?"
6. Click the "Delete" button in the modal to confirm deletion
7. Verify a success toast appears with message "Product deleted successfully"
8. Verify the page redirects to the home page
9. Verify "Product Delete From Edit" no longer appears in the product list
