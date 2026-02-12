---
title: Search with no matching results shows empty state
checksumTestId: qR8sT
startUrl: /
---

## Data Setup
**Method:** UI
- Create a product with Name: "Existing Product" and Description: "This exists in the list"

## Data Cleanup
**Method:** UI
- Delete the product "Existing Product" from the product list if it exists

## Test Steps

1. Verify "Existing Product" appears in the product list
2. Enter "NonExistentXYZ123" in the search input field
3. Click the "Search" button
4. Verify the empty state message "No products found" is displayed
5. Verify the message "Try adjusting your search criteria" is displayed
