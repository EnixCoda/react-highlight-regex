# React highlight regex

Highlight texts with regex!

## Example and Usage

[Codesandbox Demo](https://codesandbox.io/s/react-highlight-regex-demo-mj1jm)

```bash
$ yarn add react-highlight-regex
```

```jsx
import * as React from 'react';
import { Highlight } from 'react-highlight-regex';

function BasicUsage() {
  return (
    <Highlight match={/a|t/} text="An apple a day keeps the doctor away." />
  );
}
```

## Props

| name               | type             | description                                      |
| ------------------ | ---------------- | ------------------------------------------------ |
| text               | string           | The text to be highlighted.                      |
| match              | RegExp           | Regular expression for content to be highlighted |
| highlightClassname | string(optional) | Classname for highlighted parts                  |
