# W01 Part 1 – Books API Specification

## 1. Feature

The Books API provides endpoints to retrieve all books and retrieve one book by id, so a client can show a full book list and the details of a single selected book.

---

## 2. Version 1

```markdown
# Books API Spec

## Purpose
Create a basic web service that returns book data.

## Data Model
Book fields:
- id: string
- author: string
- title: string
- publicationDate: string

## Endpoints
1. GET /books
- Returns all books.
- Response status: 200 on success.

2. GET /books/:id
- Returns one book with matching id.
- Response status: 200 on success.
- If no match: 404.

## Initial assumptions
- Data is stored in MongoDB collection named books.
- API returns JSON.
```

---

## 3. Evaluation of Version 1

> Draft answers. Rewrite them in your own words and add what the AI said before submitting.

### 1. Are there any bugs or short-sighted decisions?
- `publicationDate` is only "a string", with no format. Clients could not parse it reliably, so the format should be ISO 8601 (`2021-08-17`).
- No fields are marked required, so a document missing `title` would be valid.
- Only the 404 case is defined. A database failure (500) has no defined behavior.
- The database name is not specified, only the collection.

### 2. Are there any security concerns that are missing?
- Nothing says internal errors (stack traces, MongoDB error messages) must be hidden from clients, which could leak the database structure.
- Nothing says the connection string must come from environment variables and stay out of Git.
- The `:id` param goes straight into a query. It should be used only as a plain string value in the filter, never built into a query from raw input.
- Authentication is not mentioned. It should be listed as out of scope so it is a conscious decision.

### 3. Are there any parts of the route design that might be slow?
- `GET /books` returns every document with no limit. That is fine for a few seed books, but it would not scale (pagination would be a future improvement).
- `GET /books/:id` filters on the custom `id` field, which has no index, so it scans the collection. An index on `id` would help as data grows.
- No ordering is defined, so list results are not predictable.

### 4. Are any response examples or error behaviors unclear?
- There are no JSON examples for any response.
- The body of the 404 response is not defined.
- The 500 response is not defined at all.
- It is not stated that responses are `application/json`.

---

## 4. Version 2

```markdown
# Books API Spec

## Purpose
Build a read-only Books API in Express with MongoDB storage.

## Data Model
MongoDB database: cse341-books-db
MongoDB collection: books

Book object:
- id: string (required)
- author: string (required)
- title: string (required)
- publicationDate: string in ISO 8601 date format (for example, "2021-08-17") (required)

## Endpoints
1. GET /books
- Description: Return all books.
- Success status: 200
- Error status: 500
- Success response body example:
[
  {
    "id": "b1",
    "author": "Maya Rivera",
    "title": "Patterns of Light",
    "publicationDate": "2021-08-17"
  }
]

2. GET /books/:id
- Description: Return one book by id.
- Success status: 200
- Not found status: 404
- Error status: 500
- Success response body example:
{
  "id": "b1",
  "author": "Maya Rivera",
  "title": "Patterns of Light",
  "publicationDate": "2021-08-17"
}
- Not found response body example:
{
  "message": "Book not found"
}

## Error Handling
- Do not return stack traces to clients.
- Return a simple message for 500 errors:
{
  "message": "Internal server error"
}

## Implementation Notes
- Use a MongoDB collection named `books`.
- Seed the collection with the book documents needed for testing.
- Use environment variables for the MongoDB connection.

## Out of Scope for Week 1
- POST, PUT, DELETE routes
- Authentication and authorization
```

---

## 5. What changed and why

| Version 1 | Version 2 | Why it is better |
|---|---|---|
| Fields listed with types only | Fields marked required, date in ISO 8601, database name defined | Precise data model; clients know exactly how to parse the date |
| Only 200 and 404 mentioned | 200, 404 and 500 defined per endpoint | Success and error behavior is complete for each route |
| No examples | Concrete JSON for success and not-found | Removes ambiguity for the client and for whoever implements it (or an AI agent) |
| No error policy | No stack traces; fixed 500 message | Safer: internal details are not leaked |
| No implementation notes | Seed data and environment variables | Clear how to test and how to keep secrets out of the code |
| No scope limits | Out-of-scope list (POST/PUT/DELETE, auth) | Keeps Week 1 focused and read-only |

### Note: custom `id` field
Week 1 uses a custom `id` (`b1`, `b2`, …) instead of MongoDB's `_id` so routes can be tested with simple values. Later weeks switch to `ObjectId`.
