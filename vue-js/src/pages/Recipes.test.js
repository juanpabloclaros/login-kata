import Recipes from "./Recipes.vue"
import { describe, expect, it, vi } from "vitest";
import {render, screen, waitFor} from "@testing-library/vue"
import {userEvent} from "@testing-library/user-event"
import { RecipiesRepositoryHttp } from "../Infrastructure/RecipesRepositoryHttp";

describe("Recipe", () => {
  it("saves recipes", async () => {
    const recipeRepository = new RecipiesRepositoryHttp()
    // const response = await recipeRepository.deleteRecipe(999)
    const recipe = {
      id: "999",
      name: "Pizza",
      ingredients: ["Jamón"]
    }

    const response = await recipeRepository.createRecipe(recipe)
    
    expect(response.payload).toMatchObject(recipe)
  })

  it("deletes recipes", async () => {
    const recipeRepository = new RecipiesRepositoryHttp()
    
    const recipe = {
      id: "888",
      name: "Hamburguesa",
      ingredients: ["Jamón"]
    }

    await recipeRepository.createRecipe(recipe)
    const response = await recipeRepository.deleteRecipe(888)
    
    expect(response.payload).toMatchObject(recipe)
  })

  it("gets recipes by id", async () => {
    const recipeRepository = new RecipiesRepositoryHttp()
    
    const recipe = {
      id: "777",
      name: "Ravioli",
      ingredients: ["carne","pasta"]
    }

    await recipeRepository.createRecipe(recipe)
    const response = await recipeRepository.deleteRecipe(777)
    
    expect(response.payload).toMatchObject(recipe)
  })

  // it("find all recipes", async () => {
  //   const user = userEvent.setup()
  //   render(Recipes)
  //   const recipeRepository = {
  //     findAll: vi.fn()
  //   }

  //   await waitFor(() => {
  //     expect(findAll).toHaveBeenCalled()
  //   }, {timeout: 5000})
  // })
})