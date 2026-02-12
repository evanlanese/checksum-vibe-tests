---
title: Attempt to create product with empty name shows validation error
checksumTestId: eF2gH
startUrl: /create.html
---

## Data Setup
**Method:** Not Required

## Data Cleanup
**Method:** Not Required

## Test Steps

1. Leave the Name input field empty
2. Enter "Some valid description text" in the Description textarea
3. Click the "Save Product" button
4. Verify an error toast appears with message "Please fill in all fields"
5. Verify the page remains on create.html (no redirect occurs)
