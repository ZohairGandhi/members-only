# Members Only

## Database Models

- User: first name, last name, username/email, password, membership-status, admin
- Message: title, timestamp, text, user

## Sign-up Form

- Sanitize and validate form fields
- Secure passwords w/ bcrypt
- Confirm password field and validate w/ custom validator

## Membership Status

- Page for members to join club by entering secret passcode

## Login Form

- Once logged in, link to create new message (only show if logged in)

## Home Page

- Display all member messages on home page, only show author and date to club-members

## Admin

- Show delete button and allow deleting messages
- Another secret passcode to be admin
