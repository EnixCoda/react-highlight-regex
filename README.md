# React highlight regex

Highlight texts with regex!

## Example and Usage

```bash
$ yarn add react-highlight-regex
```

[Codesandbox Playground](https://codesandbox.io/s/react-highlight-regex-demo-mj1jm)

![](https://user-images.githubusercontent.com/7480839/103119868-40c87700-46b0-11eb-9fae-c8c56387cd64.png)

## Props

| name               | type             | description                                      |
| ------------------ | ---------------- | ------------------------------------------------ |
| text               | string           | The text to be highlighted.                      |
| match              | RegExp           | Regular expression for content to be highlighted |
| highlightClassname | string(optional) | Classname for highlighted parts                  |

---
Note: This packages needs `String.prototype.matchAll` to work properly. Check out availability on [caniuse](https://caniuse.com/#feat=mdn-api_cache_matchall) before use.
