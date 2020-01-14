UPDATE ratings
SET rating= $1
WHERE post_id= $2 AND user_id= $3;