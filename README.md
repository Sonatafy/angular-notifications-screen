# AngularAssessment

## Task: Notifications Flow

**Setup:** Before you start, create a new branch to work on this exercise. Use your name and the date as the branch name, for example:

`git checkout -b your-name/YYYY-MM-DD`

Build a simple app with two screens.

### Screen 1 – Main Screen
- Show a big button labeled “Notifications”.
- When the user taps the button, open the Notification Center screen.

### Screen 2 – Notification Center
- Show a title: “Notification Center”.
- Show a small text link on the right: “Clear all”.
- Show a vertical list of notifications.

Each notification has:
- An icon on the left.
- A title (e.g. New Message).
- A short description line.
- A trash can icon on the right.

### Expected behavior
- Tapping the trash can removes only that notification from the list.
- Tapping “Clear all” removes all notifications.

When there are no notifications:
- Show a message like: “You have no notifications.”
- “Clear all” should not be active.
- The user can go back from the Notification Center to the main screen.

## Final Result

![Notifications Screen](src/target/notifications.png)

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Install Dependencies

Before running the application, install the required dependencies:

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
