-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: tweet
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `deactive`
--

DROP TABLE IF EXISTS `deactive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `deactive` (
  `deactive_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `password_hash` varchar(120) DEFAULT NULL,
  `user_handle` varchar(45) DEFAULT NULL,
  `profile_image` varchar(200) DEFAULT NULL,
  `updated_at` varchar(45) DEFAULT NULL,
  `created_at` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`deactive_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deactive`
--

LOCK TABLES `deactive` WRITE;
/*!40000 ALTER TABLE `deactive` DISABLE KEYS */;
INSERT INTO `deactive` VALUES (1,'19','mitchelle','mitchelle.creado@flexiloans.com','asasasas','asasasas','mitchelle','home/profile_image/undefined',NULL,NULL),(2,'26','benjo','benjo@benjo.com','things',NULL,'benjo',NULL,NULL,NULL),(3,'26','benjo','benjo@benjo.com','things',NULL,'benjo',NULL,NULL,NULL),(4,'1','rhea','rhea@test.com','helloworld','ChUoHpLUShvCWAN9fqC8O.D1oyJlIPoXYFGwquELBAjobJV0Z5cpO','rhea','home/profile_image/pic01.jpg',NULL,NULL),(5,'1','rhea','rhea@test.com','helloworld','ChUoHpLUShvCWAN9fqC8O.D1oyJlIPoXYFGwquELBAjobJV0Z5cpO','rhea','home/profile_image/pic01.jpg',NULL,NULL),(6,'1','rhea','rhea@test.com','helloworld',NULL,'rhea',NULL,NULL,NULL),(7,'19','mitchelle','mitchelle.creado@flexiloans.com','asasasas',NULL,'mitchelle',NULL,NULL,NULL);
/*!40000 ALTER TABLE `deactive` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-13 16:58:49
