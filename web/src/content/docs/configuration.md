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
  - `bannerLogo`: `<string>` This is an url to a logo that will be used inside of the header, if this is left empty the file called `logo.png` found within `/src/images` will be leveraged instead.
}