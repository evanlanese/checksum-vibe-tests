---
title: Search is case-insensitive
checksumTestId: yZ0aB
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "CamelCaseProduct" and Description: "Mixed case name"

## Data Cleanup
**Method:** UI
- Delete the product "CamelCaseProduct" from the product list if it exists

## Test Steps

1. Verify "CamelCaseProduct" appears in the product list
2. Enter "camelcaseproduct" in the search input field (all lowercase)
3. Click the "Search" button
4. Verify "CamelCaseProduct" appears in the search results
5. Click the "Clear" button
6. Enter "CAMELCASEPRODUCT" in the search input field (all uppercase)
7. Click the "Search" button
8. Verify "CamelCaseProduct" appears in the search results
