-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2023 at 08:45 PM
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
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `catId` int(11) NOT NULL,
  `userId` varchar(11) NOT NULL,
  `catName` varchar(56) NOT NULL,
  `catDescription` text DEFAULT NULL,
  `catImage` text DEFAULT NULL,
  `created_dt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_dt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`catId`, `userId`, `catName`, `catDescription`, `catImage`, `created_dt`, `updated_dt`) VALUES
(1, '1', 'Pizza', NULL, NULL, '2023-02-27 13:27:39', '2023-02-27 15:55:32'),
(2, '1', 'Burger', NULL, NULL, '2023-02-27 15:55:14', '2023-02-27 15:55:14');

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
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`commentId`, `userId`, `foodId`, `comment`, `status`, `createdAt`) VALUES
(1, 1, 14, 'Nice Video!!! Great!!!', 1, '2023-02-27 16:27:12');

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

--
-- Dumping data for table `following`
--

INSERT INTO `following` (`followId`, `userId`, `followerId`, `status`, `createdAt`) VALUES
(2, 1, 1, 1, '2023-02-27 17:19:40');

-- --------------------------------------------------------

--
-- Table structure for table `fooditems`
--

CREATE TABLE `fooditems` (
  `foodId` int(11) NOT NULL,
  `catId` varchar(11) NOT NULL,
  `userId` varchar(11) NOT NULL,
  `foodName` varchar(100) NOT NULL,
  `foodTags` text NOT NULL,
  `foodDescription` text NOT NULL,
  `foodPrice` int(11) NOT NULL,
  `foodQty` int(11) NOT NULL,
  `foodImage` text DEFAULT NULL,
  `foodStatus` varchar(11) NOT NULL,
  `foodDeleted` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fooditems`
--

INSERT INTO `fooditems` (`foodId`, `catId`, `userId`, `foodName`, `foodTags`, `foodDescription`, `foodPrice`, `foodQty`, `foodImage`, `foodStatus`, `foodDeleted`, `created_at`, `updated_at`) VALUES
(1, '1', '1', 'Zinger Burger', 'Abc,Xyz', 'Food Description', 100, 10, NULL, '', 0, '2023-02-28 18:56:59', '2023-02-28 18:56:59');

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
(14, 1, '16774341021691677430314482VID-20200901-WA0001.mp4', 'Testing 1234', '1234,1234', 1, 1, '2023-02-26 22:55:02'),
(15, 1, '16775694654990e311ee16eb01d3efeece1d3f71cca94.mp4', 'Testing 1234', '1234,1234', 1, 1, '2023-02-28 12:31:05'),
(16, 1, '16775694825220e311ee16eb01d3efeece1d3f71cca94.mp4', 'Testing 1234', '1234,1234', 1, 1, '2023-02-28 12:31:22'),
(17, 1, '16775695584200e311ee16eb01d3efeece1d3f71cca94.mp4', 'Testing 1234', '1234,1234', 1, 1, '2023-02-28 12:32:38'),
(18, 1, '16775696393270e311ee16eb01d3efeece1d3f71cca94.mp4', 'Testing 1234', '1234,1234', 1, 1, '2023-02-28 12:33:59'),
(19, 1, '16775696996090e311ee16eb01d3efeece1d3f71cca94.mp4', 'Testing 1234', '1234,1234', 1, 1, '2023-02-28 12:34:59');

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
(6, 1, 14, 1, '2023-02-27 16:24:49');

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
  `userType` enum('user','store','superuser') NOT NULL DEFAULT 'user',
  `location` varchar(255) DEFAULT NULL,
  `storeAddress` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `otp` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `username`, `fullName`, `email`, `phoneNumber`, `password`, `profilePic`, `bio`, `userType`, `location`, `storeAddress`, `status`, `otp`, `createdAt`) VALUES
(1, 'admin', 'Admin 123', 'admin@admin.com', '+923049758182', '$2b$10$8bUNfqiaGCXuIcXwllrgIOcFaSY5ym.RkhfIj06KC6IEDwWYimiQm', 'http://127.0.0.1:8000/get/photo/1677441162148.png', 'Bio', 'user', '51.507351,-0.127758', '', 1, NULL, '2023-02-26 13:33:31'),
(8, 'user1', NULL, NULL, '+923049758181', '$2b$10$UZ9sAtW6hNLdE7fQp7I6Ae6Qpm0eF03v4lqjNoJLo6UfN1DZWNY7q', NULL, NULL, 'user', '51.514736,-0.118583', '', 1, 0, '2023-02-28 00:06:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`catId`);

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
-- Indexes for table `fooditems`
--
ALTER TABLE `fooditems`
  ADD PRIMARY KEY (`foodId`);

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
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `catId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `commentsliked`
--
ALTER TABLE `commentsliked`
  MODIFY `cLikedId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `following`
--
ALTER TABLE `following`
  MODIFY `followId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fooditems`
--
ALTER TABLE `fooditems`
  MODIFY `foodId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `foodposts`
--
ALTER TABLE `foodposts`
  MODIFY `foodId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `likeditems`
--
ALTER TABLE `likeditems`
  MODIFY `likesId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
