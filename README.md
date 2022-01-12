# Kyle Schwartz

> My personal website / resume

## Structure

-   All of the content is stored in `/src`.
-   `App.svelte` is the root component and holds the structure of the entire project.
-   The content is written in `Content.yaml` and is parsed as an ES Module via my [Snowpack plugin](https://github.com/ksmarty/snowpack-plugin-yaml).
-   The certificates, resume, and cover letter (both png and pdf) are stored in `/public/static`.

## Resume & Cover Letter PDFs

-   [Resume](public/static/resume.pdf)
-   [Cover Letter](public/static/cover-letter.pdf)
-   [Bundle](public/static/bundle.pdf)

## Dev Notes

-   Don't try and migrate to Yarn Berry. There are still issues and the project is currently incompatible.
-   Favicons were generated via https://realfavicongenerator.net/.
-   All of the styles are from [daisyUI](https://daisyui.com).
-   Resume generation needs to happen client side. Before committing any changes made to `Content.yaml`, run the following:
    -   `yarn`
    -   `npx playwright install`
    -   `yarn run pdf`
