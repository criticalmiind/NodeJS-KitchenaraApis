-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2023 at 08:34 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kitchenara`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `commentId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `foodId` int(11) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `likesCount` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `commentsliked`
--

CREATE TABLE `commentsliked` (
  `cLikedId` int(11) NOT NULL,
  `commentId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `following`
--

CREATE TABLE `following` (
  `followId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `followerId` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `foodposts`
--

CREATE TABLE `foodposts` (
  `foodId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `video` varchar(255) DEFAULT NULL,
  `videoDescription` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `commentsAllowed` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `foodposts`
--

INSERT INTO `foodposts` (`foodId`, `userId`, `video`, `videoDescription`, `location`, `commentsAllowed`, `status`, `createdAt`) VALUES
(14, 1, '16774341021691677430314482VID-20200901-WA0001.mp4', 'Testing 1234', '1234,1234', 1, 1, '2023-02-26 22:55:02');

-- --------------------------------------------------------

--
-- Table structure for table `likeditems`
--

CREATE TABLE `likeditems` (
  `likesId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `foodId` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `likeditems`
--

INSERT INTO `likeditems` (`likesId`, `userId`, `foodId`, `status`, `createdAt`) VALUES
(1, 1, 14, 1, '2023-02-26 23:19:11');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `orderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `foodId` int(11) NOT NULL,
  `deliveryLocation` varchar(255) DEFAULT NULL,
  `totalBill` varchar(255) DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `isPayed` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sheet1`
--

CREATE TABLE `sheet1` (
  `A` varchar(26) DEFAULT NULL,
  `B` varchar(11) DEFAULT NULL,
  `C` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `sheet1`
--

INSERT INTO `sheet1` (`A`, `B`, `C`) VALUES
('List', 'Api Created', 'Pending'),
('Login Sign up ', 'Completed', NULL),
('Otp Code Generation ', 'Completed', NULL),
('Explore', 'Completed', NULL),
('Overlays(share,comment)', NULL, 'Pending'),
('create content', NULL, 'Pending'),
('profile setting', NULL, 'Pending'),
('Ongoing order details', NULL, 'Pending'),
('Professional account setup', NULL, 'Pending'),
('Not a creator account', NULL, 'Pending'),
('category selection', NULL, 'Pending'),
('All restaurants', NULL, 'Pending'),
('Menu view', NULL, 'Pending'),
('setting up location', NULL, 'Pending'),
('paying methods(Debit Card)', NULL, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `usercart`
--

CREATE TABLE `usercart` (
  `cartId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `foodId` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `password` text NOT NULL,
  `profilePic` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `userType` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `username`, `fullName`, `email`, `phoneNumber`, `password`, `profilePic`, `bio`, `userType`, `location`, `status`, `createdAt`) VALUES
(1, 'admin', 'Admin 123', 'admin@admin.com', '+923049758182', '$2b$10$8bUNfqiaGCXuIcXwllrgIOcFaSY5ym.RkhfIj06KC6IEDwWYimiQm', 'http://127.0.0.1:8000/get/photo/1677441162148.png', 'Bio', NULL, '123456,12345', 1, '2023-02-26 13:33:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentId`);

--
-- Indexes for table `commentsliked`
--
ALTER TABLE `commentsliked`
  ADD PRIMARY KEY (`cLikedId`);

--
-- Indexes for table `following`
--
ALTER TABLE `following`
  ADD PRIMARY KEY (`followId`);

--
-- Indexes for table `foodposts`
--
ALTER TABLE `foodposts`
  ADD PRIMARY KEY (`foodId`);

--
-- Indexes for table `likeditems`
--
ALTER TABLE `likeditems`
  ADD PRIMARY KEY (`likesId`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `usercart`
--
ALTER TABLE `usercart`
  ADD PRIMARY KEY (`cartId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `commentsliked`
--
ALTER TABLE `commentsliked`
  MODIFY `cLikedId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `following`
--
ALTER TABLE `following`
  MODIFY `followId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `foodposts`
--
ALTER TABLE `foodposts`
  MODIFY `foodId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `likeditems`
--
ALTER TABLE `likeditems`
  MODIFY `likesId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usercart`
--
ALTER TABLE `usercart`
  MODIFY `cartId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
