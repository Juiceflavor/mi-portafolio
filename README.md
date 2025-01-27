# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## 🌐 How to deploy?

1. Go to [FireBase](https://firebase.google.com/) and make and account

2. Go to [console](https://console.firebase.google.com/) and press **Create a project**
![create a project button](public/assets/images/markDown/image-2.png)

3. Choose a project name
![Name your project section](public/assets/images/markDown/image-3.png)

4. Once your project is created, go to the project path in your cmd and download firebase CLI
    ```
    npm install firebase
    ```
5. Run firebase login, it will send you to your browser to login into you google account
    ```
    npm login
    ```
6. Make sure to run a build of you project to create a **public**, **dis** or **out** folder with the project files to deploy
![Folder structure](public/assets/images/markDown/image-5.png)

7. Run firebase init
    ```
    firebase init hosting
    ```

    - Select **Use an existing project** and choose the project that you just create in firebase console
    ![Project chosing](public/assets/images/markDown/image-4.png)

    - When it ask for you **public** folder choose your build folder

8. Run firebase deploy
    ```
    firebase deploy
    ```

🎉 Congratulations! Your application is now deployed.