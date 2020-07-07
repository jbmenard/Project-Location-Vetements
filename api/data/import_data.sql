
-- ------------------------------------
-- Base de données : "Oloc"
-- ------------------------------------


-- create users
INSERT INTO "app_user" ("password", "email") VALUES
('1234', 'pays-de-galles-independant@gmail.com'),
('1234', 'arthur@gmail.com'),
('1234', 'loth@gmail.com'),
('1234', 'leodagan-m*rde@gmail.com'),
('1234', 'mais-vous-etes-des-malades@gmail.com'),
('1234', 'lancelot@gmail.com');

INSERT INTO "app_user_info" ("first_name","last_name","address", "avatar", "mobile", "app_user_id") VALUES
('Perceval', 'DeGalles', '12 rue Aristide', 'https://kaamelott.hypnoweb.net/photo/119/galerie/Guide_des_episodes/294.jpg', '0687629022', 1 ),
('Arthur', 'Cruz', '29 boulevard des Maréchaux', 'https://images.sudouest.fr/2020/01/22/5e285e3f66a4bd4104ae5f04/widescreen/1000x500/dans-kaamelott-alexandre.jpg', '0672849981', 2),
('Roi Loth', 'Nakamoto', '72 avenue des Champs Élysées', 'https://pbs.twimg.com/ext_tw_video_thumb/950985607416860672/pu/img/k2IKYFnuPPcbz3Bd.jpg', '0645712390', 3),
('Léodagan', 'Gambino', '64 rue des Capucines', 'https://static.cnews.fr/sites/default/files/astierleodagan_5e42e1ba56deb.jpg', '0612784900', 4),
('Pere Blaise', 'Blaise', '64 rue des Capucines', 'https://kaamelott.hypnoweb.net/photo/119/83/ok/14-Anonyme22.jpg', '0612784900', 5),
('Lancelot', 'Gambino', '64 rue des Capucines', 'https://i.skyrock.net/4092/16894092/pics/463774427.jpg', '0612784900', 6);


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
INSERT INTO "product" ("name", "description", "gender_id", "size", "price", "mark", "status", "image", "app_user_id", "sub_category_id") VALUES
('slip', 'slip vintage pour personne cool', 1, 'XL',150,'Armani','sale', 'https://media.achat-ville.com/uploads/indre/Produit/eb/prod_photo1_12445_1428684345.jpg',1,2),
('pull', 'pull vintage pour personne cool', 2, 'L',15,'babou','neuf', 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',1,3),
('montre', 'montre apple watch', 1, 'L', 45,'apple','occasion', 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1059&q=80',1,14),
('chaussure', 'chaussure ville ', 3, 'L',85,'nike','occasion', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',1,4),
('veste de ski', 'Super veste de ski', 1, 'L', 40,'Bogner','occasion', 'https://images.unsplash.com/photo-1529774848151-535301a504f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',1,1),
('Chaussure ski', 'Super chaussures ski', 1, 'L', 40,'Rossignol','neuf', 'https://glisshop-glisshop-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/5ea6a27ed471077336ad2994b8c6f0c3b4cc5b3d_VH20ROSSCHA035_0.jpeg',2,1),
('Volant', 'Super volant', 2, 'L', 10,'Naïke','neuf', 'https://images-na.ssl-images-amazon.com/images/I/81OAC6rXHfL._AC_SX679_.jpg',2,5),
('Menotte', 'Super menotte', 2, 'L', 40,'Lilou plaisir','usé', 'https://images.unsplash.com/photo-1560575193-c2c9e886aefe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',2,9),
('Chapeau', 'Super chapeau', 1, 'L', 20,'Kaa','neuf', 'https://pbs.twimg.com/media/DMaLk-YXcAArqab.jpg',2,12),
('Excalibur', 'Super épée', 1, 'L', 100,'Magie','ancien', 'https://images.unsplash.com/photo-1542403764-19e1bb75cc75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',2,4);

-- create comments
INSERT INTO "comment" ("content", "app_user_id", "product_id") VALUES
('Mais Perceval, vous délirez ?', 2, 1),
('Sir, Gauvain demande si on peut s''en servir pour donner de l''élan à un pigeon ?', 1, 10),
('Ave Cesar, rosae rosam, et spiritus rex ! Ah non, parce que là, j’en ai marre !', 3, 1);