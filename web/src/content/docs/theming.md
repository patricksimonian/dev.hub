---
docType: site-documentation
---

## Concept

Devhub's color palette is configurable. To configure the devhub palette edit the __theme file__ found
at `/config/theme.json`. 

The theme is used to configure the generic look of the site as well as how each of the resource objects render. 

The `theme.json` file is __imported__ into `theme.js` which is leveraged by the npm library __`styled-components`__.


## Definitions

- `fgPrimary`: 'Primary Foreground' _this is used for things that are in the direct foreground such as the color of **headers and footers**_
- `fgSecondary`: 'Secondary Foreground' _used for things in the direct foreground that are not as __important__ as the primary such as **navigation bars**_
- `fgAccent`: 'Foreground Accent' _this is used for border colors, box shadow colors and outlines as needed_

- `bgPrimary`: 'Primary Background' the main background color
- `bgSecondary`: if there is an additional container that requires a different background color for accessibility this color will be used
- `bgAccent`: if the background requires an accent this will be used

- `primary`: color of primary call to action **buttons**
- `secondary`: color of secondary call to action **buttons**
- `disabled`: color of disabled **buttons**
