# Kyle Schwartz

> My personal website / resume

## Structure

-   All of the content is stored in `/src`.
-   `App.svelte` is the root component and holds the structure of the entire project.
-   The content is written in `Content.yaml` and is parsed as an ES Module via my [Snowpack plugin](https://github.com/ksmarty/snowpack-plugin-yaml).
-   The certificates (both png and pdf) are stored in `/public/static`.

## APIs

### `/api/resume`

Go here to download a PDF of my resume.

### `/api/cover-letter`

Go here to download a PDF of a my cover letter

## Dev Notes

-   Don't try and migrate to Yarn Berry. There are still issues and the project is currently incompatible.
-   Favicons were generated via https://realfavicongenerator.net/.
-   All of the styles are from [daisyUI](https://daisyui.com).
-   [Resuminator](https://www.resuminator.in) was used to create my resume.
