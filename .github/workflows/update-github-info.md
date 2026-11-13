---
name: update-github-info
description: Refreshes site/content/github-info.md from the GitHub Blog and Changelog, and opens a pull request for Mona to review.
on:
  schedule: daily
  workflow_dispatch:
permissions:
  contents: read
engine:
  id: copilot
  copilot-sdk: true
tools:
  edit:
  web-fetch:
network:
  allowed:
    - github.blog
    - github.com
safe-outputs:
  noop:
  create-pull-request:
    title-prefix: "[github-info] "
    labels: [content, automation]
    draft: false
    allowed-files:
      - site/content/github-info.md
---

# Update GitHub Info

You keep the GitHub info page current for Mona.

## Steps

1. Read `notes/mona-notes.md` and follow its editorial rules: short, practical summaries, and cite the source for every Blog or Changelog item.
2. Use web fetch to read `https://github.blog/latest/`.
3. Use web fetch to read `https://github.blog/changelog/`.
4. Update `site/content/github-info.md` with the most relevant recent items from those pages, following the structure and sections already in that file. Edit only this file.
5. If nothing in the file needs to change, call the `noop` safe output and stop.
6. Otherwise, create a pull request with the change. The pull request body should summarize what changed and list the source URLs. Mona reviews and merges it. Never push directly to `main`.
