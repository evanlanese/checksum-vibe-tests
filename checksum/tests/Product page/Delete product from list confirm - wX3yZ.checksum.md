---
title: Delete product from the product list with confirmation
checksumTestId: wX3yZ
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "Product To Delete From List" and Description: "This product will be deleted"

## Data Cleanup
**Method:** Not Required
- Product is deleted during test

## Test Steps

1. Locate the product "Product To Delete From List" in the product list
2. Click the "Delete" button on the product card
3. Verify the delete confirmation modal appears with text "Are you sure you want to delete this product?"
4. Click the "Delete" button in the modal to confirm deletion
5. Verify a success toast appears with message "Product deleted successfully"
6. Verify the modal closes
7. Verify "Product To Delete From List" no longer appears in the product list
