![](https://img.shields.io/badge/Microverse-blueviolet)

# Potfolio Setup and Mobile First 

> This is the first page of the Porfolio template. The design are given by the 
> Microverse that I have made it 


## Built With

- HTML, CSS
- Linters for checking error
- Technologies used



## Getting Started

This project is about template of portfolio which is given by the microverse. We add a media-query for desktop version. That we use mobile first approach. Media query is used for make reposive 
In other to run this you need a local copy. Fist you need to setup a Linters adn the follow the coomad and the end I will give a 


### Prerequisites
* Githflow
* Basic HTML and CSS

### Setup of Project 

1. Link
git clone 

2. To folder
    cd Portfolio-Desktop



### Setup For Lintrc
  *Webhint
 NOTE: If you are running on Windows, you need to initialize npm to create package.json file.
```bash
npm init -y
```

1. Run 
```bash
npm install --save-dev hint@7.x
```
2. create a file in the root directory of your project named ```.hintrc``` and copy the following to it
```json
  {
  "connector": {
    "name": "local",
    "options": {
      "pattern": ["**", "!.git/**", "!node_modules/**"]
    }
  },
  "extends": ["development"],
  "formatters": ["stylish"],
  "hints": [
    "button-type",
    "disown-opener",
    "html-checker",
    "meta-charset-utf-8",
    "meta-viewport",
    "no-inline-styles:error"
  ]
}
```
3. Run 
```bash
npx hint .
```
4. Fix validation errors.

### Stylelint
1. Run 
```bash
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
``` 
2. create a file in the root directory of your project named ```.stylelintrc.json``` and copy the following to it

```json
{
  "extends": ["stylelint-config-standard"],
  "plugins": ["stylelint-scss", "stylelint-csstree-validator"],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen"
        ]
      }
    ]
  },
  "csstree/validator": true,
  "ignoreFiles": ["build/**", "dist/**", "**/reset*.css", "**/bootstrap*.css"]
}
```
3. Run 
```bash
npx stylelint "**/*.{css,scss}"
``` 
  
## Checking 
This is the screenshot that all the thing is okay

   https://user-images.githubusercontent.com/80938128/200326153-7d174ec9-e7ee-40c1-bacb-1262f2073ff5.png

## Live 
Click here

 https://hassaanjbaig-code.github.io/Hassaanbaig-github.io/

## Authors

👤 **Author1**

- GitHub: [@hassaanjbaig-code](https://github.com/Hassaanjbaig-code)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
Thanks for MIcroverse made this happen 
Hope I will apprved 

## 📝 License

This project is [MIT](./LICENSE) licensed.
