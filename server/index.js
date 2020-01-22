require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');


//Server assignment deconstruction
const app = express();


// Controllers
const ac = require("./controllers/authController")
const pc = require("./controllers/postsController")
const rc = require("./controllers/ratingsController")


// Destructuring private data from .env
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET } = process.env;


/////////////////////////////////////////////////AWS S3 SETUP FOLLOWS
// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};

// AWS S3 POST route
app.post('/test-upload', (request, response) => {
  const form = new multiparty.Form();
    form.parse(request, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timestamp = Date.now().toString();
        const fileName = `userPhotos/${timestamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        return response.status(200).send(data);
      } catch (error) {
        return response.status(400).send(error);
      }
    });
});
/////////////////////////////////////////////////////////////AWS S3 SETUP ABOVE


// Middleware
const auth = require('./middleware/authMiddleware');
app.use(express.json());





// Session
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

// Database Connection
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected!")
})

// De-structured controllers
const { user, registerUser, loginUser, logoutUser } = ac;
const { allRatings, addRating, editRating, allRatingsByUserId} = rc
const { allPosts, addPost, editPost, deletePost, allPostsByCategoryName, postsById, getRandomPosts } = pc;
// Auth Endpoints
app.get("/auth/user", user); //Works
app.post("/auth/register", registerUser); //Works, catches duplicates
app.post("/auth/login", loginUser); // Works
app.get("/auth/logout", logoutUser); //Works

// Posts Endpoints
app.get("/api/posts",  allPosts); // Works -- auth.usersOnly,
app.get("/api/post/:post_id",  postsById) //Works
app.get("/api/randposts/:amount",  getRandomPosts) //Works
app.get("/api/posts/:category_name", allPostsByCategoryName) //Works
app.post("/api/posts",  addPost); //Works 
app.put("/api/posts/:post_id",  editPost); //Works, allows edit img url and pet name
app.delete("/api/posts/:post_id",  deletePost); //Works

// Ratings Endpoints
app.get("/api/ratings",  allRatings);  //Works
app.get("/api/ratings/:user_id",  allRatingsByUserId) //Works
app.post("/api/ratings/:post_id",  addRating); //Works, but will allow user to rate multiple times
app.put("/api/ratings/:post_id",  editRating) //Works

app.listen(SERVER_PORT, () => {
  console.log(`LOFI RADIO STATION #: ${SERVER_PORT}`)
})
