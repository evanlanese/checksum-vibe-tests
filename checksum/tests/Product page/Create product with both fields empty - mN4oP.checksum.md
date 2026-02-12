---
title: Attempt to create product with both fields empty shows validation error
checksumTestId: mN4oP
startUrl: /create.html
---

## Data Setup
**Method:** Not Required

## Data Cleanup
**Method:** Not Required

## Test Steps

1. Leave the Name input field empty
2. Leave the Description textarea empty
3. Click the "Save Product" button
4. Verify an error toast appears with message "Please fill in all fields"
5. Verify the page remains on create.html (no redirect occurs)
