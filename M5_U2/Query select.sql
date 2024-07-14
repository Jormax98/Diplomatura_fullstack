/*SELECT nombre, apellido	FROM `ejercicio`.`empleados`;*/
/*SELECT edad, nombre FROM `ejercicio`.`empleados` WHERE edad > 18 AND edad < 30;*/
/*SELECT edad, nombre FROM `ejercicio`.`empleados` WHERE edad BETWEEN 18 AND 30;*/
/*SELECT nombre, apellido FROM `ejercicio`.`empleados` WHERE nombre LIKE 'a%';*/
/*SELECT nombre, apellido, edad FROM `ejercicio`.`empleados` ORDER BY edad ASC;*/
/*SELECT nombre, apellido, edad FROM `ejercicio`.`empleados` ORDER BY edad ASC, nombre DESC;*/
SELECT nombre, apellido, edad FROM `ejercicio`.`empleados` LIMIT 2,5;