**Description:**
- Deploy the latest version of the app to Render (including database connectivity and routes).
- Configure production environment variables in Render for MongoDB access.
- Test both endpoints (`GET /books` and `GET /books/:id`) against the deployed URL.
- Confirm data returned from the deployed API matches the documents you created at MongoDB.
- Confirm the deployed API follows the response examples from the spec:
  - `GET /books` returns an array of book objects.
  - `GET /books/:id` returns one book object for an existing id.
  - `GET /books/:id` returns `{ "message": "Book not found" }` for a missing id.
  - Unexpected server errors return `{ "message": "Internal server error" }`.

**Test Plan:**
- [ ] Deployed `GET /books` returns an array with status 200.
- [ ] Deployed `GET /books/:id` returns a book for an existing id with status 200.
- [ ] Deployed `GET /books/:id` returns 404 for a missing id.
- [ ] Deployed not-found and server-error responses return safe JSON messages.
- [ ] The final deployed URL is recorded in the README or in an issue comment.
