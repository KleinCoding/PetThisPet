posts
post_id (serial), category_name, pet_name, img_url, user_id(linked to users table)

users
user_id, username, hash, post_id(linked to posts table)
(Add in: voted_imgs? How? remove owned images, just link posts table to user id?)

ratings
post_id(linked to post table), user_id(linked to users table), rating

maybe:
categories
category_name, category_id 
(can link to posts and users using category id in those tables instead of category name. stretch goal?)


SQL FOREIGN KEY Constraint
A FOREIGN KEY is a key used to link two tables together.

A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.

Look at the following two tables:

"Persons" table:
"Persons" table:

PersonID	LastName	FirstName	Age
1	Hansen	            Ola	         30
2	Svendson	        Tove	     23
3	Pettersen	        Kari	     20
"Orders" table:

OrderID	OrderNumber	PersonID
1	        77895	    3
2	        44678	    3
3	        22456	    2
4	        24562	    1
Notice that the "PersonID" column in the "Orders" table points to the "PersonID" column in the "Persons" table.

The "PersonID" column in the "Persons" table is the PRIMARY KEY in the "Persons" table.

The "PersonID" column in the "Orders" table is a FOREIGN KEY in the "Orders" table.

The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.

The FOREIGN KEY constraint also prevents invalid data from being inserted into the foreign key column, because it has to be one of the values contained in the table it points to.

CREATING A FOREIGN KEY
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);

DROP a FOREIGN KEY Constraint
ALTER TABLE Orders
DROP CONSTRAINT FK_PersonOrder;