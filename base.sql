--sql

CREATE TABLE users (
	id bigserial NOT NULL,
	name varchar(255) NOT NULL,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	email_verified_at timestamp(0) NULL,
	"password" varchar(255) NOT NULL,
	is_active bool NOT NULL DEFAULT false,
	remember_token varchar(100) NULL,
	created_at timestamp(0) NULL,
	updated_at timestamp(0) NULL,
	"role" varchar(255) NULL DEFAULT 'instansi'::character varying,
	CONSTRAINT users_email_unique UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_username_unique UNIQUE (username)
);
CREATE UNIQUE INDEX users_id_idx ON users USING btree (id);

INSERT INTO users
(id, "name", username, email, email_verified_at, "password", is_active, remember_token, created_at, updated_at, "role")
VALUES(2, 'user1', 'user1', 'user1@mail.com', NULL, 'passwd', true, NULL, NULL, NULL, 'instansi');
