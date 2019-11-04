---
docType: site-documentation
---

## Concept

The Devhub can easily be configured to to represent your brand. In order to do this you just need to
editor the `/config/index.json` file. 

The `index.json` file is than leveraged by the `gatsby-config.js` file. It is merged into the default
siteMetadata configuration


## Definitions

  - `renderDocumentationInSite`: `<boolean>` defaults to __false__, this will render all the documentation found at `/src/content/docs` into the site, this will be accessible at `/_docs` :) 
  - `title`: `<string>`, this is the app title, it will show up in the header as well as the homepage masthead
  - `description`: `<string>` **Gatsby MD File**, this is the app generic description. It is a markdown file and should be located within `/src/content/application`. **The name of this markdown file is what should be denoted here.** 
  - `about`: `<string>` **Gatsby MD File**, this is the about page found at `/about` on the website. It is generated from a markdown file that should be located within `/src/content/application/`. **The name of this markdown file is what should be denoted here.**
  - `bannerLogo`: `<string>` This is either a valid url to a logo or file that has been dropped into `/src/images`
  - `bannerLogoSmall`: `<string>` This is a small variant of your logo (optional) that will be used on small screen sizes. The image will be scaled too __75px__ wide. If no small logo is put, the large logo will be used.

## Example Configuration

> /config/index.json
```
{
  "renderDocumentationInSite": true,
  "title": "ClimbingHub",
  "description": "One place to join gov and people in gov",
  "about": "about.md",
  "bannerLogo": "logo.png",
  "favicon": "font.ico"
}
```