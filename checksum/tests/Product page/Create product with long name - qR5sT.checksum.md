---
title: Create product with very long name
checksumTestId: qR5sT
startUrl: /create.html
---

## Data Setup
**Method:** Not Required

## Data Cleanup
**Method:** UI
- Delete the created product with long name from the product list if it exists

## Test Steps

1. Enter "This is an extremely long product name that exceeds typical length expectations and should still be handled properly by the application without any issues or truncation problems whatsoever" in the Name input field
2. Enter "Short description" in the Description textarea
3. Click the "Save Product" button
4. Verify a success toast appears with message "Product created successfully"
5. Verify the page redirects to the home page
6. Verify the product with the long name appears in the product list
