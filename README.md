# Markdown Editor App

## Agenda
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Installation](#installation)
5. [Testing](#testing)
6. [Project Decisions](#project-decisions)
7. [Atomic Design Structure](#atomic-design-structure)
8. [Future Improvements](#future-improvements)

## Overview

This is a simple Markdown Editor built with React Native using Expo. The application is designed to allow users to write and preview markdown text in real-time. The structure of the application is kept simple for ease of understanding, but the project is also set up in a way that can be easily scaled using best practices like Atomic Design.

## Project Structure

The project is organized into the following main directories:

```
src/
├── components/
│   ├── basiccomponent/
│   │   ├── TextArea/
│   │   │   ├── TextArea.tsx
│   │   │   └── tests/
│   │   │       └── index.test.tsx
│   │   ├── LoadingIndicator/
│   │   │   ├── LoadingIndicator.tsx
│   │   │   └── tests/
│   │   │       └── index.test.tsx
│   │   ├── CustomButton/
│   │   │   ├── CustomButton.tsx
│   │   │   └── tests/
│   │   │       └── index.test.tsx
│   │   ├── SafeAreaWrapper/
│   │   │   ├── SafeAreaWrapper.tsx
│   │   │   └── tests/
│   │   │       └── index.test.tsx
│   ├── markdown/
│   │   ├── MarkdownEditor/
│   │   │   ├── MarkdownEditor.tsx
│   │   │   └── tests/
│   │   │       └── index.test.tsx
│   │   ├── MarkdownViewer/
│   │   │   ├── MarkdownViewer.tsx
│   │   │   └── tests/
│   │   │       └── index.test.tsx
├── hooks/
│   ├── useMarkdownEditor.ts
│   ├── useIsPortrait.ts
│   └── tests/
│       ├── useMarkdownEditor.test.ts
│       └── useIsPortrait.test.ts
App.tsx
README.md
```

## Features

- **Real-time Markdown Editing:** Write markdown text and see the formatted output immediately.
- **Debounced Auto-Save:** Changes are automatically saved after a short delay to avoid unnecessary writes.
- **Reset Functionality:** Reset the editor content with a single click.
- **Responsive Layout:** Adapts to portrait and landscape orientations.
- **Unit and Integration Tests:** Ensures the robustness of the application.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AbanoubAshraaf/markdown-dataCamp.git
   cd markdown-dataCamp
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   ```

3. **Start the Expo server:**
   ```sh
   yarn start
   ```

## Testing

Run the tests using Jest by executing

```sh
yarn test
```
This command will run all the test cases under the tests/ folders and provide a coverage report.

## Project Decisions
### Simplified Structure

The project structure is designed to be simple and intuitive, making it easy for developers to navigate and understand. The components are grouped based on their functionality rather than strictly following the Atomic Design methodology. This decision was made to keep the project straightforward, given its size.

### Potential for Scaling
While the current structure is simple, it's easy to see how it could be scaled using Atomic Design principles if the project grows:

## Atomic Design Structure
If the project were to be restructured using Atomic Design principles, the structure might look like this:


```
src/
├── components/
│   ├── atoms/
│   │   ├── TextArea/
│   │   ├── LoadingIndicator/
│   │   ├── CustomButton/
│   │   └── SafeAreaWrapper/
│   │
│   ├── molecules/
│   │   └── MarkdownViewer/
│   │
│   ├── organisms/
│   │   └── MarkdownEditor/
│   │
│   ├── templates/
│   ├── pages/
│   │
├── hooks/
│   ├── useMarkdownEditor.ts
│   └── useIsPortrait.ts
App.tsx
README.md
```
### Atomic Design Explanation

- **Atoms:** The smallest, indivisible components (e.g., TextArea, LoadingIndicator, CustomButton, SafeAreaWrapper).
- **Molecules:** Groups of atoms functioning together (e.g., MarkdownViewer).
- **Organisms:** Complex components composed of molecules and atoms (e.g., MarkdownEditor).
- **Templates:** Page-level layouts that define the structure (not implemented here).
- **Pages:** Specific pages or screens that use templates (not implemented here).

## Future Improvements
- **State Management:** Integrate a global state management solution like Redux if the app grows in complexity.
- **Atomic Design:** Consider refactoring to fully adopt Atomic Design if the project scales.