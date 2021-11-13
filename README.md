# altruistiq:vue-sass
Scss compiler plugin for altruistiq:vue3 maintained by Altruistiq. Uses [dart-sass](https://github.com/sass/dart-sass) for performance and [node-sass-magic-importer](https://www.npmjs.com/package/node-sass-magic-importer) to resolve `@imports`, enabling you to be creative with imports.

## Installation

```sh
meteor add altruistiq:vue-sass
```

## Usages
```html
<style lang="scss">
  @import './styles/colors';

  .my-class {
    color: $red;
  }
</style>
```

supports scoped styling as well

```html
<style lang="scss" scope>
  @import './styles/colors';

  .my-class {
    color: $red;
  }
</style>
```

## Using imports
Imports are resolved from the root folder, e.g.<br/>
`@import './some/path/to/cssfile.css';`

 You can also import from `node_modules` using a tilde, e.g.<br/>
 `@import '~some/path/to/a/node/package/cssfile.css';`


## Notes
This package only compiles scss inside of Vue components. If you use global stylesheets outside of Vue3 components we recommend installing [fourseven:scss](https://github.com/Meteor-Community-Packages/meteor-scss) as well.

This package does not support .sass files