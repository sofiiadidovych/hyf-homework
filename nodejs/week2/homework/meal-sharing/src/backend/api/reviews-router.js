const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
    try {
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (request, response) => {
    try {
        const validId = parseInt(request.params.id);
        if (validId > 0) {
            let reviewWithId;
            for (let i = 0; i < reviews.length; i++) {
                if (reviews[i].id === validId) {
                    reviewWithId = meals[i];
                }
            }
            response.send(reviewWithId);
        } else {
            response.status(400).send('Invalid id');
        }
    }
    catch (error) {
        throw error;
    }
});

module.exports = router;