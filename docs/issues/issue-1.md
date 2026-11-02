**Description:**
- Use MongoDB database `cse341-books-db`.
- Create a MongoDB collection named `books`.
- Insert at least 3 seed book documents with fields `id`, `author`, `title`, and `publicationDate`.
- Each book document should follow this data model:
  - `id`: string, required
  - `author`: string, required
  - `title`: string, required
  - `publicationDate`: string in ISO 8601 date format, required
- Example book document:

```json
{
  "id": "b1",
  "author": "Maya Rivera",
  "title": "Patterns of Light",
  "publicationDate": "2021-08-17"
}
```

- Install the official MongoDB Node.js driver if needed.
- Configure the app to connect to MongoDB using environment variables.
- Update the server startup so the app connects to the database before it begins listening for requests to ensure that the connection is working.

**Test Plan:**
- [ ] The `cse341-books-db` database exists.
- [ ] The `books` collection exists with at least 3 documents.
- [ ] Each book document includes `id`, `author`, `title`, and `publicationDate`.
- [ ] Local app can connect to MongoDB without connection errors.
- [ ] Connection values are stored using environment variables (no secrets committed).
