const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});


const mealsWithReviews = meals.map(meal => {
  mealWithReviews = meal;
  mealWithReviews.reviews = reviews.filter(review => review.mealId === meal.id);
  return mealWithReviews;
});

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID,
// add these reviews to each meal in the form of an array.
// For meals that do not have any reviews, the "reviews" property will be an empty array.
app.get("/meals", async (request, response) => {
  response.json(mealsWithReviews);
});

// Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = mealsWithReviews.filter(mealWithReviews => mealWithReviews.price < 100);
  response.json(cheapMeals);
});

// Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", async (request, response) => {
  const largeMeals = mealsWithReviews.filter(mealWithReviews => mealWithReviews.maxNumberOfGuests > 5);
  response.json(largeMeals);
});

// Respond with the json for a random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  const randomMeal = mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)];
  response.json(randomMeal);
});

// Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

// Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  const randonReservation = reservations[Math.floor(Math.random() * reservations.length)]
  response.json(randonReservation);
});

module.exports = app;
