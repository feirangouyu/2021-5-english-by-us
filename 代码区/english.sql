/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 80020
Source Host           : localhost:3306
Source Database       : english

Target Server Type    : MYSQL
Target Server Version : 80020
File Encoding         : 65001

Date: 2021-06-08 17:05:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `integrallist`
-- ----------------------------
DROP TABLE IF EXISTS `integrallist`;
CREATE TABLE `integrallist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `integral` int NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of integrallist
-- ----------------------------
INSERT INTO `integrallist` VALUES ('1', '1', '7', '2021-05-12 16:02:25');
INSERT INTO `integrallist` VALUES ('2', '2', '3', '2021-05-12 16:14:40');
INSERT INTO `integrallist` VALUES ('3', '1', '1', '2021-05-13 11:28:37');
INSERT INTO `integrallist` VALUES ('4', '1', '0', '2021-05-14 17:17:26');
INSERT INTO `integrallist` VALUES ('5', '1', '0', '2021-05-14 17:17:56');
INSERT INTO `integrallist` VALUES ('6', '1', '0', '2021-05-14 17:18:17');
INSERT INTO `integrallist` VALUES ('7', '1', '0', '2021-05-14 17:18:54');
INSERT INTO `integrallist` VALUES ('8', '1', '0', '2021-05-14 17:20:06');
INSERT INTO `integrallist` VALUES ('9', '1', '0', '2021-05-14 17:21:24');
INSERT INTO `integrallist` VALUES ('10', '3', '2', '2021-05-19 21:54:37');
INSERT INTO `integrallist` VALUES ('11', '3', '0', '2021-05-19 21:55:00');
INSERT INTO `integrallist` VALUES ('12', '1', '1', '2021-06-07 11:42:31');
INSERT INTO `integrallist` VALUES ('13', '1', '0', '2021-06-07 11:43:15');
INSERT INTO `integrallist` VALUES ('14', '1', '0', '2021-06-07 14:27:26');
INSERT INTO `integrallist` VALUES ('15', '1', '2', '2021-06-07 14:27:45');
INSERT INTO `integrallist` VALUES ('16', '3', '1', '2021-06-07 15:33:48');
INSERT INTO `integrallist` VALUES ('17', '1', '2', '2021-06-07 17:45:51');
INSERT INTO `integrallist` VALUES ('18', '8', '0', '2021-06-08 10:40:20');
INSERT INTO `integrallist` VALUES ('19', '1', '0', '2021-06-08 12:23:27');
INSERT INTO `integrallist` VALUES ('20', '1', '1', '2021-06-08 13:11:44');
INSERT INTO `integrallist` VALUES ('21', '1', '1', '2021-06-08 13:35:05');
INSERT INTO `integrallist` VALUES ('22', '4', '0', '2021-06-08 14:16:14');
INSERT INTO `integrallist` VALUES ('23', '4', '2', '2021-06-08 14:16:35');
INSERT INTO `integrallist` VALUES ('24', '1', '1', '2021-06-08 16:40:09');

-- ----------------------------
-- Table structure for `learningrecord`
-- ----------------------------
DROP TABLE IF EXISTS `learningrecord`;
CREATE TABLE `learningrecord` (
  `user_id` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `test_id` int NOT NULL,
  `title_id` int NOT NULL,
  `correct` varchar(10) NOT NULL,
  `ctime` datetime NOT NULL,
  `answer` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=249 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of learningrecord
-- ----------------------------
INSERT INTO `learningrecord` VALUES ('1', '1', '1', '1', 'true', '2021-05-12 16:02:25', 'D');
INSERT INTO `learningrecord` VALUES ('1', '2', '1', '2', 'true', '2021-05-12 16:02:25', 'C');
INSERT INTO `learningrecord` VALUES ('1', '3', '1', '3', 'true', '2021-05-12 16:02:25', 'A');
INSERT INTO `learningrecord` VALUES ('1', '4', '1', '4', 'true', '2021-05-12 16:02:25', 'D');
INSERT INTO `learningrecord` VALUES ('1', '5', '1', '5', 'true', '2021-05-12 16:02:25', 'B');
INSERT INTO `learningrecord` VALUES ('1', '6', '1', '6', 'true', '2021-05-12 16:02:25', 'D');
INSERT INTO `learningrecord` VALUES ('1', '7', '1', '7', 'true', '2021-05-12 16:02:25', 'A');
INSERT INTO `learningrecord` VALUES ('1', '8', '1', '8', 'false', '2021-05-12 16:02:25', 'HHH');
INSERT INTO `learningrecord` VALUES ('1', '9', '1', '9', 'false', '2021-05-12 16:02:25', 'HH');
INSERT INTO `learningrecord` VALUES ('1', '10', '1', '10', 'false', '2021-05-12 16:02:25', 'HHH');
INSERT INTO `learningrecord` VALUES ('2', '11', '1', '1', 'false', '2021-05-12 16:14:40', 'C');
INSERT INTO `learningrecord` VALUES ('2', '12', '2', '1', 'true', '2021-05-12 16:14:40', 'D');
INSERT INTO `learningrecord` VALUES ('2', '13', '1', '2', 'false', '2021-05-12 16:14:40', 'D');
INSERT INTO `learningrecord` VALUES ('2', '14', '2', '2', 'false', '2021-05-12 16:14:40', 'D');
INSERT INTO `learningrecord` VALUES ('2', '15', '1', '3', 'false', '2021-05-12 16:14:40', 'D');
INSERT INTO `learningrecord` VALUES ('2', '16', '2', '3', 'false', '2021-05-12 16:14:40', 'D');
INSERT INTO `learningrecord` VALUES ('2', '17', '1', '4', 'true', '2021-05-12 16:14:40', 'D');
INSERT INTO `learningrecord` VALUES ('2', '18', '2', '4', 'true', '2021-05-12 16:14:40', 'D');
INSERT INTO `learningrecord` VALUES ('2', '19', '1', '5', 'false', '2021-05-12 16:14:40', 'C');
INSERT INTO `learningrecord` VALUES ('2', '20', '2', '5', 'false', '2021-05-12 16:14:40', 'C');
INSERT INTO `learningrecord` VALUES ('2', '21', '1', '6', 'false', '2021-05-12 16:14:40', 'C');
INSERT INTO `learningrecord` VALUES ('2', '22', '2', '6', 'false', '2021-05-12 16:14:40', 'C');
INSERT INTO `learningrecord` VALUES ('2', '23', '1', '7', 'false', '2021-05-12 16:14:40', 'C');
INSERT INTO `learningrecord` VALUES ('2', '24', '2', '7', 'false', '2021-05-12 16:14:40', 'D');
INSERT INTO `learningrecord` VALUES ('1', '25', '1', '1', 'false', '2021-05-13 11:28:37', 'A');
INSERT INTO `learningrecord` VALUES ('1', '26', '1', '2', 'true', '2021-05-13 11:28:37', 'C');
INSERT INTO `learningrecord` VALUES ('1', '27', '1', '3', 'false', '2021-05-13 11:28:37', 'B');
INSERT INTO `learningrecord` VALUES ('1', '28', '1', '4', 'false', '2021-05-13 11:28:37', 'C');
INSERT INTO `learningrecord` VALUES ('1', '29', '1', '5', 'false', '2021-05-13 11:28:37', 'A');
INSERT INTO `learningrecord` VALUES ('1', '30', '1', '6', 'false', '2021-05-13 11:28:37', 'B');
INSERT INTO `learningrecord` VALUES ('1', '31', '1', '7', 'false', '2021-05-13 11:28:37', '无');
INSERT INTO `learningrecord` VALUES ('1', '32', '1', '8', 'false', '2021-05-13 11:28:37', '无');
INSERT INTO `learningrecord` VALUES ('1', '33', '1', '9', 'false', '2021-05-13 11:28:37', '无');
INSERT INTO `learningrecord` VALUES ('1', '34', '1', '10', 'false', '2021-05-13 11:28:37', '无');
INSERT INTO `learningrecord` VALUES ('1', '35', '1', '1', 'false', '2021-05-14 17:17:26', 'B');
INSERT INTO `learningrecord` VALUES ('1', '36', '1', '2', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '37', '1', '3', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '38', '1', '4', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '39', '1', '5', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '40', '1', '6', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '41', '1', '7', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '42', '1', '8', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '43', '1', '9', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '44', '1', '10', 'false', '2021-05-14 17:17:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '45', '1', '1', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '46', '1', '2', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '47', '1', '3', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '48', '1', '4', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '49', '1', '5', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '50', '1', '6', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '51', '1', '7', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '52', '1', '8', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '53', '1', '9', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '54', '1', '10', 'false', '2021-05-14 17:17:56', '无');
INSERT INTO `learningrecord` VALUES ('1', '55', '1', '1', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '56', '1', '2', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '57', '1', '3', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '58', '1', '4', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '59', '1', '5', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '60', '1', '6', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '61', '1', '7', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '62', '1', '8', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '63', '1', '9', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '64', '1', '10', 'false', '2021-05-14 17:18:17', '无');
INSERT INTO `learningrecord` VALUES ('1', '65', '1', '8', 'false', '2021-05-14 17:18:54', '无');
INSERT INTO `learningrecord` VALUES ('1', '66', '2', '8', 'false', '2021-05-14 17:18:54', '无');
INSERT INTO `learningrecord` VALUES ('1', '67', '1', '9', 'false', '2021-05-14 17:18:54', '无');
INSERT INTO `learningrecord` VALUES ('1', '68', '2', '9', 'false', '2021-05-14 17:18:54', '无');
INSERT INTO `learningrecord` VALUES ('1', '69', '1', '10', 'false', '2021-05-14 17:18:54', '无');
INSERT INTO `learningrecord` VALUES ('1', '70', '2', '10', 'false', '2021-05-14 17:18:54', '无');
INSERT INTO `learningrecord` VALUES ('1', '71', '1', '1', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '72', '1', '2', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '73', '1', '3', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '74', '1', '4', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '75', '1', '5', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '76', '1', '6', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '77', '1', '7', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '78', '1', '8', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '79', '1', '9', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '80', '1', '10', 'false', '2021-05-14 17:20:06', '无');
INSERT INTO `learningrecord` VALUES ('1', '81', '1', '1', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '82', '1', '2', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '83', '1', '3', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '84', '1', '4', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '85', '1', '5', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '86', '1', '6', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '87', '1', '7', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '88', '1', '8', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '89', '1', '9', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('1', '90', '1', '10', 'false', '2021-05-14 17:21:24', '无');
INSERT INTO `learningrecord` VALUES ('3', '91', '1', '1', 'false', '2021-05-19 21:54:37', 'C');
INSERT INTO `learningrecord` VALUES ('3', '92', '1', '2', 'true', '2021-05-19 21:54:37', 'C');
INSERT INTO `learningrecord` VALUES ('3', '93', '1', '3', 'false', '2021-05-19 21:54:37', 'B');
INSERT INTO `learningrecord` VALUES ('3', '94', '1', '4', 'false', '2021-05-19 21:54:37', 'B');
INSERT INTO `learningrecord` VALUES ('3', '95', '1', '5', 'true', '2021-05-19 21:54:37', 'B');
INSERT INTO `learningrecord` VALUES ('3', '96', '1', '6', 'false', '2021-05-19 21:54:37', 'C');
INSERT INTO `learningrecord` VALUES ('3', '97', '1', '7', 'false', '2021-05-19 21:54:37', 'B');
INSERT INTO `learningrecord` VALUES ('3', '98', '1', '8', 'false', '2021-05-19 21:54:37', 'aaaaaaaaaaaaa');
INSERT INTO `learningrecord` VALUES ('3', '99', '1', '9', 'false', '2021-05-19 21:54:37', 'aaaaaaaaaaaaa');
INSERT INTO `learningrecord` VALUES ('3', '100', '1', '10', 'false', '2021-05-19 21:54:37', 'aaaaaaaaaaaaaa');
INSERT INTO `learningrecord` VALUES ('3', '101', '1', '8', 'false', '2021-05-19 21:55:00', 'bbbbbbbbb');
INSERT INTO `learningrecord` VALUES ('3', '102', '2', '8', 'false', '2021-05-19 21:55:00', '无');
INSERT INTO `learningrecord` VALUES ('3', '103', '1', '9', 'false', '2021-05-19 21:55:00', 'bbbbbbbbbbbbb');
INSERT INTO `learningrecord` VALUES ('3', '104', '2', '9', 'false', '2021-05-19 21:55:00', '无');
INSERT INTO `learningrecord` VALUES ('3', '105', '1', '10', 'false', '2021-05-19 21:55:00', '无');
INSERT INTO `learningrecord` VALUES ('3', '106', '2', '10', 'false', '2021-05-19 21:55:00', '无');
INSERT INTO `learningrecord` VALUES ('1', '107', '1', '1', 'false', '2021-06-07 11:42:31', 'B');
INSERT INTO `learningrecord` VALUES ('1', '108', '1', '2', 'false', '2021-06-07 11:42:31', 'B');
INSERT INTO `learningrecord` VALUES ('1', '109', '1', '3', 'false', '2021-06-07 11:42:31', 'B');
INSERT INTO `learningrecord` VALUES ('1', '110', '1', '4', 'false', '2021-06-07 11:42:31', 'B');
INSERT INTO `learningrecord` VALUES ('1', '111', '1', '5', 'true', '2021-06-07 11:42:31', 'B');
INSERT INTO `learningrecord` VALUES ('1', '112', '1', '6', 'false', '2021-06-07 11:42:31', 'B');
INSERT INTO `learningrecord` VALUES ('1', '113', '1', '7', 'false', '2021-06-07 11:42:31', 'B');
INSERT INTO `learningrecord` VALUES ('1', '114', '1', '8', 'false', '2021-06-07 11:42:31', 'gggggggg');
INSERT INTO `learningrecord` VALUES ('1', '115', '1', '9', 'false', '2021-06-07 11:42:31', 'ggggggggggg');
INSERT INTO `learningrecord` VALUES ('1', '116', '1', '10', 'false', '2021-06-07 11:42:31', 'ggggggggggggg');
INSERT INTO `learningrecord` VALUES ('1', '117', '1', '1', 'false', '2021-06-07 11:43:15', 'A');
INSERT INTO `learningrecord` VALUES ('1', '118', '2', '1', 'false', '2021-06-07 11:43:15', 'A');
INSERT INTO `learningrecord` VALUES ('1', '119', '1', '2', 'false', '2021-06-07 11:43:15', 'A');
INSERT INTO `learningrecord` VALUES ('1', '120', '2', '2', 'false', '2021-06-07 11:43:15', 'A');
INSERT INTO `learningrecord` VALUES ('1', '121', '1', '3', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '122', '2', '3', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '123', '1', '4', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '124', '2', '4', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '125', '1', '5', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '126', '2', '5', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '127', '1', '6', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '128', '2', '6', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '129', '1', '7', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '130', '2', '7', 'false', '2021-06-07 11:43:15', '无');
INSERT INTO `learningrecord` VALUES ('1', '131', '1', '1', 'false', '2021-06-07 14:27:26', 'C');
INSERT INTO `learningrecord` VALUES ('1', '132', '1', '2', 'false', '2021-06-07 14:27:26', 'B');
INSERT INTO `learningrecord` VALUES ('1', '133', '1', '3', 'false', '2021-06-07 14:27:26', 'B');
INSERT INTO `learningrecord` VALUES ('1', '134', '1', '4', 'false', '2021-06-07 14:27:26', 'B');
INSERT INTO `learningrecord` VALUES ('1', '135', '1', '5', 'false', '2021-06-07 14:27:26', 'A');
INSERT INTO `learningrecord` VALUES ('1', '136', '1', '6', 'false', '2021-06-07 14:27:26', 'B');
INSERT INTO `learningrecord` VALUES ('1', '137', '1', '7', 'false', '2021-06-07 14:27:26', 'B');
INSERT INTO `learningrecord` VALUES ('1', '138', '1', '8', 'false', '2021-06-07 14:27:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '139', '1', '9', 'false', '2021-06-07 14:27:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '140', '1', '10', 'false', '2021-06-07 14:27:26', '无');
INSERT INTO `learningrecord` VALUES ('1', '141', '1', '1', 'true', '2021-06-07 14:27:45', 'D');
INSERT INTO `learningrecord` VALUES ('1', '142', '1', '2', 'true', '2021-06-07 14:27:45', 'C');
INSERT INTO `learningrecord` VALUES ('1', '143', '1', '3', 'false', '2021-06-07 14:27:45', 'B');
INSERT INTO `learningrecord` VALUES ('1', '144', '1', '4', 'false', '2021-06-07 14:27:45', '无');
INSERT INTO `learningrecord` VALUES ('1', '145', '1', '5', 'false', '2021-06-07 14:27:45', '无');
INSERT INTO `learningrecord` VALUES ('1', '146', '1', '6', 'false', '2021-06-07 14:27:45', '无');
INSERT INTO `learningrecord` VALUES ('1', '147', '1', '7', 'false', '2021-06-07 14:27:45', '无');
INSERT INTO `learningrecord` VALUES ('1', '148', '1', '8', 'false', '2021-06-07 14:27:45', '无');
INSERT INTO `learningrecord` VALUES ('1', '149', '1', '9', 'false', '2021-06-07 14:27:45', '无');
INSERT INTO `learningrecord` VALUES ('1', '150', '1', '10', 'false', '2021-06-07 14:27:45', '无');
INSERT INTO `learningrecord` VALUES ('3', '151', '1', '1', 'false', '2021-06-07 15:33:48', 'C');
INSERT INTO `learningrecord` VALUES ('3', '152', '1', '2', 'true', '2021-06-07 15:33:48', 'C');
INSERT INTO `learningrecord` VALUES ('3', '153', '1', '3', 'false', '2021-06-07 15:33:48', 'C');
INSERT INTO `learningrecord` VALUES ('3', '154', '1', '4', 'false', '2021-06-07 15:33:48', 'B');
INSERT INTO `learningrecord` VALUES ('3', '155', '1', '5', 'false', '2021-06-07 15:33:48', '无');
INSERT INTO `learningrecord` VALUES ('3', '156', '1', '6', 'false', '2021-06-07 15:33:48', '无');
INSERT INTO `learningrecord` VALUES ('3', '157', '1', '7', 'false', '2021-06-07 15:33:48', '无');
INSERT INTO `learningrecord` VALUES ('3', '158', '1', '8', 'false', '2021-06-07 15:33:48', '无');
INSERT INTO `learningrecord` VALUES ('3', '159', '1', '9', 'false', '2021-06-07 15:33:48', '无');
INSERT INTO `learningrecord` VALUES ('3', '160', '1', '10', 'false', '2021-06-07 15:33:48', '无');
INSERT INTO `learningrecord` VALUES ('1', '161', '1', '1', 'false', '2021-06-07 17:45:51', 'B');
INSERT INTO `learningrecord` VALUES ('1', '162', '1', '2', 'true', '2021-06-07 17:45:51', 'C');
INSERT INTO `learningrecord` VALUES ('1', '163', '1', '3', 'false', '2021-06-07 17:45:51', 'B');
INSERT INTO `learningrecord` VALUES ('1', '164', '1', '4', 'false', '2021-06-07 17:45:51', 'B');
INSERT INTO `learningrecord` VALUES ('1', '165', '1', '5', 'true', '2021-06-07 17:45:51', 'B');
INSERT INTO `learningrecord` VALUES ('1', '166', '1', '6', 'false', '2021-06-07 17:45:51', '无');
INSERT INTO `learningrecord` VALUES ('1', '167', '1', '7', 'false', '2021-06-07 17:45:51', '无');
INSERT INTO `learningrecord` VALUES ('1', '168', '1', '8', 'false', '2021-06-07 17:45:51', '无');
INSERT INTO `learningrecord` VALUES ('1', '169', '1', '9', 'false', '2021-06-07 17:45:51', '无');
INSERT INTO `learningrecord` VALUES ('1', '170', '1', '10', 'false', '2021-06-07 17:45:51', '无');
INSERT INTO `learningrecord` VALUES ('8', '171', '1', '1', 'false', '2021-06-08 10:40:20', 'C');
INSERT INTO `learningrecord` VALUES ('8', '172', '1', '2', 'false', '2021-06-08 10:40:20', 'B');
INSERT INTO `learningrecord` VALUES ('8', '173', '1', '3', 'false', '2021-06-08 10:40:20', 'B');
INSERT INTO `learningrecord` VALUES ('8', '174', '1', '4', 'false', '2021-06-08 10:40:20', 'B');
INSERT INTO `learningrecord` VALUES ('8', '175', '1', '5', 'false', '2021-06-08 10:40:20', '无');
INSERT INTO `learningrecord` VALUES ('8', '176', '1', '6', 'false', '2021-06-08 10:40:20', '无');
INSERT INTO `learningrecord` VALUES ('8', '177', '1', '7', 'false', '2021-06-08 10:40:20', '无');
INSERT INTO `learningrecord` VALUES ('8', '178', '1', '8', 'false', '2021-06-08 10:40:20', '无');
INSERT INTO `learningrecord` VALUES ('8', '179', '1', '9', 'false', '2021-06-08 10:40:20', '无');
INSERT INTO `learningrecord` VALUES ('8', '180', '1', '10', 'false', '2021-06-08 10:40:20', '无');
INSERT INTO `learningrecord` VALUES ('1', '181', '1', '1', 'false', '2021-06-08 12:23:27', 'A');
INSERT INTO `learningrecord` VALUES ('1', '182', '1', '2', 'false', '2021-06-08 12:23:27', 'A');
INSERT INTO `learningrecord` VALUES ('1', '183', '1', '3', 'false', '2021-06-08 12:23:27', 'C');
INSERT INTO `learningrecord` VALUES ('1', '184', '1', '4', 'false', '2021-06-08 12:23:27', 'C');
INSERT INTO `learningrecord` VALUES ('1', '185', '1', '5', 'false', '2021-06-08 12:23:27', 'C');
INSERT INTO `learningrecord` VALUES ('1', '186', '1', '6', 'false', '2021-06-08 12:23:27', 'B');
INSERT INTO `learningrecord` VALUES ('1', '187', '1', '7', 'false', '2021-06-08 12:23:27', 'B');
INSERT INTO `learningrecord` VALUES ('1', '188', '1', '8', 'false', '2021-06-08 12:23:27', 'xsac');
INSERT INTO `learningrecord` VALUES ('1', '189', '1', '9', 'false', '2021-06-08 12:23:27', 'xX');
INSERT INTO `learningrecord` VALUES ('1', '190', '1', '10', 'false', '2021-06-08 12:23:27', 'Xa');
INSERT INTO `learningrecord` VALUES ('1', '191', '1', '1', 'false', '2021-06-08 13:11:44', 'A');
INSERT INTO `learningrecord` VALUES ('1', '192', '1', '2', 'false', '2021-06-08 13:11:44', 'B');
INSERT INTO `learningrecord` VALUES ('1', '193', '1', '3', 'false', '2021-06-08 13:11:44', 'C');
INSERT INTO `learningrecord` VALUES ('1', '194', '1', '4', 'false', '2021-06-08 13:11:44', 'B');
INSERT INTO `learningrecord` VALUES ('1', '195', '1', '5', 'true', '2021-06-08 13:11:44', 'B');
INSERT INTO `learningrecord` VALUES ('1', '196', '1', '6', 'false', '2021-06-08 13:11:44', 'B');
INSERT INTO `learningrecord` VALUES ('1', '197', '1', '7', 'false', '2021-06-08 13:11:44', 'B');
INSERT INTO `learningrecord` VALUES ('1', '198', '1', '8', 'false', '2021-06-08 13:11:44', 'dq');
INSERT INTO `learningrecord` VALUES ('1', '199', '1', '9', 'false', '2021-06-08 13:11:44', 'dd');
INSERT INTO `learningrecord` VALUES ('1', '200', '1', '10', 'false', '2021-06-08 13:11:44', 'dd');
INSERT INTO `learningrecord` VALUES ('1', '201', '1', '1', 'false', '2021-06-08 13:35:05', 'B');
INSERT INTO `learningrecord` VALUES ('1', '202', '1', '2', 'true', '2021-06-08 13:35:05', 'C');
INSERT INTO `learningrecord` VALUES ('1', '203', '1', '3', 'false', '2021-06-08 13:35:05', '无');
INSERT INTO `learningrecord` VALUES ('1', '204', '1', '4', 'false', '2021-06-08 13:35:05', '无');
INSERT INTO `learningrecord` VALUES ('1', '205', '1', '5', 'false', '2021-06-08 13:35:05', 'A');
INSERT INTO `learningrecord` VALUES ('1', '206', '1', '6', 'false', '2021-06-08 13:35:05', 'B');
INSERT INTO `learningrecord` VALUES ('1', '207', '1', '7', 'false', '2021-06-08 13:35:05', '无');
INSERT INTO `learningrecord` VALUES ('1', '208', '1', '8', 'false', '2021-06-08 13:35:05', '无');
INSERT INTO `learningrecord` VALUES ('1', '209', '1', '9', 'false', '2021-06-08 13:35:05', '无');
INSERT INTO `learningrecord` VALUES ('1', '210', '1', '10', 'false', '2021-06-08 13:35:05', '无');
INSERT INTO `learningrecord` VALUES ('4', '211', '1', '1', 'false', '2021-06-08 14:16:14', 'C');
INSERT INTO `learningrecord` VALUES ('4', '212', '2', '1', 'false', '2021-06-08 14:16:14', 'A');
INSERT INTO `learningrecord` VALUES ('4', '213', '1', '2', 'false', '2021-06-08 14:16:14', 'A');
INSERT INTO `learningrecord` VALUES ('4', '214', '2', '2', 'false', '2021-06-08 14:16:14', 'B');
INSERT INTO `learningrecord` VALUES ('4', '215', '1', '3', 'false', '2021-06-08 14:16:14', 'B');
INSERT INTO `learningrecord` VALUES ('4', '216', '2', '3', 'false', '2021-06-08 14:16:14', 'D');
INSERT INTO `learningrecord` VALUES ('4', '217', '1', '4', 'false', '2021-06-08 14:16:14', 'C');
INSERT INTO `learningrecord` VALUES ('4', '218', '2', '4', 'false', '2021-06-08 14:16:14', 'B');
INSERT INTO `learningrecord` VALUES ('4', '219', '1', '5', 'false', '2021-06-08 14:16:14', 'A');
INSERT INTO `learningrecord` VALUES ('4', '220', '2', '5', 'false', '2021-06-08 14:16:14', '无');
INSERT INTO `learningrecord` VALUES ('4', '221', '1', '6', 'false', '2021-06-08 14:16:14', '无');
INSERT INTO `learningrecord` VALUES ('4', '222', '2', '6', 'false', '2021-06-08 14:16:14', '无');
INSERT INTO `learningrecord` VALUES ('4', '223', '1', '7', 'false', '2021-06-08 14:16:14', '无');
INSERT INTO `learningrecord` VALUES ('4', '224', '2', '7', 'false', '2021-06-08 14:16:14', '无');
INSERT INTO `learningrecord` VALUES ('4', '225', '1', '1', 'false', '2021-06-08 14:16:35', 'C');
INSERT INTO `learningrecord` VALUES ('4', '226', '2', '1', 'false', '2021-06-08 14:16:35', 'C');
INSERT INTO `learningrecord` VALUES ('4', '227', '1', '2', 'true', '2021-06-08 14:16:35', 'C');
INSERT INTO `learningrecord` VALUES ('4', '228', '2', '2', 'true', '2021-06-08 14:16:35', 'C');
INSERT INTO `learningrecord` VALUES ('4', '229', '1', '3', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '230', '2', '3', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '231', '1', '4', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '232', '2', '4', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '233', '1', '5', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '234', '2', '5', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '235', '1', '6', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '236', '2', '6', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '237', '1', '7', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('4', '238', '2', '7', 'false', '2021-06-08 14:16:35', '无');
INSERT INTO `learningrecord` VALUES ('1', '239', '1', '1', 'false', '2021-06-08 16:41:11', 'C');
INSERT INTO `learningrecord` VALUES ('1', '240', '1', '2', 'false', '2021-06-08 16:41:11', 'B');
INSERT INTO `learningrecord` VALUES ('1', '241', '1', '3', 'false', '2021-06-08 16:41:11', 'B');
INSERT INTO `learningrecord` VALUES ('1', '242', '1', '4', 'false', '2021-06-08 16:41:11', 'B');
INSERT INTO `learningrecord` VALUES ('1', '243', '1', '5', 'true', '2021-06-08 16:41:11', 'B');
INSERT INTO `learningrecord` VALUES ('1', '244', '1', '6', 'false', '2021-06-08 16:41:11', 'B');
INSERT INTO `learningrecord` VALUES ('1', '245', '1', '7', 'false', '2021-06-08 16:41:11', 'B');
INSERT INTO `learningrecord` VALUES ('1', '246', '1', '8', 'false', '2021-06-08 16:41:11', 'cvvvvv');
INSERT INTO `learningrecord` VALUES ('1', '247', '1', '9', 'false', '2021-06-08 16:41:11', 'vvvvvvv');
INSERT INTO `learningrecord` VALUES ('1', '248', '1', '10', 'false', '2021-06-08 16:41:11', 'vvvvvvvvvv');

-- ----------------------------
-- Table structure for `personalinformation`
-- ----------------------------
DROP TABLE IF EXISTS `personalinformation`;
CREATE TABLE `personalinformation` (
  `user_id` int NOT NULL,
  `user_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sex` varchar(5) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `integral` int NOT NULL DEFAULT '0',
  `email` varchar(20) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `signa` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of personalinformation
-- ----------------------------
INSERT INTO `personalinformation` VALUES ('1', 'huwen', '19967294636', '男', '21', '26', '2280326172@qq.com', 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/70bf09e5960dfc4e3abd769a1ca45c32~300x300.image', '夜色扰人');
INSERT INTO `personalinformation` VALUES ('2', 'zouyun', '19967294637', '女', '19', '6', '', 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/70bf09e5960dfc4e3abd769a1ca45c32~300x300.image', '嘿嘿');
INSERT INTO `personalinformation` VALUES ('3', 'jinjie', '19967294638', '女', '17', '5', '', 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/70bf09e5960dfc4e3abd769a1ca45c32~300x300.image', '嘿嘿jinjie');
INSERT INTO `personalinformation` VALUES ('4', 'maorunyu', '19967294639', '女', '19', '3', '', 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/70bf09e5960dfc4e3abd769a1ca45c32~300x300.image', '嘿嘿');
INSERT INTO `personalinformation` VALUES ('5', 'ruiqiu', '19967294640', null, null, '0', null, 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/70bf09e5960dfc4e3abd769a1ca45c32~300x300.image', '嘿嘿');
INSERT INTO `personalinformation` VALUES ('6', 'lila', '19967294641', null, null, '0', null, 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/70bf09e5960dfc4e3abd769a1ca45c32~300x300.image', '嘿嘿');
INSERT INTO `personalinformation` VALUES ('7', 'rain', '19967294642', null, null, '0', null, 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/70bf09e5960dfc4e3abd769a1ca45c32~300x300.image', '');
INSERT INTO `personalinformation` VALUES ('8', 'yjz', '17670345062', null, null, '0', null, 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/70bf09e5960dfc4e3abd769a1ca45c32~300x300.image', '');

-- ----------------------------
-- Table structure for `pklist`
-- ----------------------------
DROP TABLE IF EXISTS `pklist`;
CREATE TABLE `pklist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `1p_user_id` int NOT NULL,
  `2p_user_id` int NOT NULL,
  `1p_integral` int NOT NULL,
  `2p_integral` int NOT NULL,
  `ctime` datetime NOT NULL,
  `win_user` int NOT NULL,
  `win_integral` int NOT NULL,
  `room_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pklist
-- ----------------------------
INSERT INTO `pklist` VALUES ('1', '2', '1', '0', '4', '2021-06-08 14:24:15', '1', '4', '1');
INSERT INTO `pklist` VALUES ('2', '1', '3', '8', '1', '2021-06-08 16:43:24', '1', '8', '2');

-- ----------------------------
-- Table structure for `pkroom`
-- ----------------------------
DROP TABLE IF EXISTS `pkroom`;
CREATE TABLE `pkroom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `1p_user_id` int NOT NULL,
  `2p_user_id` int DEFAULT NULL,
  `1p_title_num` int NOT NULL DEFAULT '0',
  `2p_title_num` int NOT NULL DEFAULT '0',
  `1p_integral` int NOT NULL DEFAULT '0',
  `2p_integral` int NOT NULL DEFAULT '0',
  `ctime` datetime NOT NULL,
  `state` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pkroom
-- ----------------------------
INSERT INTO `pkroom` VALUES ('1', '2', '1', '3', '9', '0', '4', '2021-06-08 14:22:27', '4');
INSERT INTO `pkroom` VALUES ('2', '1', '3', '9', '2', '8', '1', '2021-06-08 16:42:22', '4');

-- ----------------------------
-- Table structure for `pkword`
-- ----------------------------
DROP TABLE IF EXISTS `pkword`;
CREATE TABLE `pkword` (
  `word_id` int NOT NULL AUTO_INCREMENT,
  `word_content` text NOT NULL,
  `word_options` text NOT NULL,
  `word_answer` text NOT NULL,
  `word_score` int NOT NULL,
  PRIMARY KEY (`word_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pkword
-- ----------------------------
INSERT INTO `pkword` VALUES ('1', 'painting', '简短的警句;在 ....下面,在下面;画作，绘;非常漂亮的', 'C', '1');
INSERT INTO `pkword` VALUES ('2', 'purple', '目的，意图，打算;紫色的， 紫色;犯罪嫌疑人，可疑分子， 可疑的; 穿，使交叉，十字架', 'B', '1');
INSERT INTO `pkword` VALUES ('3', 'glimpse', '开明的人;一瞥,一瞥,瞥见;落实，执行，履行;遥远的', 'B', '1');
INSERT INTO `pkword` VALUES ('4', 'influential', '有影响力的;批评,批判,评论;胜利，凯旋,成功, 获胜;切成片大幅度削减,切开', 'A', '1');
INSERT INTO `pkword` VALUES ('5', 'mad', '棉花;恐怖,惊骇;异常狂暴的,蠢笨的,精神错乱的;整理,组织,安排,筹办', 'C', '1');
INSERT INTO `pkword` VALUES ('6', 'suburb', '显著的,非凡的,卓越的;表演;郊区;标签,称号', 'C', '1');
INSERT INTO `pkword` VALUES ('7', 'immune', '过道, (座位间的)通道;免疫的，有免疫力的,免除的;讨价还价,便宜货, 交易,契约;品尝,尝起来,品鉴, 味道,鉴赏力', 'B', '1');
INSERT INTO `pkword` VALUES ('8', 'religion', '增强;评价;宗教信仰,虔诚的追求;想象的,虚构的', 'C', '1');
INSERT INTO `pkword` VALUES ('9', 'additional', '有影响力的;种类,物种,人类;增加的,附加的;\n富有活力的,活泼的', 'C', '1');
INSERT INTO `pkword` VALUES ('10', 'visual', '源自,获得;光线,(房屋等的)大梁, (横)梁,发;标签,称号;看的,视觉的', 'D', '1');
INSERT INTO `pkword` VALUES ('11', 'customer', '比较,对照比较等级,比喻;把....强加给,强制实行,强迫接受;奶制的，牛奶的,牛奶场;顾客', 'D', '1');
INSERT INTO `pkword` VALUES ('12', 'delay', '签名,署名;推迟，耽误,延期, 耽误;住宅，房屋,住房供给;程序,编写程序', 'B', '1');
INSERT INTO `pkword` VALUES ('13', 'inferior', '(等级、地位等)低等的,低劣的;出版,发行,出版物,公布;差异,对照，对比,对照, 对比;内部的，里面的,内心的,内部', 'A', '1');
INSERT INTO `pkword` VALUES ('14', 'representative', '百分比;难题,经济拮据;代表, 典型的,有代表性的;管理的', 'C', '1');
INSERT INTO `pkword` VALUES ('15', 'relation', '严重地,非常;碗,(保龄球等运动使用的)木球;宽容的;关系，联系', 'D', '1');

-- ----------------------------
-- Table structure for `question`
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '问题id',
  `user_id` int NOT NULL COMMENT '提出问题者',
  `question` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '问题或分享',
  `num` int unsigned DEFAULT '0' COMMENT '回答数',
  `focus` int unsigned DEFAULT '0' COMMENT '关注数',
  `ctime` datetime NOT NULL COMMENT '时间戳',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of question
-- ----------------------------
INSERT INTO `question` VALUES ('1', '1', '今天的每日一练有谁能讲讲吗？', '1', '10', '2021-05-12 15:28:05');
INSERT INTO `question` VALUES ('2', '2', '英语听力反复练习总是不能提高，有什么好多方法推荐吗？', '1', '3', '2021-05-13 15:29:14');
INSERT INTO `question` VALUES ('3', '2', '怎么样才能从英语很糟糕的人变成英语很厉害的人？', '2', '5', '2021-05-14 15:30:13');
INSERT INTO `question` VALUES ('4', '5', '有哪些高级的英语表达技巧，让人一听就觉得很地道？', '1', '1', '2021-05-15 15:31:07');
INSERT INTO `question` VALUES ('5', '4', '关于英语学习，我想说的是......?', '2', '0', '2021-05-16 15:31:46');
INSERT INTO `question` VALUES ('6', '3', '有哪些好的练习英语口语的方法?', '2', '3', '2021-05-17 15:32:19');
INSERT INTO `question` VALUES ('7', '1', '英语作文怎么写的优美', '3', '0', '2021-05-19 10:16:28');

-- ----------------------------
-- Table structure for `reply`
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '回答id',
  `user_id` int NOT NULL COMMENT '回答者id',
  `question_id` int NOT NULL COMMENT '回答题目id',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论内容',
  `likes` int unsigned DEFAULT NULL COMMENT '点赞数',
  `ctime` datetime NOT NULL COMMENT '时间戳',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of reply
-- ----------------------------
INSERT INTO `reply` VALUES ('1', '1', '1', '。。。', '1', '2021-05-18 14:07:31');
INSERT INTO `reply` VALUES ('2', '2', '2', '......', '1', '2021-05-18 14:07:35');
INSERT INTO `reply` VALUES ('3', '3', '3', '...', '0', '2021-05-18 14:08:11');
INSERT INTO `reply` VALUES ('4', '2', '4', '我也想知道', '0', '2021-05-18 21:19:04');
INSERT INTO `reply` VALUES ('5', '2', '6', '多看看吧', '0', '2021-05-18 21:54:58');
INSERT INTO `reply` VALUES ('6', '2', '5', '好难啊', '0', '2021-05-18 22:06:43');
INSERT INTO `reply` VALUES ('7', '2', '5', '多学多看多练', '0', '2021-05-19 10:14:50');
INSERT INTO `reply` VALUES ('8', '1', '7', 'uigbub', '0', '2021-06-07 17:46:30');
INSERT INTO `reply` VALUES ('9', '1', '6', 'hhknk', '0', '2021-06-07 17:46:36');
INSERT INTO `reply` VALUES ('10', '1', '7', 'df d ', '0', '2021-06-08 10:44:21');
INSERT INTO `reply` VALUES ('11', '3', '3', 'hhhhhhhhhhhhh', '0', '2021-06-08 16:44:57');

-- ----------------------------
-- Table structure for `test`
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `test_id` int NOT NULL AUTO_INCREMENT,
  `test_year` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `test_num` int DEFAULT NULL,
  `test_score` int DEFAULT NULL,
  `test_title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`test_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', '2020', '10', '100', '2020年四级考试真题试卷');
INSERT INTO `test` VALUES ('2', '2019', '10', '100', '2019年四级考试真题试卷');

-- ----------------------------
-- Table structure for `title`
-- ----------------------------
DROP TABLE IF EXISTS `title`;
CREATE TABLE `title` (
  `test_id` int NOT NULL,
  `title_id` int NOT NULL,
  `title_type` int NOT NULL,
  `title_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title_options` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `title_answer` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title_parsing` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `title_score` int NOT NULL,
  PRIMARY KEY (`title_id`,`test_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of title
-- ----------------------------
INSERT INTO `title` VALUES ('1', '1', '1', 'Would you like to have some coffee?', 'No, please;Yes, I like.;It is a pleasure.;No, thank you.', 'D', ' ', '10');
INSERT INTO `title` VALUES ('2', '1', '1', 'Lily was so ___looking at the picture that she forgot the time.', 'carefully;careful;busily;busy', 'B', '', '10');
INSERT INTO `title` VALUES ('1', '2', '1', 'Wow! This is a marvelous room! I\'ve never known you\'re so artistic', 'Great, I am very art-conscious.;Don\'t mention it.;Thanks for your compliments.;It\'s fine.', 'C', ' ', '10');
INSERT INTO `title` VALUES ('2', '2', '1', 'Putting paper cuts on the windows ______ good luck.', 'means;meaning;to mean;mean', 'A', '', '10');
INSERT INTO `title` VALUES ('1', '3', '1', 'Thanks for your help.', 'My pleasure.;Never mind.;Quite right.;Don\'t thank me.', 'A', ' ', '10');
INSERT INTO `title` VALUES ('2', '3', '1', 'Look!Tony is wearing a_______coat!', 'beautiful long red;long red beautiful;red beautifuo long;long beautiful red', 'A', '', '10');
INSERT INTO `title` VALUES ('1', '4', '1', 'Is it possible for you to work late tonight?     ', 'I like it.;I\'ll do that.;I\'d love to.;I think so.', 'D', ' ', '10');
INSERT INTO `title` VALUES ('2', '4', '1', 'The professor is going to _______us a report tomorrow .', 'give;have;talk;take', 'A', '', '10');
INSERT INTO `title` VALUES ('1', '5', '1', 'Do you mind my smoking here?', 'No, thanks.;Yes, I do.;Yes. I\'d rather not.;Good idea.', 'B', ' ', '10');
INSERT INTO `title` VALUES ('2', '5', '1', 'He ________ ten pounds on the books .', 'took;spend;used;had', 'B', '', '10');
INSERT INTO `title` VALUES ('1', '6', '1', 'Mr Baker _____________ his wallet at home this morning .', 'forgets;forgot;leaves;left', 'D', '', '10');
INSERT INTO `title` VALUES ('2', '6', '1', 'We can _________ the hill and walk on .', 'through;past;throughout;cross', 'D', '', '10');
INSERT INTO `title` VALUES ('1', '7', '1', 'I have lived here only for a week so I have __________ friends .', 'few;a few;little;a little', 'A', '', '10');
INSERT INTO `title` VALUES ('2', '7', '1', 'We planted trees on _________ sides of the street .', 'every;each;all;both', 'D', '', '10');
INSERT INTO `title` VALUES ('1', '8', '2', '中国汉族人的全名由姓和名组成。中文姓名的特点是，姓总是在前，名跟在其后。千百年来，父姓一直世代相传。然而，如今，孩子跟母亲姓并不罕见。一般来说，名有一个或两个汉字，通常承载父母对孩子的愿望。从孩子的名字可以推断出父母希望孩子成为什么样的人，或者期望他们过什么样的生活。父母非常重视给孩子取名，因为名字往往会伴随孩子一生。', '', 'The full name of a Han Chinese consists of a family name and a given name. A distinctive feature of the Chinese name is that the family name always comes first, followed by the given name. For thousands of years, Chinese family names have been passed down through the father. Nowadays, however, it is not uncommon for a child to adopt the mother\'s family name. Generally, a given name is made up of one or two characters, usually carrying the parents\' wishes for their child. It can be inferred from the name what kind of person the parents want their child to be, or what kind of life they expect him or her to lead. Chinese parents attach great importance to the choice of their child\'s name, as the name tends to accompany the child for his or her entire life.', ' ', '10');
INSERT INTO `title` VALUES ('2', '8', '2', '越来越多的中国人现在的确离不开手机了。他们中的许多人，包括老年人，都使用手机应用程序（apps）保持联系并拓宽朋友圈。他们也用手机购物、查找信息，因为手机便于携带。此外，使用手机应用程序通信比传统电话便宜。然而，这种新趋势导致人们在社交时过度依赖手机。事实上，一些年轻人已经变得十分上瘾，以至于忽视了与家人和朋友面对面的交流。', '', 'It is a fact that more and more Chinese can hardly live without their mobile phones nowadays. Many of them, including senior citizens, use mobile apps to keep in touch with others and expand their circles of friends. They also use mobile phones to shop online and search for information because they are portable. What\'s more, communication through mobile apps costs less than traditional phone calls. However, this new trend results in the over-reliance on mobile phones when people are socializing. As a matter of fact, some young people have become so addicted to mobile phones that they have neglected the face-to-face communication with their family and friends.', ' ', '10');
INSERT INTO `title` VALUES ('1', '9', '2', '中国的家庭观念与其文化传统有关。和睦的大家庭曾非常令人羡慕。过去四代同堂并不少见。由于这个传统，许多年轻人婚后继续与父母同住。今天，这个传统正在改变。随着住房条件的改善，越来越多年轻夫妇选择与父母分开住。但他们之间的联系仍然很密切。许多老年人仍然帮着照看孙辈。年轻夫妇也抽时间探望父母，特别是在春节和中秋节等重要节日。', '', 'China\'s family values are related to its cultural traditions. Harmonious extended families used to be very enviable. It was not uncommon in the past for four generations of a family to live under the same roof. According to the tradition, many young people continued to live with their parents after marriage. Today, that tradition is changing. As housing conditions improve, more and more young couples are opting to live apart from their parents. But the connections between them still remain strong. Many old people still help to look after their grandchildren. And young couples take time to visit their parents, especially during important festivals such as the Spring Festival and the Mid-Autumn Festival.', ' ', '10');
INSERT INTO `title` VALUES ('2', '9', '2', '由于通信网络的快速发展，中国智能手机用户数量近年来以惊人速度增长。这极大地改变了许多人的阅读方式。他们现在经常在智能手机上看新闻和文章，而不买传统报刊。大量移动应用程序（apps）的开发使人们能用手机读小说和其他形式的文学作品。因此，纸质书籍的销售受到了影响。但调查显示，尽管智能手机阅读市场稳步增长，超半数成年人仍喜欢读纸质书。', '', 'Because of the rapid development of communication network, the number of smartphone users in China has increased at an astonishing rate in recent years, which has significantly changed the way many people read. Nowadays they often read news and articles on smartphones instead of buying traditional newspapers and periodicals. The development of numerous mobile apps has enabled people to read novels and other forms of literary works on their mobile phones. Therefore, the sales of paper books have been affected. But surveys show that though smartphone reading market has grown steadily, over half of adults still enjoy reading paper books.', ' ', '10');
INSERT INTO `title` VALUES ('1', '10', '2', '中国家庭十分重视孩子的教育。许多父母认为应该努力工作，确保孩子受到良好教育。他们不仅非常情愿为孩子的教育投资，而且花很多时间督促他们学习。多数家长希望孩子能上名牌大学。由于改革开放，越来越多的家长能送孩子到国外学习或参与国际交流项目，以拓宽其视野。通过这些努力，他们期望孩子健康成长，为国家的发展和繁荣作出贡献。', '', 'Chinese families attach great importance to their children\'s education. Many parents hold that they should work hard to ensure their children\'s access to good education. Not only are they perfectly willing to invest in their children\'s education, but they also spend much time urging them to study. Most parents expect their children to get admitted to elite universities. Owing to China s reform and opening-up, an increasing number of parents can send their children to study abroad or participate in international exchange programs to broaden their horizons. Through these efforts, they expect their children grow up strong and healthy and make a contribution to the nation\'s development and prosperity.', ' ', '10');
INSERT INTO `title` VALUES ('2', '10', '2', '过去几年里，移动支付市场在中国蓬勃发展随着移动互联网的出现，手机购物逐渐成为一种趋势。18到30岁的年轻人构成了移动支付市场的最大群体。由于现在用手机付款很容易，许多消费者在购物时宁愿用手机付款而不愿用现金或信用卡为了鼓励人们多消费，许多商店给使用移动支付的顾客打折。专家预测，中国移动支付市场未来仍有很大发展潜力。', '', 'The mobile payment market has thrived in China during the past few years. With the advent of the mobile Internet, mobile shopping has gradually become a trend. Young people aged from 18 to 30 have constituted the largest group of the mobile payment market. Because it is quite easy to make a payment by phone, many consumers would rather pay by mobile phone than in cash or by credit card. In order to encourage people to spend more, many stores offer discounts to consumers who use the mobile payment. As is predicted by experts, the mobile payment market in China still has great potential for development in the future.', ' ', '10');

-- ----------------------------
-- Table structure for `userinformation`
-- ----------------------------
DROP TABLE IF EXISTS `userinformation`;
CREATE TABLE `userinformation` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_permiss` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'user',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinformation
-- ----------------------------
INSERT INTO `userinformation` VALUES ('1', 'huwen', 'e10adc3949ba59abbe56e057f20f883e', '19967294636', 'admin');
INSERT INTO `userinformation` VALUES ('2', 'zouyun', 'e10adc3949ba59abbe56e057f20f883e', '19967294637', 'admin');
INSERT INTO `userinformation` VALUES ('3', 'jinjie', 'e10adc3949ba59abbe56e057f20f883e', '19967294638', 'admin');
INSERT INTO `userinformation` VALUES ('4', 'maorunyu', 'e10adc3949ba59abbe56e057f20f883e', '19967294639', 'admin');
INSERT INTO `userinformation` VALUES ('5', 'ruiqiu', 'e10adc3949ba59abbe56e057f20f883e', '19967294640', 'user');
INSERT INTO `userinformation` VALUES ('6', 'lila', 'e10adc3949ba59abbe56e057f20f883e', '19967294641', 'user');
INSERT INTO `userinformation` VALUES ('7', 'rain', 'e10adc3949ba59abbe56e057f20f883e', '19967294642', 'user');
INSERT INTO `userinformation` VALUES ('8', 'yjz', 'e10adc3949ba59abbe56e057f20f883e', '17670345062', 'user');

-- ----------------------------
-- Table structure for `wrongtopic`
-- ----------------------------
DROP TABLE IF EXISTS `wrongtopic`;
CREATE TABLE `wrongtopic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `test_id` int NOT NULL,
  `title_id` int NOT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wrongtopic
-- ----------------------------
INSERT INTO `wrongtopic` VALUES ('1', '1', '1', '8', '2021-05-12 16:02:25');
INSERT INTO `wrongtopic` VALUES ('2', '1', '1', '9', '2021-05-12 16:02:25');
INSERT INTO `wrongtopic` VALUES ('3', '1', '1', '10', '2021-05-12 16:02:25');
INSERT INTO `wrongtopic` VALUES ('4', '2', '1', '1', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('5', '2', '1', '2', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('6', '2', '2', '2', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('7', '2', '1', '3', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('8', '2', '2', '3', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('9', '2', '1', '5', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('10', '2', '2', '5', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('11', '2', '1', '6', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('12', '2', '2', '6', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('13', '2', '1', '7', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('14', '2', '2', '7', '2021-05-12 16:14:40');
INSERT INTO `wrongtopic` VALUES ('15', '1', '1', '1', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('16', '1', '1', '3', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('17', '1', '1', '4', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('18', '1', '1', '5', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('19', '1', '1', '6', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('20', '1', '1', '7', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('21', '1', '1', '8', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('22', '1', '1', '9', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('23', '1', '1', '10', '2021-05-13 11:28:37');
INSERT INTO `wrongtopic` VALUES ('24', '1', '1', '1', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('25', '1', '1', '2', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('26', '1', '1', '3', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('27', '1', '1', '4', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('28', '1', '1', '5', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('29', '1', '1', '6', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('30', '1', '1', '7', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('31', '1', '1', '8', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('32', '1', '1', '9', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('33', '1', '1', '10', '2021-05-14 17:17:26');
INSERT INTO `wrongtopic` VALUES ('34', '1', '1', '1', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('35', '1', '1', '2', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('36', '1', '1', '3', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('37', '1', '1', '4', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('38', '1', '1', '5', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('39', '1', '1', '6', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('40', '1', '1', '7', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('41', '1', '1', '8', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('42', '1', '1', '9', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('43', '1', '1', '10', '2021-05-14 17:17:56');
INSERT INTO `wrongtopic` VALUES ('44', '1', '1', '1', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('45', '1', '1', '2', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('46', '1', '1', '3', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('47', '1', '1', '4', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('48', '1', '1', '5', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('49', '1', '1', '6', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('50', '1', '1', '7', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('51', '1', '1', '8', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('52', '1', '1', '9', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('53', '1', '1', '10', '2021-05-14 17:18:17');
INSERT INTO `wrongtopic` VALUES ('54', '1', '1', '8', '2021-05-14 17:18:54');
INSERT INTO `wrongtopic` VALUES ('55', '1', '2', '8', '2021-05-14 17:18:54');
INSERT INTO `wrongtopic` VALUES ('56', '1', '1', '9', '2021-05-14 17:18:54');
INSERT INTO `wrongtopic` VALUES ('57', '1', '2', '9', '2021-05-14 17:18:54');
INSERT INTO `wrongtopic` VALUES ('58', '1', '1', '10', '2021-05-14 17:18:54');
INSERT INTO `wrongtopic` VALUES ('59', '1', '2', '10', '2021-05-14 17:18:54');
INSERT INTO `wrongtopic` VALUES ('60', '1', '1', '1', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('61', '1', '1', '2', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('62', '1', '1', '3', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('63', '1', '1', '4', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('64', '1', '1', '5', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('65', '1', '1', '6', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('66', '1', '1', '7', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('67', '1', '1', '8', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('68', '1', '1', '9', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('69', '1', '1', '10', '2021-05-14 17:20:06');
INSERT INTO `wrongtopic` VALUES ('70', '1', '1', '1', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('71', '1', '1', '2', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('72', '1', '1', '3', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('73', '1', '1', '4', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('74', '1', '1', '5', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('75', '1', '1', '6', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('76', '1', '1', '7', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('77', '1', '1', '8', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('78', '1', '1', '9', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('79', '1', '1', '10', '2021-05-14 17:21:24');
INSERT INTO `wrongtopic` VALUES ('80', '3', '1', '1', '2021-05-19 21:54:37');
INSERT INTO `wrongtopic` VALUES ('81', '3', '1', '3', '2021-05-19 21:54:37');
INSERT INTO `wrongtopic` VALUES ('82', '3', '1', '4', '2021-05-19 21:54:37');
INSERT INTO `wrongtopic` VALUES ('83', '3', '1', '6', '2021-05-19 21:54:37');
INSERT INTO `wrongtopic` VALUES ('84', '3', '1', '7', '2021-05-19 21:54:37');
INSERT INTO `wrongtopic` VALUES ('85', '3', '1', '8', '2021-05-19 21:54:37');
INSERT INTO `wrongtopic` VALUES ('86', '3', '1', '9', '2021-05-19 21:54:37');
INSERT INTO `wrongtopic` VALUES ('87', '3', '1', '10', '2021-05-19 21:54:37');
INSERT INTO `wrongtopic` VALUES ('88', '3', '1', '8', '2021-05-19 21:55:00');
INSERT INTO `wrongtopic` VALUES ('89', '3', '2', '8', '2021-05-19 21:55:00');
INSERT INTO `wrongtopic` VALUES ('90', '3', '1', '9', '2021-05-19 21:55:00');
INSERT INTO `wrongtopic` VALUES ('91', '3', '2', '9', '2021-05-19 21:55:00');
INSERT INTO `wrongtopic` VALUES ('92', '3', '1', '10', '2021-05-19 21:55:00');
INSERT INTO `wrongtopic` VALUES ('93', '3', '2', '10', '2021-05-19 21:55:00');
INSERT INTO `wrongtopic` VALUES ('94', '1', '1', '1', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('95', '1', '1', '2', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('96', '1', '1', '3', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('97', '1', '1', '4', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('98', '1', '1', '6', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('99', '1', '1', '7', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('100', '1', '1', '8', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('101', '1', '1', '9', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('102', '1', '1', '10', '2021-06-07 11:42:31');
INSERT INTO `wrongtopic` VALUES ('103', '1', '1', '1', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('104', '1', '2', '1', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('105', '1', '1', '2', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('106', '1', '2', '2', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('107', '1', '1', '3', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('108', '1', '2', '3', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('109', '1', '1', '4', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('110', '1', '2', '4', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('111', '1', '1', '5', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('112', '1', '2', '5', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('113', '1', '1', '6', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('114', '1', '2', '6', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('115', '1', '1', '7', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('116', '1', '2', '7', '2021-06-07 11:43:15');
INSERT INTO `wrongtopic` VALUES ('117', '1', '1', '1', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('118', '1', '1', '2', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('119', '1', '1', '3', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('120', '1', '1', '4', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('121', '1', '1', '5', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('122', '1', '1', '6', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('123', '1', '1', '7', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('124', '1', '1', '8', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('125', '1', '1', '9', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('126', '1', '1', '10', '2021-06-07 14:27:26');
INSERT INTO `wrongtopic` VALUES ('127', '1', '1', '3', '2021-06-07 14:27:45');
INSERT INTO `wrongtopic` VALUES ('128', '1', '1', '4', '2021-06-07 14:27:45');
INSERT INTO `wrongtopic` VALUES ('129', '1', '1', '5', '2021-06-07 14:27:45');
INSERT INTO `wrongtopic` VALUES ('130', '1', '1', '6', '2021-06-07 14:27:45');
INSERT INTO `wrongtopic` VALUES ('131', '1', '1', '7', '2021-06-07 14:27:45');
INSERT INTO `wrongtopic` VALUES ('132', '1', '1', '8', '2021-06-07 14:27:45');
INSERT INTO `wrongtopic` VALUES ('133', '1', '1', '9', '2021-06-07 14:27:45');
INSERT INTO `wrongtopic` VALUES ('134', '1', '1', '10', '2021-06-07 14:27:45');
INSERT INTO `wrongtopic` VALUES ('135', '3', '1', '1', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('136', '3', '1', '3', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('137', '3', '1', '4', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('138', '3', '1', '5', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('139', '3', '1', '6', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('140', '3', '1', '7', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('141', '3', '1', '8', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('142', '3', '1', '9', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('143', '3', '1', '10', '2021-06-07 15:33:48');
INSERT INTO `wrongtopic` VALUES ('144', '1', '1', '1', '2021-06-07 17:45:51');
INSERT INTO `wrongtopic` VALUES ('145', '1', '1', '3', '2021-06-07 17:45:51');
INSERT INTO `wrongtopic` VALUES ('146', '1', '1', '4', '2021-06-07 17:45:51');
INSERT INTO `wrongtopic` VALUES ('147', '1', '1', '6', '2021-06-07 17:45:51');
INSERT INTO `wrongtopic` VALUES ('148', '1', '1', '7', '2021-06-07 17:45:51');
INSERT INTO `wrongtopic` VALUES ('149', '1', '1', '8', '2021-06-07 17:45:51');
INSERT INTO `wrongtopic` VALUES ('150', '1', '1', '9', '2021-06-07 17:45:51');
INSERT INTO `wrongtopic` VALUES ('151', '1', '1', '10', '2021-06-07 17:45:51');
INSERT INTO `wrongtopic` VALUES ('152', '8', '1', '1', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('153', '8', '1', '2', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('154', '8', '1', '3', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('155', '8', '1', '4', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('156', '8', '1', '5', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('157', '8', '1', '6', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('158', '8', '1', '7', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('159', '8', '1', '8', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('160', '8', '1', '9', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('161', '8', '1', '10', '2021-06-08 10:40:20');
INSERT INTO `wrongtopic` VALUES ('162', '1', '1', '1', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('163', '1', '1', '2', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('164', '1', '1', '3', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('165', '1', '1', '4', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('166', '1', '1', '5', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('167', '1', '1', '6', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('168', '1', '1', '7', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('169', '1', '1', '8', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('170', '1', '1', '9', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('171', '1', '1', '10', '2021-06-08 12:23:27');
INSERT INTO `wrongtopic` VALUES ('172', '1', '1', '1', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('173', '1', '1', '2', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('174', '1', '1', '3', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('175', '1', '1', '4', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('176', '1', '1', '6', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('177', '1', '1', '7', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('178', '1', '1', '8', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('179', '1', '1', '9', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('180', '1', '1', '10', '2021-06-08 13:11:44');
INSERT INTO `wrongtopic` VALUES ('181', '1', '1', '1', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('182', '1', '1', '3', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('183', '1', '1', '4', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('184', '1', '1', '5', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('185', '1', '1', '6', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('186', '1', '1', '7', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('187', '1', '1', '8', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('188', '1', '1', '9', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('189', '1', '1', '10', '2021-06-08 13:35:05');
INSERT INTO `wrongtopic` VALUES ('190', '4', '1', '1', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('191', '4', '2', '1', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('192', '4', '1', '2', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('193', '4', '2', '2', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('194', '4', '1', '3', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('195', '4', '2', '3', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('196', '4', '1', '4', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('197', '4', '2', '4', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('198', '4', '1', '5', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('199', '4', '2', '5', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('200', '4', '1', '6', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('201', '4', '2', '6', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('202', '4', '1', '7', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('203', '4', '2', '7', '2021-06-08 14:16:14');
INSERT INTO `wrongtopic` VALUES ('204', '4', '1', '1', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('205', '4', '2', '1', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('206', '4', '1', '3', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('207', '4', '2', '3', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('208', '4', '1', '4', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('209', '4', '2', '4', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('210', '4', '1', '5', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('211', '4', '2', '5', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('212', '4', '1', '6', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('213', '4', '2', '6', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('214', '4', '1', '7', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('215', '4', '2', '7', '2021-06-08 14:16:35');
INSERT INTO `wrongtopic` VALUES ('216', '1', '1', '1', '2021-06-08 16:40:09');
INSERT INTO `wrongtopic` VALUES ('217', '1', '1', '2', '2021-06-08 16:40:09');
INSERT INTO `wrongtopic` VALUES ('218', '1', '1', '3', '2021-06-08 16:40:09');
INSERT INTO `wrongtopic` VALUES ('219', '1', '1', '4', '2021-06-08 16:41:11');
INSERT INTO `wrongtopic` VALUES ('220', '1', '1', '6', '2021-06-08 16:41:11');
INSERT INTO `wrongtopic` VALUES ('221', '1', '1', '7', '2021-06-08 16:41:11');
INSERT INTO `wrongtopic` VALUES ('222', '1', '1', '8', '2021-06-08 16:41:11');
INSERT INTO `wrongtopic` VALUES ('223', '1', '1', '9', '2021-06-08 16:41:11');
INSERT INTO `wrongtopic` VALUES ('224', '1', '1', '10', '2021-06-08 16:41:11');
DROP TRIGGER IF EXISTS `integralUpdata`;
DELIMITER ;;
CREATE TRIGGER `integralUpdata` AFTER INSERT ON `integrallist` FOR EACH ROW UPDATE personalinformation
set integral = integral + new.integral 
WHERE user_id = new.user_id
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `addUserData`;
DELIMITER ;;
CREATE TRIGGER `addUserData` AFTER INSERT ON `userinformation` FOR EACH ROW insert into personalinformation(user_id,user_name,user_phone) values(new.user_id,new.user_name,new.user_phone)
;;
DELIMITER ;
