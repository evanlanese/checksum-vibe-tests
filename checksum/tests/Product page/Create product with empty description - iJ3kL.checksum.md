---
title: Attempt to create product with empty description shows validation error
checksumTestId: iJ3kL
startUrl: /create.html
---

## Data Setup
**Method:** Not Required

## Data Cleanup
**Method:** Not Required

## Test Steps

1. Enter "Valid Product Name" in the Name input field
2. Leave the Description textarea empty
3. Click the "Save Product" button
4. Verify an error toast appears with message "Please fill in all fields"
5. Verify the page remains on create.html (no redirect occurs)
