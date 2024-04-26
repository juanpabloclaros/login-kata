import { RecipesRepository } from "../Domain/RecipesRepository";

type Recipe = {
  id: String,
  ingredients: String[],
  name: String
}

export class RecipiesRepositoryHttp implements RecipesRepository {
  async findAll(): Promise<Recipe[]>{
    const response = await fetch("https://backend-login-placeholder.deno.dev/api/v2/recipes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    const data = await response.json()

    const recipes: Recipe[] = data.payload

    return recipes
  }

  async createRecipe(recipe: Recipe) {
    const response = await fetch("https://backend-login-placeholder.deno.dev/api/v2/recipes", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
        "api_token":"26df07b5b7318455b8ca09f923eaae6de6eb95530743eddcfdb541df9487df9d"
      },
    })

    return response.json()
  }

  async findById(id: String) {
    const response = await fetch(`https://backend-login-placeholder.deno.dev/api/v2/recipes/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "api_token":"26df07b5b7318455b8ca09f923eaae6de6eb95530743eddcfdb541df9487df9d"
      },
    })

    return response.json()
  }

  async deleteRecipe(id: String) {
    const response = await fetch(`https://backend-login-placeholder.deno.dev/api/v2/recipes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "api_token":"26df07b5b7318455b8ca09f923eaae6de6eb95530743eddcfdb541df9487df9d"
      },
    })

    return response.json()
  }
}