# Contributing to UUID Clipper

Thanks for your interest in contributing! This is a simple extension, so the process is straightforward.

## Getting Started

1. Fork and clone the repository
2. Install [web-ext](https://github.com/mozilla/web-ext) if you haven't already:
   ```sh
   npm install -g web-ext
   ```
3. Run the extension locally:
   ```sh
   web-ext run --source-dir .
   ```

## Making Changes

- Keep it simple — the goal of this extension is to stay minimal
- Test your changes in Firefox 95+ before submitting
- Run `web-ext lint` to check for manifest or code issues:
  ```sh
  web-ext lint --source-dir .
  ```

## Submitting a Pull Request

1. Create a feature branch from `main`
2. Make your changes
3. Ensure `web-ext lint` passes with no errors
4. Open a pull request with a clear description of what you changed and why

## Reporting Bugs

Open an issue with:

- Firefox version
- Steps to reproduce
- Expected vs actual behaviour

## Ideas for Contribution

- Keyboard shortcut support
- Option to choose UUID version (v4, v7, etc.)
- Notification popup showing the generated UUID
- Chrome/Edge port (Manifest V3)

## Code of Conduct

Be kind and respectful. That's it.
