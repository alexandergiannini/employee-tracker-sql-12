INSERT INTO department(departmentName)
VALUES ("Legal"),("Engineering"),("HR"), ("Product"), ("Design"); /*SELECT * FROM department;*/

INSERT INTO roles(title, salary, departmentName) /*SELECT * FROM roles;*/
VALUES ("Software Engineer", 100000, "Engineering"), ("QA Analyst", 70000, "Engineering"), ("Product Manager", 120000, "Product");


INSERT INTO employee(first_name, last_name, jobTitle, departmentName, manager)
VALUES ("Alex", "Giannini", "QA Analyst", "Engineering", "Tim"), ("Lance", "Ngo", "Business Analyst", "Finance", "Spencer"), ("Sean", "Bertram", "Tax Analyst", "Tax", "John");