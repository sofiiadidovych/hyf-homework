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
        const id = parseInt(request.params.id);
        if (id > 0) {
            let reservationWithId;
            for (let i = 0; i < reservations.length; i++) {
                if (reservations[i].id === id) {
                    reservationWithId = reservations[i];
                    break;
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