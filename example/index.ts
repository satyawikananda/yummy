import {getRandomMeal, getCategories, getFilterByCat, getMainIngerdient} from "../mod.ts"

// Get data random meal
console.log(await getRandomMeal())

// Get data's of categories
console.log(await getCategories())

// Get data by filter of the specific category
console.log(await getFilterByCat("seafood"))

// Get data recipe 
console.log(await getMainIngerdient("chicken_breast"))