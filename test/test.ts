import {
    getRandomMeal, 
    getCategories, 
    getFilterByCat, 
    getMainIngerdient
} from "../mod.ts"

import {equal} from "https://deno.land/std/testing/asserts.ts"

Deno.test("getRandomMeal", async () => {
    const getDataRandomMeal:any = await getRandomMeal()
    equal(Array.isArray(getDataRandomMeal), true)
})

Deno.test("getCategories", async () => {
    const getDataCategories:any = await getCategories()
    equal(Array.isArray(getDataCategories), true)
})

Deno.test("getFilterCat", async () => {
    const getFilterCat:any = await getFilterByCat("seafood")
    equal(Array.isArray(getFilterCat), true)
})

Deno.test("getMainIngerdient", async () => {
    const getIngredient:any = await getMainIngerdient("chicken_breast")
    equal(Array.isArray(getIngredient), true)
})