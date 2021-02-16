const express = require("express");
const app = express();

// app.get("/calculator/add", (req, res) => {
//     const firstParam = parseInt(req.query.firstParam);
//     const secondParam = req.query.secondParam;
//     let sum = firstParam;
//     if (Array.isArray(req.query.secondParam)) {
//         for (let i = 0; i < secondParam.length; i++) {
//             sum += parseInt(secondParam[i]);
//         }
//     } else {
//         sum += parseInt(secondParam)
//     }
//     res.json({ sum: sum })
// });

app.get("/calculator/add", (req, res) => {
    addition();
    res.json({ sum: sum })
})

function addition(req, res) {
    const firstParam = parseInt(req.query.firstParam);
    const secondParam = req.query.secondParam;
    let sum = firstParam;
    if (Array.isArray(req.query.secondParam)) {
        for (let i = 0; i < secondParam.length; i++) {
            sum += parseInt(secondParam[i]);
        }
    } else {
        sum += parseInt(secondParam)
    }
    return sum;
}

// app.get("/calculator/substract", (req, res) => {
//     const firstParam = parseInt(req.query.firstParam);
//     const secondParam = req.query.secondParam;
//     let sum = 0;
//     let difference = 0;
//     if (Array.isArray(req.query.secondParam)) {
//         for (let i = 0; i < secondParam.length; i++) {
//             sum += parseInt(secondParam[i]);
//         }
//         difference = firstParam - sum;
//     } else {
//         difference = firstParam - parseInt(secondParam);
//     }
//     res.json({ difference: difference })
// });

// app.get("/calculator/multiply", (req, res) => {
//     const firstParam = parseInt(req.query.firstParam);
//     const secondParam = req.query.secondParam;
//     let productOfSecondParams = 1;
//     let product = 1;
//     if (Array.isArray(req.query.secondParam)) {
//         for (let i = 0; i < secondParam.length; i++) {
//             productOfSecondParams *= parseInt(secondParam[i]);
//         }
//         product = firstParam * productOfSecondParams;
//     } else {
//         product = firstParam * parseInt(secondParam);
//     }
//     res.json({ product: product })
// });

// app.get("/calculator/divide", (req, res) => {
//     const firstParam = parseInt(req.query.firstParam);
//     const secondParam = req.query.secondParam;
//     let productOfSecondParams = 1;
//     let dividend = 1;
//     if (Array.isArray(req.query.secondParam)) {
//         for (let i = 0; i < secondParam.length; i++) {
//             productOfSecondParams *= parseInt(secondParam[i]);
//         }
//         dividend = firstParam / productOfSecondParams;
//     } else {
//         dividend = firstParam / parseInt(secondParam);
//     }
//     res.json({ dividend: dividend })
// });

// app.post("/calculator/add", (req, res) => {
//     const firstParam = parseInt(req.query.firstParam);
//     const secondParam = req.query.secondParam;
//     let sum = firstParam;
//     if (Array.isArray(req.query.secondParam)) {
//         for (let i = 0; i < secondParam.length; i++) {
//             sum += parseInt(secondParam[i]);
//         }
//     } else {
//         sum += parseInt(secondParam)
//     }
//     res.json({ sum: sum })
// });

// app.post("/calculator/substract", (req, res) => {
//     const firstParam = parseInt(req.query.firstParam);
//     const secondParam = req.query.secondParam;
//     let sum = 0;
//     let difference = 0;
//     if (Array.isArray(req.query.secondParam)) {
//         for (let i = 0; i < secondParam.length; i++) {
//             sum += parseInt(secondParam[i]);
//         }
//         difference = firstParam - sum;
//     } else {
//         difference = firstParam - parseInt(secondParam);
//     }
//     res.json({ difference: difference })
// });

// app.post("/calculator/multiply", (req, res) => {
//     const firstParam = parseInt(req.query.firstParam);
//     const secondParam = req.query.secondParam;
//     let productOfSecondParams = 1;
//     let product = 1;
//     if (Array.isArray(req.query.secondParam)) {
//         for (let i = 0; i < secondParam.length; i++) {
//             productOfSecondParams *= parseInt(secondParam[i]);
//         }
//         product = firstParam * productOfSecondParams;
//     } else {
//         product = firstParam * parseInt(secondParam);
//     }
//     res.json({ product: product })
// })

// app.post("/calculator/divide", (req, res) => {
// const firstParam = parseInt(req.query.firstParam);
//     const secondParam = req.query.secondParam;
//     let productOfSecondParams = 1;
//     let dividend = 1;
//     if (Array.isArray(req.query.secondParam)) {
//         for (let i = 0; i < secondParam.length; i++) {
//             productOfSecondParams *= parseInt(secondParam[i]);
//         }
//         dividend = firstParam / productOfSecondParams;
//     } else {
//         dividend = firstParam / parseInt(secondParam);
//     }
//     res.json({ dividend: dividend })
// });

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
