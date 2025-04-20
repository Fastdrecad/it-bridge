# Newsletter Component Test

This document outlines the testing scenarios for the Newsletter component with React Hook Form and Zod validation.

## Manual Testing Steps

1. **Form Validation**

   - Try submitting the form without filling in any fields
   - Verify that validation errors appear appropriately
   - Check that the submit button is disabled until all fields are valid

2. **Input Field Validation**

   - Test the firstName field with less than 2 characters
   - Test the lastName field with less than 2 characters
   - Test the email field with an invalid email format
   - Verify proper error messages appear in each case

3. **Submission Flow**

   - Fill in all fields with valid data
   - Submit the form
   - Verify the loading state appears
   - Verify success message appears after submission

4. **Error Handling**

   - Test what happens when the API returns an error
   - Verify the error message is displayed properly

5. **Language Switching**
   - Change the language while filling out the form
   - Verify that validation messages update to the new language
   - Verify that placeholders and UI text update to the new language

## Implementation Details

The Newsletter component uses:

- `react-hook-form` for form state management
- `zod` for validation schema definition
- `i18next` for internationalization
- Axios for API requests

The validation occurs on blur for better UX and uses Zod schema defined in `app/_validations/newsletterSchema.ts`.

Error messages are internationalized and will update when the language changes.
