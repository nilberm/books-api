**Description:**
- Create route for `GET /books/:id`.
- Find one book document by the `id` field.
- Return a JSON object when found.
- Return HTTP 200 on success.
- Return HTTP 404 when a book is not found.
- Return HTTP 500 with a safe JSON message if an unexpected error occurs.
- Success response body example:

```json
{
  "id": "b1",
  "author": "Maya Rivera",
  "title": "Patterns of Light",
  "publicationDate": "2021-08-17"
}
```

- Not found response body example:

```json
{
  "message": "Book not found"
}
```

- Error response body example:

```json
{
  "message": "Internal server error"
}
```

**Test Plan:**
- [ ] An existing id returns one book object in JSON.
- [ ] The returned book includes `id`, `author`, `title`, and `publicationDate`.
- [ ] A missing id returns `{ "message": "Book not found" }` with status 404.
- [ ] Response status is 200 on success.
- [ ] Response uses `application/json`.
- [ ] Unexpected failures return `{ "message": "Internal server error" }` with status 500.
