---
title: Search for existing product by name
checksumTestId: mN7oP
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "Searchable Widget" and Description: "A widget that can be found"
- Create a product with Name: "Hidden Gadget" and Description: "A gadget that should be filtered out"

## Data Cleanup
**Method:** UI
- Delete the product "Searchable Widget" from the product list if it exists
- Delete the product "Hidden Gadget" from the product list if it exists

## Test Steps

1. Verify both "Searchable Widget" and "Hidden Gadget" appear in the product list
2. Enter "Widget" in the search input field
3. Click the "Search" button
4. Verify "Searchable Widget" appears in the filtered product list
5. Verify "Hidden Gadget" does NOT appear in the filtered product list
