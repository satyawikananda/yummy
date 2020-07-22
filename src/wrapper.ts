import { RANDOM_MEAL, CATEGORIES, FILTER_BY_CATEGORIES, MAIN_INGREDIENT } from "../const.ts"

export const getRandomMeal = (): Promise<Array<string>> => {
    return new Promise(async (resolve, reject) => {
        await fetch(RANDOM_MEAL)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            resolve(data)
         })
         .catch((err) => {
            reject(err)
         })
    })
}

export const getCategories = (): Promise<Array<string>> => {
    return new Promise(async (resolve, reject) => {
        await fetch(CATEGORIES)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            resolve(data)
         })
         .catch((err) => {
            reject(err)
         })
    })
}

export const getFilterByCat = (categories: string): Promise<Array<string>> => {
    return new Promise( async (resolve, reject) => {
        await fetch(`${FILTER_BY_CATEGORIES}${categories}`)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            resolve(data)
         })
         .catch((err) => {
            reject(err)
         })
    })
}

export const getMainIngerdient = (ingredient: string): Promise<Array<string>> => {
    return new Promise ( async (resolve, reject) => {
        await fetch(`${MAIN_INGREDIENT}${ingredient}`)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            resolve(data)
         })
         .catch((err) => {
            reject(err)
         })
    })
}