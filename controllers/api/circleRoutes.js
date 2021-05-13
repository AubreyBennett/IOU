const router = require('express').Router();
const { User, Circle } = require('../../models');

// The `/api/categories` endpoint
 // find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
 try {
    const circleData = await Circle.findAll(req.params.id, {
      include: [{ model:User}]
    });
    res.status(200).json(circleData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find one Circle by its `id` value
  // be sure to include its associated Products
router.get('/:id',async (req, res) => {
  try {
    const circleData = await Circle.findByPk(req.params.id, {
      include: [{ model:User}]
    });
    res.status(200).json(circleData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create a new Circle
router.post('/',async (req, res) => {
  try {
    const circleData = await Circle.create(
      {
      circle_name: req.body.circle_name 
    });
    res.status(200).json(circleData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
// update a Circle by its `id` value
router.put('/:id',async (req, res) => {
  try {
    const circleData = await Circle.update({
      circle_name:req.body.circle_name
    },
    {
      where: {
        id:req.params.id,
      }
      },
    );
    res.status(200).json(circleData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // delete a Circle by its `id` value
router.delete('/:id',async (req, res) => {
  try {
    const circleData = await Circle.destroy({
      where: {
       id:req.params.id
      },
    });
    res.status(200).json(circleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

