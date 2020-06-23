
-- ------------------------------------
-- Base de données : "Oloc"
-- ------------------------------------


-- create users
INSERT INTO "app_user" ("password", "email") VALUES
('1234', 'bertrand-dupont@gmail.com'),
('1234', 'esteban-cruz@gmail.com'),
('1234', 'hirochi-nakamoto@gmail.com'),
('1234', 'lucie-gambino@gmail.com');

INSERT INTO "app_user_info" ("first_name","last_name","address","mobile","avatar", "app_user_id") VALUES
('Bertrand', 'Dupont', '12 rue Aristide', '0687629022', 'photo 1', 1 ),
('Esteban', 'Cruz', '29 boulevard des Maréchaux', '0672849981', 'photo 2', 2),
('Hirochi', 'Nakamoto', '72 avenue des Champs Élysées', '0645712390', 'photo 3', 3),
('Lucie', 'Gambino', '64 rue des Capucines', '0612784900', 'photo 4', 4);


-- create genders
INSERT INTO "gender" ("name") VALUES
('homme'),
('femme'), 
('enfant'), 
('bébé');


-- create categories
INSERT INTO "category" ("name") VALUES 
('Sports'),
('Evénements'),
('Accessoires');

-- create sub_categories
INSERT INTO "sub_category"("name","category_id") VALUES
('Sports de glisse',1),
('Sports nautiques',1),
('Equitation',1),
('Sports de combat',1),
('Sports mécaniques',1),

('Mariage',2),
('Soirées et fêtes',2),
('Déguisements',2),
('Enterrement de vie de jeune fille / jeune garçon',2),
('Enterrement',2),

('Maroquinerie',3),
('Chapeaux',3),
('Bijoux',3),
('Montres',3),
('Sacs',3);

-- create products
INSERT INTO "product" ("name", "description", "gender_id", "image", "size", "price", "mark", "status", "app_user_id", "sub_category_id") VALUES
('slip', 'slip vintage pour personne cool', 1,'image1','XL',150,'armani','sale',1,1),
('pull', 'pull vintage pour personne cool', 2,'image2','L',15,'babou','neuf',2,2),
('montre', 'montre apple watch', 1,'image3','L', 45,'apple','occasion',3,3),
('chaussure', 'chaussure ville ', 3,'image4','L',85,'nike','occasion',4,4);

-- create comments
INSERT INTO "comment" ("content", "app_user_id", "product_id") VALUES
('Une supere veste de ski', 1, 1),
('Je recommande ce loueur !', 2, 2),
('Le pantalon était un peu abimé', 3, 3);