# Yummy :shallow_pan_of_food: :pizza: 🦕

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/satyawikananda/yummy/blob/master/LICENSE)

A simple wrapper [themealdb.com](https://themealdb.com) API for Deno 🦕

## How to use? 🤔

```javascript

import {
    getRandomMeal, 
    getCategories, 
    getFilterByCat, 
    getMainIngerdient,
    getListArea,
    getListCategories,
    getListIngredient
} from "https://raw.githubusercontent.com/satyawikananda/yummy/master/mod.ts"

// Get data random meal
console.log(await getRandomMeal())

// Get data's of categories
console.log(await getCategories())

// Get data by filter of the specific category
console.log(await getFilterByCat("seafood"))

// Get data recipe 
console.log(await getMainIngerdient("chicken_breast"))

// Get data list available area
console.log(await getListArea())

// Get data list available category
console.log(await getListCategories())

// Get  data list available ingredient
console.log(await getListIngredient())

```

How to run it ? 🤔

```
deno run --allow-net ./example/index.ts
```

How to test it ? 🤔

```
deno test --allow-net ./test/test.ts
```

## Author
[@Satyawikananda](https://instagram.com/satyawikananda) ©2020
