-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: voting_system
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `issue`
--

DROP TABLE IF EXISTS `issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue` (
  `issueGroupID` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `region` varchar(100) NOT NULL,
  `metadata` varchar(1000) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `issueGroupID` (`issueGroupID`),
  CONSTRAINT `issue_ibfk_1` FOREIGN KEY (`issueGroupID`) REFERENCES `issueGroup` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue`
--

LOCK TABLES `issue` WRITE;
/*!40000 ALTER TABLE `issue` DISABLE KEYS */;
INSERT INTO `issue` VALUES (1,1,'投團體','all','來自世界各地的團體皆參與這次票選，趕快拿起手機，投給你心目中的第一! \n Groups from worldwide joined this competition. Vote for your favourite one right away!',NULL),(1,2,'投偶像','all','就在今年，無論知名藝人如羅志祥、吳亦凡，抑或者遠近馳名的電影明星都將角逐這次寶座，競爭激烈，究竟誰能贏得冠軍寶座呢?\n It\'s our honor to invite so many famous actors or performing artists to join this vote. Don\'t forget to vote for your champion in mind!',NULL),(1,3,'滿意度調查','all','很榮幸您能蒞臨使用我們的網站，若時間允許，方便給我們評價讓我們做得更好!\n We are happy to bring you this activity. It would be helpful if you are willing to give us some feedback!','你認為這次活動辦得得宜，網站易用方便，介面清晰好懂嗎?\n\nDo you think this website is well-constructed and easy to use?');
/*!40000 ALTER TABLE `issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issueGroup`
--

DROP TABLE IF EXISTS `issueGroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issueGroup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `startTime` timestamp NOT NULL,
  `endTime` timestamp NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issueGroup`
--

LOCK TABLES `issueGroup` WRITE;
/*!40000 ALTER TABLE `issueGroup` DISABLE KEYS */;
INSERT INTO `issueGroup` VALUES (1,'偶像團體票選','2022-12-24 16:00:00','2023-01-01 15:59:59','admin');
/*!40000 ALTER TABLE `issueGroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `options` (
  `issueID` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `number` int NOT NULL,
  KEY `issueID` (`issueID`),
  CONSTRAINT `options_ibfk_1` FOREIGN KEY (`issueID`) REFERENCES `issue` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `options`
--

LOCK TABLES `options` WRITE;
/*!40000 ALTER TABLE `options` DISABLE KEYS */;
INSERT INTO `options` VALUES (1,'BTS',1),(1,'EXO',0),(1,'BIGBANG',0),(1,'GOT7',0),(1,'Super Junior',0),(1,'SEVENTEEN',0),(1,'TXT',0),(1,'NCT',0),(1,'SHINee',0),(1,'Stray Kids',0),(1,'iKON',0),(1,'Wanna One',0),(1,'CNBLUE',0),(2,'林志玲',0),(2,'章子怡',0),(2,'范冰冰',0),(2,'Angelababy',0),(2,'羅志祥',1),(2,'吳亦凡',0),(2,'Abstention',0),(3,'Yes',1),(3,'No',1),(3,'Abstention',0);
/*!40000 ALTER TABLE `options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `region` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voteRecord`
--

DROP TABLE IF EXISTS `voteRecord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voteRecord` (
  `userID` varchar(50) NOT NULL,
  `issueID` int NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `userID` (`userID`),
  KEY `issueID` (`issueID`),
  CONSTRAINT `voteRecord_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`id`),
  CONSTRAINT `voteRecord_ibfk_2` FOREIGN KEY (`issueID`) REFERENCES `issue` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voteRecord`
--

LOCK TABLES `voteRecord` WRITE;
/*!40000 ALTER TABLE `voteRecord` DISABLE KEYS */;
/*!40000 ALTER TABLE `voteRecord` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-26  0:14:49
