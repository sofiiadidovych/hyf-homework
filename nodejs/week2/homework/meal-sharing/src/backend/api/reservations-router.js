const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    try {
        response.send(reservations);
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (request, response) => {
    try {
        const validId = parseInt(request.params.id);
        if (validId > 0) {
            let reservationWithId;
            for (let i = 0; i < reservations.length; i++) {
                if (reservations[i].id === validId) {
                    reservationWithId = reservations[i];
                }
            }
            response.send(reservationWithId);
        } else {
            response.status(400).send('Invalid id');
        }
    }
    catch (error) {
        throw error;
    }
});

module.exports = router;