create table if not exists genres
(
	genre_id int auto_increment
		primary key,
	genre_title varchar(255) null,
	is_boolean tinyint(1) null
);

create table if not exists movies
(
	movie_id int auto_increment
		primary key,
	title varchar(255) null invisible,
	play_time int default 120 null,
	constraint movies_pk
		unique (title)
);

create table if not exists movies_genres
(
	fk_movie_id int not null,
	fk_genre_id int not null,
	constraint movies_genres___fk
		foreign key (fk_movie_id) references movies (movie_id),
	constraint movies_genres_genres_genre_id_fk
		foreign key (fk_genre_id) references genres (genre_id)
);

create table if not exists users
(
	user_id int auto_increment
		primary key,
	email varchar(255) null,
	password varchar(255) null,
	fk_movie_id int null,
	constraint email
		unique (email),
	constraint users_movies_movie_id_fk
		foreign key (fk_movie_id) references movies (movie_id)
);

create definer = root@localhost trigger users_after_delete
	after delete
	on users
	for each row
	BEGIN
    INSERT INTO users_audit(user_id, action_type, user_email, user_password, action_date, movie_id, changes_by_user)
        VALUES(OLD.user_id, 'DELETE', OLD.email, OLD.password, CURRENT_TIMESTAMP, OLD.fk_movie_id, (SELECT CURRENT_USER));
end;

create table if not exists users_audit
(
	user_id int not null,
	action_type varchar(255) not null,
	user_email varchar(255) not null,
	user_password int not null,
	action_date datetime not null,
	movie_id int null,
	changes_by_user varchar(255) not null
);

