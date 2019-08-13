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
-- Table structure for table `retweet`
--

DROP TABLE IF EXISTS `retweet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `retweet` (
  `retweet_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `tweet_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`retweet_id`),
  KEY `user_id` (`user_id`),
  KEY `tweet_id` (`tweet_id`),
  CONSTRAINT `retweet_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retweet`
--

LOCK TABLES `retweet` WRITE;
/*!40000 ALTER TABLE `retweet` DISABLE KEYS */;
INSERT INTO `retweet` VALUES (1,NULL,NULL),(2,NULL,NULL),(3,NULL,NULL),(4,19,65),(5,19,65),(6,19,66),(7,19,66),(8,19,66),(9,1,64),(10,1,64),(11,19,66),(12,19,66),(13,19,68),(14,19,68),(15,19,68),(16,19,65),(17,19,68),(18,19,67),(19,19,65),(20,19,71),(21,19,72),(22,19,71),(23,19,72),(24,27,74),(25,27,74),(28,19,107),(29,19,107),(30,1,61),(31,1,61),(34,19,122),(35,19,124),(36,19,125),(37,19,126),(38,19,128),(39,19,130),(40,19,130),(41,19,133),(42,19,133),(43,19,136),(44,19,79),(45,19,79),(46,19,106),(48,19,106),(49,19,62),(50,19,63),(51,19,157),(52,19,149),(53,19,155),(54,19,156),(97,NULL,NULL),(98,NULL,NULL),(101,NULL,12),(103,19,306),(105,19,306),(112,19,316),(115,19,349);
/*!40000 ALTER TABLE `retweet` ENABLE KEYS */;
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
