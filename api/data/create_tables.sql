
DROP TABLE IF EXISTS "user", "user_info", "gender","product",  "category", "sub_category", "comment";

-- ------------------------------------
-- Table "user"
-- ------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
    "id" SERIAL PRIMARY KEY,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS "user_info" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255),
    "address" VARCHAR (255) NOT NULL,
    "mobile" VARCHAR(255) ,
    "avatar" TEXT,
    "certified" BOOLEAN DEFAULT FALSE,
    "role" VARCHAR(255) NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL,
    "user_id" INT NOT NULL REFERENCES "user"("id")
);

-- ------------------------------------
-- Table "gender"
-- ------------------------------------
CREATE TABLE IF NOT EXISTS "gender" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

-- ------------------------------------
-- Table "category"
-- ------------------------------------
CREATE TABLE IF NOT EXISTS "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

-- ------------------------------------
-- Table "sub_category"
-- ------------------------------------
CREATE TABLE IF NOT EXISTS "sub_category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "category_id" INT NOT NULL REFERENCES "category"("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

-- ------------------------------------
-- Table "product"
-- ------------------------------------

CREATE TABLE IF NOT EXISTS "product" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "image" TEXT,
    "size" TEXT,
    "price" INT NOT NULL,
    "mark" VARCHAR(255),
    "status" VARCHAR(255) NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "gender_id" INT NOT NULL REFERENCES "gender"("id"),
    "sub_category_id" INT NOT NULL REFERENCES "sub_category"("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

-- ------------------------------------
-- Table "comment"
-- ------------------------------------
CREATE TABLE IF NOT EXISTS "comment" (
    "id" SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "product_id" INT NOT NULL REFERENCES "product"("id"),
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NULL
);

