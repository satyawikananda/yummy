import {getRandomMeal, getCategories, getFilterByCat, getMainIngerdient} from "./src/wrapper.ts"

console.log(await getRandomMeal())
console.log(await getCategories())
console.log(await getFilterByCat("seafood"))
console.log(await getMainIngerdient("chicken_breast"))