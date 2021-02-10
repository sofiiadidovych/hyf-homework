const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    if (request.query.maxPrice != undefined) {
      const maxPrice = parseInt(request.query.maxPrice);
      if (maxPrice > 0) {
        const cheapMeals = meals.filter(meal => meal.price <= maxPrice)
        response.send(cheapMeals);
      } else {
        response.status(400).send('Invalid maxPrice value');
      }
    } else if (request.query.title != undefined) {
      const title = request.query.title.toLowerCase();
      console.log(title)
      if (title != '') {
        const matchingMeal = meals.filter(meal => meal.title.toLowerCase().includes(title));
        response.send(matchingMeal);
      } else {
        response.status(400).send('Invalid title');
      }
    } else if (request.query.createdAfter != undefined) {
      const createdAfter = new Date(request.query.createdAfter);
      console.log(createdAfter);
      if (!isNaN(createdAfter)) {
        const mealsCreatedAfter = meals.filter(meal => new Date(meal.createdAt) > createdAfter);
        response.send(mealsCreatedAfter);
      } else {
        response.status(400).send('Invalid createdAfter value');
      }
    } else if (request.query.limit != undefined) {
      const limit = parseInt(request.query.limit);
      if (limit > 0) {
        const limitedMeals = meals.slice(0, limit)
        response.send(limitedMeals);
      } else {
        response.status(400).send('Invalid limit');
      }
    } else {
      response.send(meals);
    }

  } catch (error) {
    throw `${error}`;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const validId = parseInt(request.params.id);
    if (validId > 0) {
      let mealWithId;
      for (let i = 0; i < meals.length; i++) {
        if (meals[i].id === validId) {
          mealWithId = meals[i];
        }
      }
      response.send(mealWithId);
    } else {
      response.status(400).send('Invalid id');
    }
  } catch (error) {
    throw `${error}`;
  }
});

module.exports = router;