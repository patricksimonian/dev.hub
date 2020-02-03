# Theming

Dev.hub allows you to embed your own custom theme. The theme is integrated into the app via `gatsby-plugin-theme-ui`.

## Rational

The idea behind allowing a custom theme makes Dev.Hub usable by a wider audience :)

## Adding Your Theme

The theme file can be found at `web/config/theme/index.json`. The file in the repository can/should be replaced
with your mounted theme file in deployment.



## What It Looks Like
```json
{
  "colors": {
    "fgMain": "#036",
    "fgSecondary": "lightblue",
    "fgAccent": "#FCBA19",
    "bgMain": "white",
    "bgSecondary": "grey",
    "bgAccent": "grey",
    "primary": "#036",
    "secondary": "#dfa",
    "tertiary": "#ff83ad",
    "disabled": "darkgrey"
  },
  "objects": {
    "journey": {
      "color": "#3828dd"
    },
    "topic": {
      "color": "#3782a4"
    },
    "documentation": {
      "color": "#881ade"
    },
    "component": {
      "color": "#83761d"
    },
    "repository": {
      "color": "#fe889a"
    },
    "event": {
      "color": "#8892aa"
    },
    "tool": {
      "color": "#8817a3"
    }
  }
}

```

## Properties

- Colors
  Colors are main theme elements that are visible on headers, callouts, buttons etc. 
  - `fgMain`: Foreground Main
      > TODO add img example
  - `fgSecondary`: Foreground Secondary
      > TODO add img example
  - `fgAccent`: Foreground Accent
      > TODO add img example
  - `bgMain`: Background Main
      > TODO add img example
  - `bgSecondary`: Background Secondary
      > TODO add img example
  - `bgAccent`: Background Accent
      > TODO add img example
  - `primary`: Used for primary call to actions
      > TODO add img example
  - `secondary`: In all conditions where primary is not appropriate
      > TODO add img example
  - `tertiary`: TODO
      > TODO add img example
  - `disabled`: Used to show users an action is not possible
      > TODO add img example
- Objects
  Objects are the main level organizational elements in the app. They have the possibility to be themed
  separately.

## Accessing The Theme

The theme is accessible primarily by utilizing theme within a `rebass` component. Alternately, you may
access the theme by querying `ThemeJson` in graphql.