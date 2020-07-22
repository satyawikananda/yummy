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