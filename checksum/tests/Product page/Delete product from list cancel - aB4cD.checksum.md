---
title: Cancel deletion from product list keeps product
checksumTestId: aB4cD
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "Product Cancel Delete Test" and Description: "This product should remain after cancel"

## Data Cleanup
**Method:** UI
- Delete the product "Product Cancel Delete Test" from the product list if it exists

## Test Steps

1. Locate the product "Product Cancel Delete Test" in the product list
2. Click the "Delete" button on the product card
3. Verify the delete confirmation modal appears
4. Click the "Cancel" button in the modal
5. Verify the modal closes
6. Verify "Product Cancel Delete Test" still appears in the product list
