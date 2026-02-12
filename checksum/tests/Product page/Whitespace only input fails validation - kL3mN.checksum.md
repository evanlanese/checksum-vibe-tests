---
title: Product with whitespace-only input fails validation
checksumTestId: kL3mN
startUrl: /create.html
---

## Data Setup
**Method:** Not Required

## Data Cleanup
**Method:** Not Required

## Test Steps

1. Enter "   " (spaces only) in the Name input field
2. Enter "   " (spaces only) in the Description textarea
3. Click the "Save Product" button
4. Verify an error toast appears with message "Please fill in all fields"
5. Verify the page remains on create.html (no redirect occurs)
