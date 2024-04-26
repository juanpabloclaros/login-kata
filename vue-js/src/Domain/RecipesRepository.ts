type Recipe = {
  id: String,
  ingredients: String[],
  name: String
}

export class RecipesRepository {
  findAll: () => Promise<Recipe[]>
  createRecipe: (recipe: Recipe) => Promise<String>
  findById: (id: String) => Promise<String>
  deleteRecipe: (id: String) => Promise<String>
}