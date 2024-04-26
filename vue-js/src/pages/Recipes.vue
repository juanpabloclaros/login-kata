<template>
  <main class="recipes-page">
    <Title>Recipes</Title>
    <div class="recipes">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.id"
        :name="recipe.name"
        :ingredients="recipe.ingredients"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Title from "../components/Title.vue";
import RecipeCard from "../components/RecipeCard.vue";
import {RecipiesRepositoryHttp} from "../Infrastructure/RecipesRepositoryHttp"

const recipes = ref([]);
const recipeRepository = new RecipiesRepositoryHttp()

onMounted(() => {
  recipes.value = recipeRepository.findAll()
  
});
</script>

<style scoped>
.recipes-page {
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
}
</style>
