---
title: Cancel during product creation returns to product list
checksumTestId: yZ7aB
startUrl: /create.html
---

## Data Setup
**Method:** Not Required

## Data Cleanup
**Method:** Not Required

## Test Steps

1. Enter "Product That Should Not Be Saved" in the Name input field
2. Enter "This description should not be saved either" in the Description textarea
3. Click the "Cancel" button
4. Verify the page redirects to the home page (index.html)
5. Verify "Product That Should Not Be Saved" does NOT appear in the product list
