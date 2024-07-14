SELECT nombre, trabajo FROM `ejercicio`.`empleados`;
SELECT nombre, edad FROM `ejercicio`.`empleados`;
SELECT nombre, edad FROM `ejercicio`.`empleados` WHERE trabajo Like 'Programador%';
SELECT nombre, apellido FROM `ejercicio`.`empleados` WHERE edad > 30;
SELECT apellido, mail FROM `ejercicio`.`empleados` WHERE nombre = 'Juan';
SELECT nombre FROM `ejercicio`.`empleados` WHERE trabajo LIKE 'Programador%' OR trabajo LIKE 'Desarrollador%';
SELECT id_emp, nombre, apellido, trabajo FROM `ejercicio`.`empleados` LIMIT 14,6;
SELECT nombre, apellido FROM `ejercicio`.`empleados` WHERE salario < 80000;
SELECT nombre, apellido FROM `ejercicio`.`empleados` WHERE salario BETWEEN 75000 AND 90000;
SELECT apellido FROM `ejercicio`.`empleados` WHERE apellido LIKE 'S%';
SELECT nombre FROM `ejercicio`.`empleados` WHERE nombre LIKE '%l';
/*INSERT INTO `ejercicio`.`empleados` VALUES (22, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com');*/
/*DELETE FROM `ejercicio`.`empleados` WHERE nombre = 'Hernan' AND apellido = 'Rosso';*/
UPDATE `ejercicio`.`empleados` SET salario = 90000 WHERE nombre = 'Daniel' AND apellido = 'Gutierrez';