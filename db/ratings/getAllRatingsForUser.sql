-- SELECT r.*, u.username FROM ratings r
-- INNER JOIN users u
-- ON p.user_id = u.user_id
-- ORDER BY p.post_id DESC;

SELECT * FROM ratings
WHERE user_id= $1;