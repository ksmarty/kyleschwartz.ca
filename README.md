# Kyle Schwartz

> My personal website / resume

## Structure

- `src/routes/+page.svelte` is the root component and holds the structure of the entire project.
- The content is written in `src/lib/Content.yaml`.
- The certificates, resume, and cover letter (both webp and pdf) are stored in `static/certs`.

## Resume & Cover Letter PDFs

- [Resume](static/certs/resume.pdf)
- [Cover Letter](static/certs/cover-letter.pdf)
- [Bundle](static/certs/bundle.pdf)

## Dev Notes

- Favicons were generated via https://realfavicongenerator.net/.
- All of the styles are from [daisyUI](https://daisyui.com).
- Resume & cover letter generation is run as a pre-commit hook (`.lefthook`)
  - Install lefthook with `go install github.com/evilmartians/lefthook@latest`
  - Install playwright with `npx playwright install`
