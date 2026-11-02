**Description:**
- Create route for `GET /books`.
- Query all documents from the `books` collection.
- Return a JSON array of book objects.
- Return HTTP 200 on success.
- Return HTTP 500 with a safe JSON message if an unexpected error occurs.
- Success response body example:

```json
[
  {
    "id": "b1",
    "author": "Maya Rivera",
    "title": "Patterns of Light",
    "publicationDate": "2021-08-17"
  }
]
```

- Error response body example:

```json
{
  "message": "Internal server error"
}
```

**Test Plan:**
- [ ] `GET /books` returns an array in JSON.
- [ ] Response status is 200 on success.
- [ ] Each returned book includes `id`, `author`, `title`, and `publicationDate`.
- [ ] Response uses `application/json`.
- [ ] Unexpected failures return `{ "message": "Internal server error" }` with status 500.
