import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearResults = () => {
  elements.searchReasultList.innerHTML = "";
};
// Rice and egg

const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, currentItem) => {
      if (acc + currentItem.length <= limit) {
        newTitle.push(currentItem);
      }
      return acc + currentItem.length;
    }, 0);
    // return the result
    return `${newTitle.join(" ")}...`;
  }
  return title;
};

const renderRecipe = recipe => {
  const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(
                      recipe.title
                    )}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
  elements.searchReasultList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
