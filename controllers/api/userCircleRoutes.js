const router = require('express').Router();
const { User, UserCircle } = require('../../models');

// Add users to circle
router.post('/addUsers', async ({body}, res) => {
  try {
    const {circleID, users} = body
    users.map(async (user) => {
      const userCircleData = await UserCircle.create(
        {
        circle_id: circleID,
        user_id: user
      });
    })
    res.status(200).json({message: "Success!"})
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})


router.get('/', async (req, res) => {
 try {
    const userCircleData = await UserCircle.findAll(req.params.id, {
      include: [{ model:User, exclude: [password]}]
    });
    res.status(200).json(userCircleData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find one userCircle by its `id` value
  // be sure to include its associated Products
router.get('/:id',async (req, res) => {
  try {
    const userCircleData = await UserCircle.findByPk(req.params.id, {
      include: [{ model:User, exclude: [password]}]
    });
    res.status(200).json(userCircleData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create a new userCircle
router.post('/',async (req, res) => {
  console.log(req.body);
  try {
    const userCircleData = await UserCircle.create(
      {
      circle_id: req.body.circle_id, 
      user_id: req.body.user_id
    });
    res.status(200).json(userCircleData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  

router.delete('/:id',async (req, res) => {
  try {
    const userCircleData = await UserCircle.destroy({
      where: {
       id:req.params.id
      },
    });
    res.status(200).json(userCircleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

