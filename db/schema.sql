DROP DATABASE IF EXISTS work_db;
    CREATE DATABASE work_db;
    USE work_db;

    CREATE TABLE department(
        id INTEGER(20) AUTO_INCREMENT NOT NULL,
        departmentName VARCHAR(30),
        PRIMARY KEY (id)
    );

    CREATE TABLE role(
        id INTEGER (20) AUTO_INCREMENT NOT NULL,
        title VARCHAR(30),
        salary INTEGER(100),
        departmentName VARCHAR(30),
        PRIMARY KEY (id)
    );

    CREATE TABLE employee(
        id INTEGER (20) AUTO_INCREMENT NOT NULL,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INTEGER(30), 
        manager_id INTEGER (30),
        PRIMARY KEY (id)
    );