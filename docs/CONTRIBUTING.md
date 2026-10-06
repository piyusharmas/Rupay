# Contributing to Rupay

Thanks for your interest in improving Rupay. This repository is designed as a learning-oriented full-stack trading prototype, and contributions are welcome.

## How to contribute

1. Fork the repository.
2. Create a feature branch from the default branch.
3. Make the change in your branch.
4. Run the project locally and validate the behavior.
5. Open a pull request with a clear description of what changed and why.

## Development setup

To work on the project locally:

```bash
cd backend
npm install

cd ../dashboard
npm install

cd ../frontend
npm install
```

Then start the services in the usual order:

```bash
cd backend
npm start

cd ../dashboard
PORT=3000 npm start

cd ../frontend
PORT=3001 npm start
```

## Contribution guidelines

- Keep changes small and focused.
- Prefer clear, readable code and consistent naming.
- Update documentation when behavior or setup changes.
- Avoid introducing unrelated refactors into feature work.
- If you add a new route or API endpoint, document it in the README if it is user-facing.

## Pull request expectations

Your pull request should include:

- a concise summary of the change
- the reason for the change
- testing or validation steps you ran locally
- any setup changes required for reviewers

## Reporting issues

Open an issue with:

- a short description of the bug or feature request
- steps to reproduce
- expected vs. actual behavior
- any relevant screenshots or logs

## Code style

- Use existing project conventions where possible.
- Keep React components readable and modular.
- Use consistent indentation and naming in the backend JavaScript files.
- Prefer direct, maintainable code over overengineering.

## Questions

If you are unsure about a contribution, open an issue or start a discussion before making large changes.
