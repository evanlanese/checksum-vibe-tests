---
title: Cancel during product edit returns to list without saving changes
checksumTestId: oP1qR
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "Cancel Edit Test" and Description: "Original unchanged description"

## Data Cleanup
**Method:** UI
- Delete the product "Cancel Edit Test" from the product list if it exists

## Test Steps

1. Locate the product "Cancel Edit Test" in the product list
2. Click the "Edit" button on the product card
3. Clear the Name input field and enter "Modified Name That Should Not Save"
4. Clear the Description textarea and enter "Modified description that should not save"
5. Click the "Cancel" button
6. Verify the page redirects to the home page
7. Verify "Cancel Edit Test" still appears in the product list with original description "Original unchanged description"
8. Verify "Modified Name That Should Not Save" does NOT appear in the product list
