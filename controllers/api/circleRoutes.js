const router = require('express').Router();
const { User, Circle, UserCircle, } = require('../../models');


router.get('/', async (req, res) => {
 try {
    const circleData = await Circle.findAll(req.params.id, {
      include: [{ model:User, attributes: { exclude: ['password','usercircle'] }}]
    });
    res.status(200).json(circleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find all circles by specific user

router.get("/user/:id", async (req, res) => {
  try {
     const userData = await User.findAll({
       where: {
        id: req.params.id
       },
       include: {
         model: Circle,
         through: UserCircle
       },
       attributes: {
         exclude: ["password"]
       }
     });
     const circlesData = userData[0].dataValues.circles;

     const circlesNames = circlesData.map((circle) => {
       return {
         id: circle.id,
         name: circle.circle_name
       }
     })
     res.status(200).json(circlesNames);
   } catch (err) {
     res.status(500).json(err);
   }
 })


// find one Circle by its `id` value
  // be sure to include its associated Products
router.get('/:id',async (req, res) => {
  try {
    const circleData = await Circle.findByPk(req.params.id, {
      include: [{ model:User, attributes: { exclude: ['password','usercircle'] }}]
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

