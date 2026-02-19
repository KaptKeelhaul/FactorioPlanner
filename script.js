fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(recipe => {
      const ingredientsStr = Object.entries(recipe.ingredients)
        .map(([ingredient, amount]) => `${amount} x ${ingredient}`)
        .join(', ');

      console.log(`${recipe.name} takes ${recipe.time} seconds to craft and requires: ${ingredientsStr}`);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
