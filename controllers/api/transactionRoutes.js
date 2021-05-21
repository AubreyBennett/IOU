const router = require('express').Router();
const { User, Transaction, Circle, UserCircle } = require('../../models');

// The `/api/transactions` endpoint
// find all transactions

router.get('/', async (req, res) => {
    try {
        const transactionData = await Transaction.findAll(req.params.id, {
            include: [{
                model: User,
                // exclude: [password]
            },
            { model: Circle }
            ]
        });
        res.status(200).json(transactionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Find Transactions of specific Circle
router.get("/circle/:id", async (req, res) => {
    try {
        const transactionData = await Transaction.findAll({
            include: {
                model: UserCircle,
                where: {
                    circleId: req.params.id
                }
            },
        });
        res.status(200).json(transactionData)
    } catch (error) {
        res.status(500).json(err);
    }
})
// Find transactions of a User

router.get("/user/:id", async (req, res) => {
    try {
        const transactionData = await Transaction.findAll({
            include: {
                model: UserCircle,
                where: {
                    userId: req.params.id
                }
            },
        });
        res.status(200).json(transactionData)
    } catch (error) {
        res.status(500).json(err);
    }
})

// find one transaction by its `id` value
router.get('/:id', async (req, res) => {
    try {
        const transactionData = await Transaction.findByPk(req.params.id, {
            include: [{
                model: User,
                exclude: [password]
            },
            { model: Circle }
            ]
        });
        res.status(200).json(transactionData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// create a new transaction
router.post('/', async (req, res) => {
    try {
        const transactionData = await Transaction.create(
            {
                description: req.body.description,
                value: req.body.value
            });
        res.status(200).json(transactionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a transaction by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const transactionData = await Transaction.update({
            description: req.body.description,
            value: req.body.value
        },
            {
                where: {
                    id: req.params.id,
                }
            },
        );
        res.status(200).json(transactionData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// delete a transaction by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const transactionData = await Transaction.destroy({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(transactionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
