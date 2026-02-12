---
title: Successfully create a product with valid name and description
checksumTestId: aB1cD
startUrl: /
---

## Data Setup
**Method:** Not Required

## Data Cleanup
**Method:** UI
- Delete the created product "Test Product Alpha" from the product list if it exists

## Test Steps

1. Click the "Create New Product" button
2. Verify the page title displays "Create Product"
3. Enter "Test Product Alpha" in the Name input field
4. Enter "This is a test description for product alpha" in the Description textarea
5. Click the "Save Product" button
6. Verify a success toast appears with message "Product created successfully"
7. Verify the page redirects to the home page (index.html)
8. Verify "Test Product Alpha" appears in the product list with description "This is a test description for product alpha"
