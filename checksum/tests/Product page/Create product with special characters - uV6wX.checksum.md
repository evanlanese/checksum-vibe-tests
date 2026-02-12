---
title: Create product with special characters in name and description
checksumTestId: uV6wX
startUrl: /create.html
---

## Data Setup
**Method:** Not Required

## Data Cleanup
**Method:** UI
- Delete the created product "Test <Product> & \"Special\" 'Chars'" from the product list if it exists

## Test Steps

1. Enter "Test <Product> & \"Special\" 'Chars'" in the Name input field
2. Enter "Description with <html> tags, \"quotes\", 'apostrophes' & ampersands!" in the Description textarea
3. Click the "Save Product" button
4. Verify a success toast appears with message "Product created successfully"
5. Verify the page redirects to the home page
6. Verify the product name displays correctly as "Test <Product> & \"Special\" 'Chars'" (properly escaped)
7. Verify the product description displays correctly with all special characters preserved
