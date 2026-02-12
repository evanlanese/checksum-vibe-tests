---
title: Edit existing product
checksumTestId: xY1zW
startUrl: /
---

1. Set localStorage 'products' to: [{"id": "edit-test-1", "name": "Original Product", "description": "Original description", "createdAt": "2024-01-01T00:00:00.000Z"}]
2. Refresh the page
3. Verify "Original Product" appears in the product list
4. Click the "Edit" button on the "Original Product" card
5. Verify the page title displays "Edit Product"
6. Verify the "Delete" button is visible
7. Verify the Name field is pre-filled with "Original Product"
8. Verify the Description field is pre-filled with "Original description"
9. Clear the Name field and enter "Updated Product Name"
10. Clear the Description field and enter "Updated description text"
11. Click the "Save Product" button
12. Verify a success toast appears with message "Product created successfully"
13. Verify the page redirects to the home page
14. Verify "Updated Product Name" appears in the product list
15. Verify "Updated description text" appears as the description for the product
16. Verify "Original Product" no longer appears in the product list
17. Clear localStorage 'products' key
