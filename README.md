```
 ________   ______   _______    ______         _______    ______    ______    ______  
/        | /      \ /       \  /      \       /       \  /      \  /      \  /      \ 
$$$$$$$$/ /$$$$$$  |$$$$$$$  |/$$$$$$  |      $$$$$$$  |/$$$$$$  |/$$$$$$  |/$$$$$$  |
    /$$/  $$ |  $$ |$$ |__$$ |$$ |__$$ |      $$ |  $$ |$$ |  $$ |$$ |  $$/ $$ \__$$/ 
   /$$/   $$ |  $$ |$$    $$< $$    $$ |      $$ |  $$ |$$ |  $$ |$$ |      $$      \ 
  /$$/    $$ |  $$ |$$$$$$$  |$$$$$$$$ |      $$ |  $$ |$$ |  $$ |$$ |   __  $$$$$$  |
 /$$/____ $$ \__$$ |$$ |  $$ |$$ |  $$ |      $$ |__$$ |$$ \__$$ |$$ \__/  |/  \__$$ |
/$$      |$$    $$/ $$ |  $$ |$$ |  $$ |      $$    $$/ $$    $$/ $$    $$/ $$    $$/ 
$$$$$$$$/  $$$$$$/  $$/   $$/ $$/   $$/       $$$$$$$/   $$$$$$/   $$$$$$/   $$$$$$/ 
```

# Contribution Guidelines
Thanks for giving a little extra love to our docs site! Below are some basic guidelines to follow to get your PR merged :)

### Creating a Pull Request
1. Fork the repository.
2. On your copy of the repo, create a new branch. Be sure that your branch contains the most recent changes from the main branch.
3. Make any necessary changes, then commit and push them to your fork.
4. Go to the main docs repo in your browser and open a new pull request.
5. Title the pull request to describe your contribution, and include a short summary of the changes. If an open issue is associated with your changes, tag the issue by referencing the issue number ( i.e., #123) in the pull request summary.
6. If there is a relevant tag like "typo", "bug", or "enhancement", include the tag in the PR.

### A standard flow to set up a fork
Set up your fork with the following terminal commands, or an alteration of them to suit your enviornment:

```cd zora-docs
git remote add upstream https://github.com/ourzora/zora-docs.git
git fetch upstream
git pull --rebase upstream main
git checkout -b "<your-name>/my-contribution"
```

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

First, create a `.env` file with these variables. For ease, you can copy the contents of `.env.example` into that file:

```console
cp .env.example .env
```

Next, run this command:

```console
yarn start
```

This starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
