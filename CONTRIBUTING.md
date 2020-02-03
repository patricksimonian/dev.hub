## Contributing to the Project


## Branch Naming Conventions

The Branch naming pattern is `<prefix>/<name>`

Give branches a prefix based on the task type. The following branch prefixes are supported:

- `docs/<name>`: Used for any documentation change
- `feat/<name>`: Used for adding enhancments/features
- `bug/<name>`: Fixes a bug
- `chore/<name>`: A chore task such as upgrading dependancies, folder cleanup etc

Custom branch names are acceptable for larger integrations.

It is important to prefix the branches correctly because **special branch rules** are applied based on these prefixes.

The name should be something simple and concise. It is helpful to add the issue number to the name but it is
not mandatory.

## Code Coverage

It is ideal to maintain a good amount of code coverage for this project. Since it is quite small right now, our
code coverage marker is at least 60%. This is quite low and will be increased as the project grows. 

### Quality

All code changes are scanned by **Code Climate**. If there are any issues to fix, we ask that you fix them
prior to requesting a review. There may be some Code Climate issues that are not relevant or could be argued to be not
fixable. These will be marked as resolved by a code maintainer.

### Testing

If there are bugs/features that are based off of a user interaction it is essential to write an __E2E test__.
There is currently no guidelines on the cypress e2e test writing style so it will be up to the reviewers discretion to
decide what will pass the PR. 

Code that is not related to the user action should be tested with Jest as a unit test.
