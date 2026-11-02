# W01 Part 2 – Plan

Tasks, in order (each unlocks the next):

1. Create the books collection and connect the app to MongoDB
2. Implement a route to retrieve all books
3. Implement a route to retrieve one book by id
4. Deploy and test the application

The body of each GitHub issue is in `docs/issues/issue-N.md`. Use the titles above exactly as written.

## Create the issues

Once the repository exists on GitHub and `gh auth login` is done, from the repo root:

```bash
gh issue create --title "Create the books collection and connect the app to MongoDB" --body-file docs/issues/issue-1.md
gh issue create --title "Implement a route to retrieve all books" --body-file docs/issues/issue-2.md
gh issue create --title "Implement a route to retrieve one book by id" --body-file docs/issues/issue-3.md
gh issue create --title "Deploy and test the application" --body-file docs/issues/issue-4.md
```

Create them in this order so they get numbers #1 to #4 (the pull requests use `Resolves #1`, `#2`, `#3`).

## Self-review

| Issue | Clear | Testable | Small | Complete |
|---|---|---|---|---|
| 1 | yes | yes | yes | yes |
| 2 | yes | yes | yes | yes |
| 3 | yes | yes | yes | yes |
| 4 | yes | yes | yes | yes |

## Done when

Four issues exist in the repository with these exact titles, each with a description and a Test Plan. Issues 1 to 3 are closed later by pull requests; issue 4 is closed manually with a comment containing the deployed URL.
