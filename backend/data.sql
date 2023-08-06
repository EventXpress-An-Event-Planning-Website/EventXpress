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

CREATE TABLE privateEvent (
    event_id SERIAL PRIMARY KEY,
    userId INTEGER,
    event_name VARCHAR(100) NOT NULL,
    event_date DATE,
    start_time TIME,
    end_time TIME,
    event_type VARCHAR(255),
    created_at TIMESTAMP
);



