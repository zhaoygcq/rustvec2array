### a tool to transfor rust Vec to Array
```js
[
  { Position: { start: 0, end: 140 } },
  { String: '{  ' },
]

==========>

[
  { start: 0, end: 140 },
  '{  ',
]
```

### Usage
```js
import transform from "rustvec2array";

tranform(params)
```