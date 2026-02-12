---
title: Create multiple products and verify list displays all
checksumTestId: gH2iJ
startUrl: /
---

1. Set localStorage 'products' to: [{"id": "multi-1", "name": "Multi Product One", "description": "First of multiple", "createdAt": "2024-01-01T00:00:00.000Z"}, {"id": "multi-2", "name": "Multi Product Two", "description": "Second of multiple", "createdAt": "2024-01-02T00:00:00.000Z"}, {"id": "multi-3", "name": "Multi Product Three", "description": "Third of multiple", "createdAt": "2024-01-03T00:00:00.000Z"}]
2. Refresh the page
3. Verify "Multi Product One" appears in the product list
4. Verify "Multi Product Two" appears in the product list
5. Verify "Multi Product Three" appears in the product list
6. Verify "First of multiple" appears as a description in the list
7. Verify "Second of multiple" appears as a description in the list
8. Verify "Third of multiple" appears as a description in the list
9. Clear localStorage 'products' key
