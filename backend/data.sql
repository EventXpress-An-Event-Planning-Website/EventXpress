CREATE DATABASE eventxpress;

\c eventxpress;

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- pw: admin123
INSERT INTO admin (name, email, password) VALUES('Admin', 'admin@gmail.com', '$2a$10$FUNAVUZAHzV1qmFtNv8bye2Jy6BsDY4VzMf7fr5ObJuWywmEq//NO'); 

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    nic VARCHAR(20) NOT NULL UNIQUE,
    nicImage VARCHAR(255),
    profileImage VARCHAR(255),
    location VARCHAR(255),
    contactNo VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE serviceProvider (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    nic VARCHAR(20) NOT NULL UNIQUE,
    nicImage VARCHAR(255),
    profileImage VARCHAR(255),
    location VARCHAR(255),
    contactNo VARCHAR(20),
    serviceStatus VARCHAR(20) DEFAULT 'new',
    facebookLink VARCHAR(255),
    instagramLink VARCHAR(255),
    twitterLink VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    subscribedDate DATE DEFAULT NULL
);

ALTER SEQUENCE serviceProvider_id_seq RESTART WITH 10000;

ALTER TABLE serviceProvider
    ALTER COLUMN id SET DEFAULT nextval('serviceProvider_id_seq');

ALTER TABLE serviceProvider
ADD COLUMN businessRegImage VARCHAR(255);

ALTER TABLE serviceProvider
ADD COLUMN businessRegImage VARCHAR(255);

-- For the "serviceprovider" table
ALTER TABLE serviceProvider
ADD COLUMN isVerified BOOLEAN DEFAULT FALSE,
ADD COLUMN verificationToken VARCHAR(255);

CREATE TABLE event (
    event_id SERIAL PRIMARY KEY,
    userId INTEGER,
    event_name VARCHAR(100) NOT NULL,
    event_maintype VARCHAR(20) NOT NULL,
    event_date DATE,
    start_time TIME,
    end_time TIME,
    event_description VARCHAR(250),
    event_type VARCHAR(255),
    created_at TIMESTAMP
);

CREATE TABLE venuepackage (
    userid INTEGER, 
    package_id VARCHAR(255) PRIMARY KEY,
    package_busname VARCHAR(255),
    package_title VARCHAR(255), 
    package_address VARCHAR(255), 
    package_contact VARCHAR(255),
    package_description VARCHAR(255),
    package_price FLOAT, 
    sp_images VARCHAR(255),
    package_op_title VARCHAR(255), 
    package_op_des VARCHAR(255), 
    package_op_count INTEGER, 
    package_op_area FLOAT, 
    package_op_type VARCHAR(255)
)

CREATE TABLE decorationpackage (
    userid INTEGER, 
    package_id VARCHAR(255) PRIMARY KEY,
    package_busname VARCHAR(255),
    package_title VARCHAR(255), 
    package_address VARCHAR(255), 
    package_contact VARCHAR(255),
    package_description VARCHAR(255),
    package_price FLOAT, 
    sp_images VARCHAR(255)
)
CREATE TABLE public.todolist
(
    todo_id SERIAL,
    event_id integer,
    todo_service text,
    PRIMARY KEY (todo_id)
);

CREATE TABLE cakepackage (
    userid INTEGER, 
    package_id VARCHAR(255) PRIMARY KEY,
    package_busname VARCHAR(255),
    package_title VARCHAR(255), 
    package_address VARCHAR(255), 
    package_contact VARCHAR(255),
    package_description VARCHAR(255),
    package_price FLOAT, 
    sp_images VARCHAR(255)
)

CREATE TABLE cateringpackage (
    userid INTEGER, 
    package_id VARCHAR(255) PRIMARY KEY,
    package_busname VARCHAR(255),
    package_title VARCHAR(255), 
    package_address VARCHAR(255), 
    package_contact VARCHAR(255),
    package_description VARCHAR(255),
    package_price FLOAT, 
    sp_images VARCHAR(255)
)

CREATE TABLE lightsandsoundspackage (
    userid INTEGER, 
    package_id VARCHAR(255) PRIMARY KEY,
    package_busname VARCHAR(255),
    package_title VARCHAR(255), 
    package_address VARCHAR(255), 
    package_contact VARCHAR(255),
    package_description VARCHAR(255),
    package_price FLOAT, 
    sp_images VARCHAR(255)
)

CREATE TABLE photographypackage (
    userid INTEGER, 
    package_id VARCHAR(255) PRIMARY KEY,
    package_busname VARCHAR(255),
    package_title VARCHAR(255), 
    package_address VARCHAR(255), 
    package_contact VARCHAR(255),
    package_description VARCHAR(255),
    package_price FLOAT, 
    sp_images VARCHAR(255)
)

CREATE TABLE ticket (
    id SERIAL PRIMARY KEY,
    selectedCategory VARCHAR(255),
    eventTitle VARCHAR(255),
    eventDate DATE,
    eventTime TIME,
    eventVenue VARCHAR(255),
    eventDescription TEXT,
    eventPoster VARCHAR(255),
    ticketItems VARCHAR(255),
    accountHolderName VARCHAR(255),
    bankName VARCHAR(255),
    branchName VARCHAR(255),
    accountNumber VARCHAR(255),
    bankPassbookImage VARCHAR(255)
);

ALTER TABLE venuepackage ADD FOREIGN KEY (userid) REFERENCES serviceprovider (id);
ALTER TABLE cakepackage ADD FOREIGN KEY (userid) REFERENCES serviceprovider (id);
ALTER TABLE lightsandsoundspackage ADD FOREIGN KEY (userid) REFERENCES serviceprovider (id);
ALTER TABLE cateringpackage ADD FOREIGN KEY (userid) REFERENCES serviceprovider (id);
ALTER TABLE photographypackage ADD FOREIGN KEY (userid) REFERENCES serviceprovider (id);
ALTER TABLE decorationpackage ADD FOREIGN KEY (userid) REFERENCES serviceprovider (id);

CREATE TABLE blocklist (
    blockpref_id SERIAL PRIMARY KEY,
    my_id INTEGER,
    block_id INTEGER,
    block_status CHAR(1)
);