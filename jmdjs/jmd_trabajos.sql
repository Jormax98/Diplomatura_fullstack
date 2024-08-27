-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: jmd
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `trabajos`
--

DROP TABLE IF EXISTS `trabajos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabajos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empresa` varchar(45) DEFAULT NULL,
  `trabajo` text,
  `cuerpo` text,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajos`
--

LOCK TABLES `trabajos` WRITE;
/*!40000 ALTER TABLE `trabajos` DISABLE KEYS */;
INSERT INTO `trabajos` VALUES (2,'TERSUAVE','Instalación de automatismo de nuevo reactor planta emulsiones','Se realizó la actualización de la programación del PLC en la planta para incluir el reactor nuevo evitando la dependencia de un solo reactor. Además, se actualizaron los gráficos de las distintas pantallas SCADA intervinientes en los distintos procesos de la nave.','nygynlwptkou7uylbukj'),(3,'ACINDAR','Upgrade armadora de cajas para clavos a granel','Se realizo la actualización del automatismo de la armadora de caja. La cual se instaló un nuevo PLC con un automatismo más optimizado, se le incorporaron nuevos sensores y un HMI para el mejor funcionamiento de esta.','g3fd3axp6e3odktdiue9'),(4,'BAGLEY','Instalación sistema SCADA descarga de camiones de chocolates y rellenos','Se instaló un sistema SCADA en reemplazo de los HMI existente para tener un mayor control en la descarga de camiones de abastecimiento. Esto mejoró la trazabilidad de los productos y ayudo a la programación de abastecimiento de la planta.','agrjovr7cwda0gqj6o6r'),(5,'TERSUAVE','Puesta en marcha planta de concentrados','Se realizó la automatización de la planta de concentrados donde se requería el correcto funcionamiento continuo de la producción de pintura concentrada. Este constaba de tanques dispersores, molinos y tanques de vacío. A través de cañerías se sincronizo todo el automatismo del ingreso y egreso de los componentes a los distintos dispositivos. A su vez, se realizó pantallas SCADA que son utilizadas para tener control sobre la planta. Estas contaban además con una sección de recetas que ayudan a almacenar las distintas recetas para fabricar los distintos productos.','umbnfakuieppmsc43cnj'),(7,'TERSUAVE','Automatización de válvula Latex','Se pretende nose','zqymuvwveuyari5hpmsk'),(9,'BAGLEY','Actualización pantallas HMI','Se realizó la actualización de las pantallas HMI correspondiente a la descarga de MP a las líneas de chocolate y del sector de abastecimiento de planta de chocolate y relleno.','dpqrwumcbewrwzylu90d');
/*!40000 ALTER TABLE `trabajos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-27 11:37:39
