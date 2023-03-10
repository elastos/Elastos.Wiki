<br />
<p align="center">
<img src="website/static/img/elastos_banner_black_on_white.png" width="480">
</p>

# Elastos Wiki

This resource serves as the ultimate authority for accurate information about the Elastos ecosystem. It offers the latest technical details and comprehensive instructions to assist you in acquiring knowledge, creating, and maintaining projects on Elastos.

- Deployed, live documentation: https://elastos.dev

## Contributing

Elastos uses [Docusaurus](https://docusaurus.io) for documentation. Please refer to their documentation for details on major structural contributions to the documentation.

For simple content changes you have 2 options

- [Submit an issue](https://github.com/elastos/Elastos.Wiki/issues)
- [Submit a pull request](https://github.com/elastos/Elastos.Wiki/pulls) _(we prefer PRs of course)_

### The instant PR

This is the fastest way to submit content changes directly from the page where you notice a mistake.

1. Open any page in the docs on https://elastos.dev
2. Click the `[ Edit ]` button at the top right hand side of _every_ content page
3. Make your edits to the document that opens in GitHub by clicking the ✎ (pencil) icon
4. Submit a PR with your changes and comments for context

### The typical PR

This is the standard fork-branch-commit workflow for submitting pull requests to open source repositories

1. Fork this repo to your own GitHub account (or just clone it directly if you are currently a member of Elastos)

2. Open your editor to the _top level repo folder_ to view the directory structure as seen below

3. Move into the `/website` folder where you will run the following commands:

   - Make sure all the dependencies for the website are installed:

     ```sh
     # Install dependencies
     yarn
     ```

   - Run the local docs development server

     ```sh
     # Start the site
     yarn start
     ```

     _Expected Output_

     ```sh
     # Website with live reload is started
     LiveReload server started on port 35729
     Docusaurus server started on port 3000
     ```

     The website for docs will open your browser locally to port `3000`

4. Make changes to the docs

5. Observe those changes reflected in the local docs

6. Submit a pull request with your changes

## Directory Structure

Your project file structure should look something like this with a few key files and folders highlighted

```
├── LICENSE.txt
├── README.md             <-- the document you are reading right now
├── docs                  <-- all the content for the site is in this folder as markdown files
│   ├── start             <-- introductory content
│   ├── learn             <-- concepts and general education information
│   ├── develop           <-- instructions, code snippets, and resources for developers
│   ├── tutorials         <-- examples, guides and tutorial content
│   ├── nodes             <-- information relating to the operation of all types of compute nodes
│   ├── api               <-- reference information for apis of all kinds
│   ├── sdk               <-- software development kits usage instructions
└── website
    ├── build
    ├── src                      <-- theme and footer code
    ├── components               <-- reusable components
    ├── static                   <-- assets (mostly images)
    ├── package.json
    ├── sidebars.js              <-- used for changing left-hand-side page navigation
    ├── docusaurus.config.js     <-- used for general site configuration (including header links)
    └── test-links.sh            <-- always used to test links before submitting changes
```

## Found a broken link?

For broken links internal to the docs, please submit an issue or PR request as per above.

If you found a broken link from a Google search, please request to remove it from their index here: https://www.google.com/webmasters/tools/removals

### Check for broken links before pushing

Contributors, please consider checking for broken links executing the file `test-links.sh` before pushing to this repo so our CI doesn't fail, forcing someone (maybe you) to fix broken links before merging.

> _Here's one way to always make this happen automatically on every push:_
>
> Note that the file `test-links.sh` mimics the CI build script by checking all links then cleaning itself up.
>
> 1. Create a new githook in your local copy of the repo called `.git/hooks/pre-push` and copy the entire contents of the snippet below into that file.
> 2. Now every time you try to push to the repo, links will be checked for you automagically.
>
> ```bash
> #!/bin/sh
>
> set -e
>
> echo "Push detected in Elastos docs repo"
>
> if [[ $ELASTOS__CHECK_ALL_LINKS ]]
> # only stop and check all links if this is enabled
> # since it request npm installed (uses npx) and can generally be surprising to new contributors
> then
>     echo "Checking all links before push"
>
>     GIT_DIR=$(git rev-parse --show-toplevel)
>
>     cd "$GIT_DIR/website"
>
>     ./test-links.sh
> else
> # just let them know there's a way to do this before every push
>     echo "export ELASTOS__CHECK_ALL_LINKS=1 to check all links before pushing"
>     echo
> fi
> ```
