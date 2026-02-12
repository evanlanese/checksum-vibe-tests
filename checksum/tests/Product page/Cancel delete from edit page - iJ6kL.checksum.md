---
title: Cancel deletion from edit page keeps product
checksumTestId: iJ6kL
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "Edit Page Cancel Delete" and Description: "Cancel delete on edit page"

## Data Cleanup
**Method:** UI
- Delete the product "Edit Page Cancel Delete" from the product list if it exists

## Test Steps

1. Locate the product "Edit Page Cancel Delete" in the product list
2. Click the "Edit" button on the product card
3. Click the "Delete Product" button
4. Verify the delete confirmation modal appears
5. Click the "Cancel" button in the modal
6. Verify the modal closes
7. Verify the form still displays the product data (Name: "Edit Page Cancel Delete")
8. Click the "Cancel" button to return to home page
9. Verify "Edit Page Cancel Delete" still appears in the product list
