-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jun 27, 2017 at 01:29 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `thought_space`
--

-- --------------------------------------------------------

--
-- Table structure for table `thoughts`
--

CREATE TABLE `thoughts` (
  `ThoughtID` int(11) NOT NULL,
  `color` varchar(100) DEFAULT NULL,
  `geolocation` varchar(100) DEFAULT NULL,
  `submitted` datetime DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `thought` varchar(300) DEFAULT NULL,
  `font_size` int(11) DEFAULT NULL,
  `font` varchar(100) DEFAULT NULL,
  `font_color` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `thoughts`
--

INSERT INTO `thoughts` (`ThoughtID`, `color`, `geolocation`, `submitted`, `user`, `thought`, `font_size`, `font`, `font_color`) VALUES
(1, '#ffffff', '123124325425', '2017-06-19 05:58:06', 0, 'Honestly man, i dont know what the fuck', 24, 'sans-serif', '#000000'),
(2, '#ffffff', '123124325425', '2017-06-19 06:10:36', 0, 'Yolo', 24, 'sans-serif', '#000000'),
(3, '#ffffff', '123124325425', '2017-06-19 06:10:36', 0, 'This world is cool.', 24, 'sans-serif', '#000000'),
(4, '#ffffff', '123124325425', '2017-06-19 06:10:36', 0, 'This world is rad.', 24, 'sans-serif', '#000000'),
(5, '#ffffff', '123124325425', '2017-06-19 06:10:36', 0, 'This world is weird.', 24, 'sans-serif', '#000000'),
(6, '#ffffff', '123124325425', '2017-06-19 06:10:36', 0, 'This world is interesting.', 24, 'sans-serif', '#000000'),
(7, '#ffffff', '123124325425', '2017-06-19 06:10:36', 0, 'This world is magnificent.', 24, 'sans-serif', '#000000'),
(8, '#ffffff', '123124325425', '2017-06-19 06:10:36', 0, 'This world is union.', 24, 'sans-serif', '#000000'),
(9, '#ffffff', '123124325425', '2017-06-19 06:10:36', 0, 'This world is love.', 24, 'sans-serif', '#000000'),
(10, '#000000', '123124325425', '2017-06-24 18:10:17', 0, 'Yolo', 24, 'sans-serif', '#000000'),
(11, '#000000', '123124325425', '2017-06-24 18:10:17', 0, 'This world is cool.', 24, 'sans-serif', '#000000'),
(12, '#000000', '123124325425', '2017-06-24 18:10:17', 0, 'This world is rad.', 24, 'sans-serif', '#000000'),
(13, '#000000', '123124325425', '2017-06-24 18:10:17', 0, 'This world is weird.', 24, 'sans-serif', '#000000'),
(14, '#000000', '123124325425', '2017-06-24 18:10:17', 0, 'This world is interesting.', 24, 'sans-serif', '#000000'),
(15, '#000000', '123124325425', '2017-06-24 18:10:17', 0, 'This world is magnificent.', 24, 'sans-serif', '#000000'),
(16, '#ffffff', '123124325425', '2017-06-24 18:10:17', 0, 'This world is union.', 24, 'sans-serif', '#000000'),
(17, '#ffffff', '123124325425', '2017-06-24 18:10:17', 0, 'This world is love.', 24, 'sans-serif', '#000000'),
(18, 'red', '123124325425', '2017-06-24 18:11:01', 0, 'Yolo', 24, 'sans-serif', '#000000'),
(19, 'red', '123124325425', '2017-06-24 18:11:01', 0, 'This world is cool.', 24, 'sans-serif', '#000000'),
(20, 'red', '123124325425', '2017-06-24 18:11:01', 0, 'This world is rad.', 24, 'sans-serif', '#000000'),
(21, 'red', '123124325425', '2017-06-24 18:11:01', 0, 'This world is weird.', 24, 'sans-serif', '#000000'),
(22, 'red', '123124325425', '2017-06-24 18:11:01', 0, 'This world is interesting.', 24, 'sans-serif', '#000000'),
(23, 'red', '123124325425', '2017-06-24 18:11:01', 0, 'This world is magnificent.', 24, 'sans-serif', '#000000'),
(24, '#ffffff', '123124325425', '2017-06-24 18:11:01', 0, 'This world is union.', 24, 'sans-serif', '#000000'),
(25, '#ffffff', '123124325425', '2017-06-24 18:11:01', 0, 'This world is love.', 24, 'sans-serif', '#000000'),
(26, 'blue', '123124325425', '2017-06-24 19:14:43', 0, 'Yolo', 24, 'sans-serif', '#000000'),
(27, 'blue', '123124325425', '2017-06-24 19:14:43', 0, 'This world is cool.', 24, 'sans-serif', '#000000'),
(28, 'blue', '123124325425', '2017-06-24 19:14:43', 0, 'This world is rad.', 24, 'sans-serif', '#000000'),
(29, 'blue', '123124325425', '2017-06-24 19:14:43', 0, 'This world is weird.', 24, 'sans-serif', '#000000'),
(30, 'blue', '123124325425', '2017-06-24 19:14:43', 0, 'This world is interesting.', 24, 'sans-serif', '#000000'),
(31, 'blue', '123124325425', '2017-06-24 19:14:43', 0, 'This world is magnificent.', 24, 'sans-serif', '#000000'),
(32, '#ffffff', '123124325425', '2017-06-24 19:14:43', 0, 'This world is union.', 24, 'sans-serif', '#000000'),
(33, '#ffffff', '123124325425', '2017-06-24 19:14:43', 0, 'This world is love.', 24, 'sans-serif', '#000000'),
(34, 'yellow', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(35, '#ff00f2', '129839123', '2017-06-26 05:17:08', 0, 'Hahahaha!!!!', 16, 'sans-serif', '#000000'),
(36, '#ffffff', '129839123', '2017-06-26 05:18:08', 0, 'asdasdasd', 16, 'sans-serif', '#000000'),
(37, '#ffffff', '129839123', '2017-06-26 05:18:16', 0, 'asdasdasdqwdqwdqwdqwd', 16, 'sans-serif', '#000000'),
(38, '#ffffff', '129839123', '2017-06-26 05:18:32', 0, 'asdasdasdqwdqwHahahah!!!!!!!', 16, 'sans-serif', '#000000'),
(39, '#b33232', '129839123', '2017-06-26 05:18:58', 0, 'I have no idea....', 16, 'sans-serif', '#000000'),
(40, '#b33232', '129839123', '2017-06-26 14:10:07', 0, 'I have no idea....', 16, 'sans-serif', '#000000'),
(41, '#d9c8c8', '129839123', '2017-06-26 14:27:57', 0, 'Damn daniel', 16, 'sans-serif', '#000000'),
(42, '#ffffff', '129839123', '2017-06-26 23:53:06', 0, '', 16, 'sans-serif', '#000000'),
(43, '#ffffff', '129839123', '2017-06-27 01:14:01', 0, 'ALEX!!!!', 16, 'sans-serif', '#000000'),
(44, '#019c95', '129839123', '2017-06-27 01:14:19', 0, 'ALEX!!!!', 16, 'sans-serif', '#000000'),
(45, '#860000', '129839123', '2017-06-27 02:11:49', 0, '', 16, 'sans-serif', '#000000'),
(46, '#104738', '129839123', '2017-06-27 02:17:13', 0, '', 16, 'sans-serif', '#000000'),
(47, '#55306a', '129839123', '2017-06-27 03:21:16', 0, 'Sometimes I feel like I am very close to what I want to achieve, yet often the feelings of burden come back.', 16, 'sans-serif', '#000000'),
(48, '#ffffff', '129839123', '2017-06-27 03:35:07', 0, 'lol!!!', 16, 'sans-serif', '#000000'),
(49, '#2ebebb', '129839123', '2017-06-27 03:36:04', 0, 'New thought. Bitch.', 16, 'sans-serif', '#000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `thoughts`
--
ALTER TABLE `thoughts`
  ADD PRIMARY KEY (`ThoughtID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `thoughts`
--
ALTER TABLE `thoughts`
  MODIFY `ThoughtID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=50;