DROP DATABASE IF EXISTS work_db;
    CREATE DATABASE work_db;
    USE work_db;

    CREATE TABLE department(
        id INTEGER(20) AUTO_INCREMENT NOT NULL,
        departmentName VARCHAR(30),
        PRIMARY KEY (id)
    );

    CREATE TABLE roles(
        id INTEGER(20) AUTO_INCREMENT NOT NULL,
        title VARCHAR(30),
        salary INTEGER(100),
        departmentName VARCHAR(30),
        PRIMARY KEY (id)
    );

    CREATE TABLE employee(
        id INTEGER(20) AUTO_INCREMENT NOT NULL,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        jobTitle VARCHAR(30),
        departmentName VARCHAR(30),
        manager VARCHAR(30),
        PRIMARY KEY (id)
    );