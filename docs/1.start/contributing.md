---
title: Contributing
---

The wiki was started and is maintained by community contributors and product team leads. It is an open source project and aims
to be the most extensive resource of knowledge on Elastos and the Elastos ecosystem. The majority of material currently focuses on Elastos directly but it is not opposed to including informational material for community projects and initiatives.

:::caution Marketing material

Please do not try to pull request any marketing material as this will be rejected.

:::

Nonetheless, pull requests, discussions, and contributions from the community are encouraged. Active
community members who demonstrate a record of good contributions may be given write access to the
repository.

Otherwise, product leads hold the administrative position and final say on the content that is
included.

## How to Contribute

You can contribute to the wiki on the
[elastos/Elastos.Wiki ](https://github.com/elastos/Elastos.Wiki) GitHub repository. Every page is a
[MarkDown](https://guides.github.com/features/mastering-markdown/) file, which is an easy to learn
syntax extension to plain text that makes creating links, rendering images, and nice-looking
formatting simple.

Elastos uses [Docusaurus](https://docusaurus.io) for documentation. Please refer to their documentation for details on major structural contributions to the documentation.

For simple content changes you have 2 options

- [Submit an issue](https://github.com/elastos/Elastos.Wiki/issues)
- [Submit a pull request](https://github.com/elastos/Elastos.Wiki/pulls) _(we prefer PRs of course)_

### The instant PR

This is the fastest way to submit content changes directly from the page where you notice a mistake.

1. Open any page in the docs
2. Click the `[ Edit ]` button at the bottom left hand side of _every_ content page
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

## Guideline and Rules for Contributing

There are a few basic ground-rules for contributors:

1. **No `--force` pushes** or modifying the Git history in any way.
2. Pull requests are preferred to issues, especially for small changes such as typos. Issues should
   be used for generic or broad-based changes or missing content. Suggestions and requests are encouraged.
3. Only use **non-master branches**.
4. **Significant modifications**, even by contributors, ought to be subject to a **pull request** to
   solicit feedback from other contributors.
5. Pull requests to solicit feedback are _encouraged_ for any other non-trivial contribution but
   left to the discretion of the contributor.
6. Contributors should attempt to adhere to the prevailing `MarkDown` style, language, and layout.
7. Correct grammar should be used at all times. Pull requests with typos will not be merged until
   fixed.
8. Care should be taken to remain as objective and informative as possible. There should be no
   editorializing, and external bias should not be present.

This document is based on the
[Level contribution guidelines](https://github.com/Level/community/blob/master/CONTRIBUTING.md).

---

## Helping With Translations

:::caution
Currently the Wiki is being populated and updated, during this time we will not be prioritizing translations.
:::

The Wiki's default language is _English_, though, there is a desire to translate the Wiki
in as many languages as possible. Another way you can contribute is by helping with translations.

Translation contributions can be made through [crowdin](https://crowdin.com/project/elastos-wiki). There, you will see the progress of translating the docs associated with the Wiki in many different languages.
