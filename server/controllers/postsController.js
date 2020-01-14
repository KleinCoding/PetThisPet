async function allPosts(req, res) {
  const db = req.app.get("db");
  const posts = await db.posts.getAllPosts();

  res.status(200).json(posts)
}

async function addPost(req, res) {
  const { category_name, pet_name, img_url, img_rating} = req.body;
  const user_id = req.session.user.user_id;
  // const img_rating = 0;

  const db = req.app.get("db");

  const addedPost = await db.posts.addPost([category_name, pet_name, img_url, user_id, img_rating]);
  console.log(addedPost)
  res.status(200).json(addedPost);
}

async function editPost(req, res) {
  const { pet_name, img_url } = req.body;
  const post_id = +req.params.post_id;
  const user_id = req.session.user.user_id;

  const db = req.app.get("db");

  const editedPost = await db.posts.editPost([
    pet_name,
    img_url,
    post_id,
    user_id,
  ])
  console.log(editedPost)
  res.status(200).json(editedPost);
}

async function deletePost(req, res) {
  const post_id = +req.params.post_id;
  const user_id = req.session.user.user_id;
  const db = req.app.get("db");

  const updatedPosts = await db.posts.deletePost([post_id, user_id])

  res.status(200).json(updatedPosts);
}
async function postsById(req, res) {
  const post_id= req.params.post_id;
  const db = req.app.get("db");

  const posts = await db.posts.getPostsById(post_id)
console.log(post_id)
  res.status(200).json(posts);
}

async function allPostsByCategoryName(req, res) {
  const category_name = req.params.category_name;
  const db = req.app.get("db");

  const posts = await db.posts.getAllPostsByCategoryName(category_name)

  res.status(200).json(posts);
}

module.exports = {
  allPosts,
  addPost,
  editPost,
  deletePost,
  allPostsByCategoryName,
  postsById
}