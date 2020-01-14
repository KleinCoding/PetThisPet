async function allRatings(req, res) {
    const db = req.app.get("db");
    const ratings = await db.ratings.getAllRatings();
  
    res.status(200).json(ratings)
  }
  
  async function addRating(req, res) {
    const post_id = +req.params.post_id
    const user_id = req.session.user.user_id;
    const {rating} = req.body;
  
    const db = req.app.get("db");
  
    const addedRating = await db.ratings.addRating([post_id, user_id, rating]);
    console.log(addedRating)
    res.status(200).json(addedRating);
  }
  
  async function editRating(req, res) {
    const { rating } = req.body;
    const post_id = +req.params.post_id;
    const user_id = req.session.user.user_id;
  
    const db = req.app.get("db");
  
    const editedRating = await db.ratings.editRating([
      rating,
      post_id,
      user_id,
    ])
    console.log(editedRating)
    res.status(200).json(editedRating);
  }
  
  async function allRatingsByUserId(req, res) {
    const user_id= req.session.user.user_id
    const db = req.app.get("db");
  
    const ratings = await db.ratings.getAllRatingsForUser(user_id)
  console.log(user_id)
    res.status(200).json(ratings);
  }
  

  
  module.exports = {
    allRatings,
    addRating,
    editRating,
    allRatingsByUserId,
  }