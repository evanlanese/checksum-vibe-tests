---
title: Clear search to show all products
checksumTestId: uV9wX
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "Clear Test Alpha" and Description: "First product"
- Create a product with Name: "Clear Test Beta" and Description: "Second product"

## Data Cleanup
**Method:** UI
- Delete the product "Clear Test Alpha" from the product list if it exists
- Delete the product "Clear Test Beta" from the product list if it exists

## Test Steps

1. Enter "Alpha" in the search input field
2. Click the "Search" button
3. Verify only "Clear Test Alpha" appears in the product list
4. Verify "Clear Test Beta" does NOT appear in the filtered list
5. Click the "Clear" button
6. Verify the search input field is empty
7. Verify both "Clear Test Alpha" and "Clear Test Beta" appear in the product list
