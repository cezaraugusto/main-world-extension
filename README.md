# main-world-extension 

> An extension running in the JavaScript main world.

## Test

```
yarn install
yarn start
```

This extension throws an exception when running content_scripts in the main world.



```json
{
  "manifest_version": 3,
  "version": "1.0",
  "name": "main-world-extension",
  "description": "An extension running in the main world.",
  "background": {
    "service_worker": "./dist/background.js"
  },
  "content_scripts": [
    {
      "world": "MAIN",
      "matches": [
        "https://extension.js.org/*"
      ],
      "js": [
        "./dist/content.js"
      ]
    }
  ]
}
```

