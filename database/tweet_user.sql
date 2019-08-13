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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `password_hash` varchar(60) DEFAULT NULL,
  `user_handle` varchar(45) NOT NULL,
  `profile_image` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `reset_password` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_handle_UNIQUE` (`user_handle`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'rhea','rhea@test.com','helloworld','ChUoHpLUShvCWAN9fqC8O.D1oyJlIPoXYFGwquELBAjobJV0Z5cpO','rhea','home/profile_image/pic01.jpg','2019-08-08 10:16:19','2019-07-31 10:50:02',1),(3,' abcd','test@test.com','abcdefg',NULL,'abc',NULL,'2019-08-07 18:07:27','2019-07-31 10:50:02',0),(4,'qwerty','test@test.com','qwerty','$2b$10$CGP/g048rPdMuXJI4axbF.x7PzOOcYvB2TfyTEq8fBclhVpuPdNKm','qwerty',NULL,'2019-07-31 11:48:08','2019-07-31 11:48:08',NULL),(5,'zxcvbn','zxcvb@test.com','zxcvbn','$2b$10$IhmPBM7BEpi82ALx98kFSuhieybFLQqobhSFlO/fRn4wHEM2p4gbi','zxcvbn',NULL,'2019-08-07 16:25:49','2019-07-31 12:18:26',1),(6,'rhea','test@test.com','rhearay','$2b$10$Oxyyl.QycxRdAX93wyYYUufz60kON8cQW.c7oXx1qCpIYbs2wm/.2','rhearay',NULL,'2019-07-31 14:23:42','2019-07-31 14:23:42',NULL),(7,'poiuyt','test@test.com','poiuyt','$2b$10$UD1m7p5flvQHFW4WmX4ce.onD8ofBo7yBPAnJCLIoYmFB.uzKN99G','poiuyt','home/profile_image/pic01.jpg','2019-08-05 11:38:54','2019-07-31 15:14:06',NULL),(8,'poiuyt','test@test.com','poiuyt','$2b$10$qBNvBSH6hMMW7Vzp8pJcO.exFzf9ckDCY72qTI82HQL/VCoLh7UUK','poiuytqwer',NULL,'2019-07-31 15:27:48','2019-07-31 15:27:48',NULL),(9,'abcpoiuy','test@test.com','abcpoiuy','$2b$10$mGoKCFE7VbuG6fj9CliP0e8e3IZKyfiko9LvVukl0VX49vCZVwmXi','abcpoiuy',NULL,'2019-07-31 15:36:20','2019-07-31 15:36:20',NULL),(17,'qwerty','test@test.com','asdfgh','$2b$10$3LZfSzivek1lHQYi8thpB.3ywNuUR/VKoZVyzc9icuwL.ihIrTp0e','jhcbjbdnnd',NULL,'2019-08-01 18:10:16','2019-08-01 18:10:16',NULL),(19,'mitchelle','mitchelle.creado@flexiloans.com','asasasas','asasasas','mitchelle','home/profile_image/pic01.jpg','2019-08-13 12:56:58','2019-08-06 09:49:09',NULL),(21,'alisha','alisha@alisha.com','asasasas','c.3.N6DfNPZ2BRMcbgin.O08gcUxTnGncqZxZHzYSAkBsWFwyeMw.','alisha',NULL,'2019-08-13 12:25:16','2019-08-06 14:15:06',1),(22,'anoop','anoop@anoop.com','asasasas','asasasas','anoop','home/profile_image/pic01.jpg','2019-08-09 16:19:57','2019-08-06 14:15:39',0),(23,'arushi','arushi@arushi.com','asasasas','asasasas','arushi',NULL,'2019-08-06 14:16:00','2019-08-06 14:16:00',NULL),(24,'eric','eric@eric.com','qwertyuiop','57Gi7ub/jrq0wm9JKe.ZTOKaF7.aQC941SRfyVcilHCZIhbirTFTW','eric',NULL,'2019-08-07 18:43:47','2019-08-06 14:16:20',1),(25,'melvin','melvin@melvin.com','asasasas','asasasas','melvin',NULL,'2019-08-06 14:16:42','2019-08-06 14:16:42',NULL),(27,'sonali','sonali@sonali.com','health','WvjPIqWTHWmCJivVd.rpMOtkm04HIPcb/AjBRUbHccnuw8NZTuGHu','sonali','home/profile_image/logo.jpg','2019-08-13 12:22:06','2019-08-06 14:17:35',0),(28,'gladcy','test@test.com','gladcy','$2b$10$cR7G.yy67B7.JJVYk05y7ew0upKR7Rjt.mEfVj6xWR.3ZH16FhXpm','gladcy',NULL,'2019-08-06 15:10:49','2019-08-06 15:10:49',NULL),(29,'test','testtest@test.com','eeeee','uWsNOvqWX9TTnVHob.7wb.wo0NPZiQQY7vxyLs17o/pzQOgM2aRnW','testtest',NULL,'2019-08-07 18:07:57','2019-08-07 13:44:20',0),(30,'mitchelle','mitchelle.creado@flexiloans.com','asasasas','asasasas','mitchellec',NULL,'2019-08-08 12:43:54','2019-08-08 12:43:54',NULL),(31,'anoop','asa@dfsf','asasasas','$2b$10$o2gO3ZeOQT3LPxTt/DoOAO82YR06L6kb4m7hxp4bZy28ObUCpQ7LO','anoopm',NULL,'2019-08-09 10:18:45','2019-08-09 10:18:45',NULL),(37,'mitchelle','mitchelle.creado@flexiloans.com','asasasas','$2b$10$0EoC5I0Va/UWNZWqNB9v1./0lV5t2wrjkS5D4MLV.MUItjjmDMTia','mitchellea',NULL,'2019-08-09 17:56:55','2019-08-09 17:56:55',NULL),(42,'mitchelle','mitchelle.creado@flexiloans.com','asdasd','$2b$10$CD6CzlkT1I0vzFYTtyNJI.Kb3bHl04Q./tYBeTCz6naYHM9V1PNf.','mitchelleabc',NULL,'2019-08-09 18:14:13','2019-08-09 18:14:13',NULL),(44,'mitchelle','mitchelle.creado@flexiloans','asasasas','$2b$10$oKIv30iVn3Yt.IyYU6pLxe7OHveaNZk.E9JrTdoAZUEqmsYox/10C','mitchellecre',NULL,'2019-08-09 18:15:42','2019-08-09 18:15:42',NULL),(45,'irine4','asa@dfsf.com','lkjhgf','lkjhgf','gladcyhfj',NULL,'2019-08-13 12:32:55','2019-08-13 12:32:55',NULL),(46,'irine','irine@irine.com','asasasas','asasasas','irine',NULL,'2019-08-13 12:35:34','2019-08-13 12:35:34',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-13 16:58:48
