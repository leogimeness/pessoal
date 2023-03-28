create database game_store;

create table administradores (
	id INT not null auto_increment primary key,
    first_name varchar(120) not null,
    last_name varchar(120) not null,
    email varchar(45) unique not null,
    passcode varchar(64)
);

create table categories (
	id INT not null auto_increment primary key,
    categories_name varchar(45) not null
);

create table products (
	id INT not null auto_increment primary key,
    products_name varchar(45) not null,
    price decimal(7,2),
    categories_id INT not null,
    FOREIGN KEY (categories_id) REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    new_released binary not null,
    promotion binary not null
);

create table images(
	id int not null primary key auto_increment,
    products_id int not null,
    img_path_stored varchar(256) not null,
    FOREIGN KEY (products_id) REFERENCES products(id)
); 

create table clients(
	id INT not null auto_increment primary key,
    first_name varchar(120) not null,
    last_name varchar(120) not null,
    phone_number varchar(15),
    email varchar(45) unique not null,
    passcode varchar(64) not null,
    createdAt timestamp not null,
    updatedAt timestamp null,
    deletedAt timestamp null
);


create table address (
	id INT not null auto_increment primary key,
    address VARCHAR(45) not null,
    address2 VARCHAR(45) not null,
    clients_id INT not null,
    district VARCHAR(45) not null,
    city INT NOT NULL,
    postal_code varchar(20),
    last_update datetime(0),
	FOREIGN KEY (clients_id) REFERENCES clients(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

create table payment_methods(
	id INT not null auto_increment primary key,
    payment_method_name varchar(45) not null
);

create table orders (
	id INT not null auto_increment primary key,
    address_id INT not null,
    clients_id INT not null,
    payment_methods_id INT not null,
    createdAt timestamp not null,
    updatedAt timestamp null,
    deletedAt timestamp null,
    payAt timestamp null,
    deliveredAt timestamp null,
    FOREIGN KEY (payment_methods_id) REFERENCES payment_methods(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (clients_id, address_id) REFERENCES address(clients_id, id)
);
