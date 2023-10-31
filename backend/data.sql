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

ALTER TABLE customer
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

Alter Table event ADD COLUMN event_img text;

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
    package_op_type VARCHAR(255),
    createdate timestamp without time zone
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
    sp_images VARCHAR(255),
    createdate timestamp without time zone
)

CREATE TABLE todolist
(
    todo_id SERIAL,
    event_id integer,
    todo_service text,
    PRIMARY KEY (todo_id)
);

ALTER Table todolist add column selected_package_id varchar(255);

CREATE TABLE cakepackage (
    userid INTEGER, 
    package_id VARCHAR(255) PRIMARY KEY,
    package_busname VARCHAR(255),
    package_title VARCHAR(255), 
    package_address VARCHAR(255), 
    package_contact VARCHAR(255),
    package_description VARCHAR(255),
    package_price FLOAT, 
    sp_images VARCHAR(255),
    createdate timestamp without time zone
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
    sp_images VARCHAR(255),
    createdate timestamp without time zone
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
    sp_images VARCHAR(255),
    createdate timestamp without time zone
)

CREATE TABLE stagepackage (
    userid INTEGER, 
    package_id VARCHAR(255) PRIMARY KEY,
    package_busname VARCHAR(255),
    package_title VARCHAR(255), 
    package_address VARCHAR(255), 
    package_contact VARCHAR(255),
    package_description VARCHAR(255),
    package_price FLOAT, 
    sp_images VARCHAR(255),
    createdate timestamp without time zone
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
    sp_images VARCHAR(255),
    createdate timestamp without time zone
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
ALTER TABLE stagepackage ADD FOREIGN KEY (userid) REFERENCES serviceprovider (id);

ALTER TABLE photographypackage 
    ADD COLUMN package_tools VARCHAR(255),
    ADD COLUMN package_format VARCHAR(255);

ALTER TABLE decorationpackage
    ADD COLUMN package_decoelements VARCHAR(255);

ALTER TABLE cateringpackage
    ADD COLUMN package_menu VARCHAR(255);

ALTER TABLE cakepackage
    ADD COLUMN serving_size INTEGER,
    ADD COLUMN cake_shape VARCHAR(255),
    ADD COLUMN allergy VARCHAR(255);

ALTER TABLE lightsandsoundspackage
    ADD COLUMN sound_source VARCHAR(255),
    ADD COLUMN package_lights VARCHAR(255);

ALTER TABLE stagepackage
    ADD COLUMN stage_type VARCHAR(255),
    ADD COLUMN stage_size VARCHAR(255),
    ADD COLUMN stage_height INTEGER;
   
CREATE TABLE blocklist (
    blockpref_id SERIAL PRIMARY KEY,
    my_id INTEGER,
    block_id INTEGER,
    block_status CHAR(1),
    FOREIGN KEY (my_id) REFERENCES serviceprovider(id)
)

CREATE TABLE ticketStatus (
  ticketStatus_id SERIAL PRIMARY KEY,
  ticketId INT,
  customerId INT,
  type VARCHAR(255),
  price DECIMAL(10, 2),
  totalQuantity INT,
  currentQuantity INT
)

CREATE TABLE ticketBookings (
    id SERIAL PRIMARY KEY,
    buyerId INT NOT NULL,
    ticketId INT NOT NULL,
    pid TEXT NOT NULL,
    ticketType VARCHAR(255) NOT NULL,
    noOfTickets INT NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE public.compareservices
(
    compare_id serial,
    event_id integer,
    service text,
    package_id text,
    column_id integer,
    PRIMARY KEY (compare_id)
);


CREATE TABLE public.customer_notification
(
    notify_id serial,
    event_id integer,
    user_id integer,
    package_id VARCHAR(255),
    send_user_id integer,
    status text,
    service text,
    PRIMARY KEY (notify_id)
);

CREATE TABLE public.predefinedpackage
(
    userid integer NOT NULL,
    predefined_id character varying(255) NOT NULL,
    venue_id character varying(255),
    catering_id character varying(255),
    cake_id character varying(255),
    deco_id character varying(255),
    stagerental_id character varying(255),
    soundandlight_id character varying(255),
    photography_id character varying(255),
    pckg_img text,
    prepackage_type varchar(255),
    prepackage_title varchar(255),
    prepackage_description varchar(255),
    prepackage_discount integer,
    PRIMARY KEY (predefined_id)
);
