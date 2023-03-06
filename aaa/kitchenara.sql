-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2023 at 09:34 PM
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
(1, '1', 'Appetizers', 'Delicious small bites to start off your meal', 'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(2, '2', 'Salads', 'Fresh and healthy salads to enjoy', 'https://images.pexels.com/photos/4109120/pexels-photo-4109120.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(3, '3', 'Pizzas', 'A classic favorite - choose from a variety of toppings', 'https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(4, '1', 'Sandwiches', 'Classic sandwiches that are perfect for lunch or a quick bite', 'https://images.pexels.com/photos/3753488/pexels-photo-3753488.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(5, '2', 'Burgers', 'Juicy burgers with all your favorite toppings', 'https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(6, '3', 'Sushi', 'Freshly made sushi rolls for a delicious and healthy meal', 'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(7, '1', 'Pasta', 'Hearty pasta dishes with a variety of sauces to choose from', 'https://images.pexels.com/photos/534285/pexels-photo-534285.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(8, '2', 'Seafood', 'Fresh seafood dishes, including fish, shrimp, and more', 'https://images.pexels.com/photos/3356410/pexels-photo-3356410.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(9, '3', 'Steak', 'Juicy and flavorful steaks cooked to perfection', 'https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(10, '1', 'Mexican', 'Spicy and flavorful Mexican dishes, including tacos, burritos, and more', 'https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(11, '2', 'Soup', 'Comforting and warming soups for a cozy meal', 'https://images.pexels.com/photos/3675448/pexels-photo-3675448.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(12, '3', 'Desserts', 'Sweet treats to end your meal on a high note', 'https://images.pexels.com/photos/2307437/pexels-photo-2307437.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(13, '1', 'Italian', 'Authentic Italian dishes, including pizza, pasta, and more', 'https://images.pexels.com/photos/414296/pexels-photo-414296.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52'),
(14, '2', 'Chinese', 'Savory and flavorful Chinese dishes, including stir-fry, noodles, and more', 'https://images.pexels.com/photos/1639555/pexels-photo-1639555.jpeg', '2023-03-01 11:53:52', '2023-03-01 11:53:52');

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
(1, '1', '1', 'Margherita Pizza', 'pizza, cheese, tomato, basil', 'Classic pizza with tomato sauce, mozzarella cheese and fresh basil', 10, 100, 'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg', '', 0, '2023-02-18 07:00:00', '2023-02-18 07:00:00'),
(2, '1', '2', 'Pepperoni Pizza', 'pizza, pepperoni, cheese, tomato', 'Pizza topped with tomato sauce, mozzarella cheese, and pepperoni slices', 12, 80, 'https://images.pexels.com/photos/4109120/pexels-photo-4109120.jpeg', '', 0, '2023-02-18 07:00:00', '2023-02-18 07:00:00'),
(3, '1', '3', 'Vegetable Pizza', 'pizza, vegetable, cheese, tomato', 'Pizza topped with tomato sauce, mozzarella cheese, and a selection of fresh vegetables', 11, 90, 'https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg', '', 0, '2023-02-18 07:00:00', '2023-02-18 07:00:00'),
(4, '2', '4', 'Burger and Fries', 'burger, fries, beef, cheese', 'Classic beef burger served with a side of crispy fries', 8, 120, 'https://images.pexels.com/photos/3753488/pexels-photo-3753488.jpeg', '', 0, '2023-02-18 07:00:00', '2023-02-18 07:00:00'),
(5, '2', '5', 'Chicken Wings', 'chicken, wings, spicy', 'Spicy chicken wings served with a selection of dips', 9, 100, 'https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg', '', 0, '2023-02-18 07:00:00', '2023-02-18 07:00:00'),
(6, '2', '6', 'Fish and Chips', 'fish, chips, battered', 'Freshly battered fish served with crispy chips', 13, 60, 'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg', '', 0, '2023-02-18 07:00:00', '2023-02-18 07:00:00'),
(7, '3', '7', 'Pesto Pasta', 'pasta, pesto, tomato, basil', 'Pasta served with a pesto sauce, tomato and fresh basil', 10, 80, 'https://images.pexels.com/photos/534285/pexels-photo-534285.jpeg', '', 0, '2023-02-18 07:00:00', '2023-02-18 07:00:00'),
(8, '10', '7', 'Classic Margherita Pizza', 'pizza, italian, vegetarian', 'A classic pizza made with tomato sauce, fresh mozzarella cheese, and basil leaves on a thin crust. Perfect for vegetarian food lovers.', 12, 10, 'https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg', '', 0, '2023-02-18 08:28:45', '2023-02-18 08:28:45'),
(9, '10', '7', 'Pepperoni Pizza', 'pizza, italian, spicy', 'A delicious pizza made with tomato sauce, mozzarella cheese, and spicy pepperoni on a thin crust. Perfect for those who love a little heat in their food.', 14, 10, 'https://images.pexels.com/photos/3753392/pexels-photo-3753392.jpeg', '', 0, '2023-02-18 08:28:45', '2023-02-18 08:28:45'),
(10, '11', '8', 'Butter Chicken', 'indian, chicken, curry', 'A popular Indian dish made with marinated chicken cooked in a creamy tomato-based sauce, flavored with spices and served with rice or naan bread. A must-try for all Indian food lovers!', 16, 15, 'https://images.pexels.com/photos/842167/pexels-photo-842167.jpeg', '', 0, '2023-02-18 08:28:45', '2023-02-18 08:28:45'),
(11, '11', '8', 'Samosa', 'indian, vegetarian, appetizer', 'A popular Indian appetizer made with a crispy pastry filled with spiced potatoes, peas, and sometimes meat. Served with mint or tamarind chutney. Perfect for a quick snack or a starter!', 5, 20, 'https://images.pexels.com/photos/2539523/pexels-photo-2539523.jpeg', '', 0, '2023-02-18 08:28:45', '2023-02-18 08:28:45'),
(12, '12', '9', 'Beef Burger', 'burger, beef, fast food', 'A classic beef burger made with a juicy beef patty, cheese, lettuce, tomato, and mayonnaise on a toasted bun. Served with french fries or onion rings. Perfect for fast food lovers!', 10, 20, 'https://images.pexels.com/photos/1600712/pexels-photo-1600712.jpeg', '', 0, '2023-02-18 08:28:45', '2023-02-18 08:28:45'),
(13, '12', '9', 'Chicken Nuggets', 'fast food, chicken, appetizer', 'A popular fast food appetizer made with bite-sized pieces of chicken coated in breadcrumbs and fried until golden brown. Served with a dipping sauce of your choice. Perfect for a quick snack or a starter!', 6, 15, 'https://images.pexels.com/photos/4207701/pexels-photo-4207701', '', 0, '2023-02-18 07:00:00', '2023-02-18 07:00:00');

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
(108, 6, 'https://cdn.pixabay.com/vimeo/770315514/Sea%20-%20138588.mp4?width=1280&hash=e6f46286f0c6f80a09bb243069e5dc7e46927cc7', 'Enjoying the ocean breeze with this delicious seafood platter 🌊🍤🦀 #foodie #seafoodlove #beachday', 'Miami Beach, Florida', 1, 1, '2022-12-02 10:30:00'),
(109, 7, 'https://cdn.pixabay.com/vimeo/487508532/Woman%20-%2058142.mp4?width=640&hash=0d04483bca070b3a8567ac4120a2af09038319ab', 'Cooking up some authentic Italian cuisine tonight! 🍝🍷🇮🇹 #italianfood #homemade #cooking', 'Rome, Italy', 1, 1, '2022-12-03 12:45:00'),
(1001, 1, 'https://cdn.pixabay.com/vimeo/528670485/Flowers%20-%2068367.mp4?width=1280&hash=8ed464af65c03747b48614713fa1f051e49cf2be', 'Beautiful flowers in the park', 'Central Park, New York', 1, 1, '2022-02-01 09:00:00'),
(1002, 2, 'https://cdn.pixabay.com/vimeo/515098344/Ocean%20-%2065560.mp4?width=640&hash=6b0edcdb92fffef0e931fe81c164768bed43cba5', 'The calming sound of the ocean', 'Maldives', 0, 1, '2022-02-02 10:30:00'),
(1003, 3, 'https://cdn.pixabay.com/vimeo/696336342/Windmill%20-%20112957.mp4?width=640&hash=0a49c2f673892ea9194c1114a9a80734055ba5d9', 'The Dutch countryside at its finest', 'Kinderdijk, Netherlands', 1, 1, '2022-02-03 14:45:00'),
(1004, 4, 'https://cdn.pixabay.com/vimeo/724673230/Lamb%20-%20120739.mp4?width=640&hash=04ecf1afa891228396a6d5a57e834e069fe3874b', 'Adorable lambs frolicking in the meadow', 'Lake District, UK', 1, 0, '2022-02-04 11:20:00'),
(1005, 5, 'https://cdn.pixabay.com/vimeo/484331149/Vinyl%20-%2057307.mp4?width=1280&hash=940325da5bdf20bef26987d73e78bb63c2e39fee', 'The magic of vinyl records', 'San Francisco, USA', 0, 1, '2022-02-05 16:00:00'),
(1006, 6, 'https://cdn.pixabay.com/vimeo/770315514/Sea%20-%20138588.mp4?width=1280&hash=e6f46286f0c6f80a09bb243069e5dc7e46927cc7', 'Majestic waves crashing on the shore', 'Bali, Indonesia', 1, 1, '2022-02-06 18:10:00'),
(1007, 7, 'https://cdn.pixabay.com/vimeo/487508532/Woman%20-%2058142.mp4?width=640&hash=0d04483bca070b3a8567ac4120a2af09038319ab', 'Dancing under the stars', 'Sydney, Australia', 0, 1, '2022-02-07 20:15:00'),
(1010, 8, 'https://cdn.pixabay.com/vimeo/528670485/Flowers%20-%2068367.mp4?width=1280&hash=8ed464af65c03747b48614713fa1f051e49cf2be', 'Beautiful flowers and delicious food make for the perfect picnic 🌸🍓🧀 #picnicday #foodandflowers #summerdays', 'Central Park, New York', 1, 1, '2022-12-04 15:20:00'),
(1011, 1, 'https://cdn.pixabay.com/vimeo/515098344/Ocean%20-%2065560.mp4?width=640&hash=6b0edcdb92fffef0e931fe81c164768bed43cba5', 'Aloha from Hawaii 🌺🌴 Enjoying some fresh poke bowls by the beach #hawaiilife #pokebowllove #beachvibes', 'Honolulu, Hawaii', 1, 1, '2022-12-05 17:10:00'),
(1012, 2, 'https://cdn.pixabay.com/vimeo/696336342/Windmill%20-%20112957.mp4?width=640&hash=0a49c2f673892ea9194c1114a9a80734055ba5d9', 'The windmill farm is a beautiful sight to see 🌬️🌾 Enjoying some homemade apple pie #farmlife #applepietime #sundayfunday', 'Amsterdam, Netherlands', 1, 1, '2022-12-06 19:30:00'),
(1013, 3, 'https://cdn.pixabay.com/vimeo/724673230/Lamb%20-%20120739.mp4?width=640&hash=04ecf1afa891228396a6d5a57e834e069fe3874b', 'The perfect lamb chops for a cozy night in 🍴🍷 #comfortfood #lambchops #dinnerathome', 'London, United Kingdom', 1, 1, '2022-12-07 21:15:00');

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
  `tackingId` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `storeId` int(11) NOT NULL,
  `deliveryAddress` text DEFAULT NULL,
  `deliveryLocation` varchar(255) DEFAULT NULL,
  `totalBill` varchar(255) DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `isPayed` int(11) NOT NULL DEFAULT 0,
  `json` text DEFAULT NULL,
  `status` enum('pending','accepted','enroute','delivered') NOT NULL DEFAULT 'pending',
  `created_dt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_dt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
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
  `storeId` int(11) NOT NULL,
  `json` text DEFAULT NULL,
  `created_dt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_dt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
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
  `storeAddress` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `otp` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `username`, `fullName`, `email`, `phoneNumber`, `password`, `profilePic`, `bio`, `userType`, `location`, `storeAddress`, `status`, `otp`, `createdAt`) VALUES
(1, 'khan', 'Shawal Ahmad Mohmand', 'mail@example.com', '03049758182', '$2b$10$0LZJSXUpS5xrGZMg7Z3xbO0q4ITtXXjRrTPNZfWlRgcjDG2R51/Lq', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', 'Hi, I am John Doe', 'user', '31.497440,74.334247', '123 Main St, Anytown USA', 1, 6970, '2023-03-01 16:46:19'),
(2, 'mahad', 'Mahad', 'janesmith@example.com', '1234567890', '$2b$10$0LZJSXUpS5xrGZMg7Z3xbO0q4ITtXXjRrTPNZfWlRgcjDG2R51/Lq', 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg', 'Hi, I am Jane Smith', 'user', '31.490706,74.315438', '456 Oak St, Anytown USA', 1, NULL, '2023-03-01 16:46:19'),
(3, 'bob789', 'Bob Johnson', 'bobjohnson@example.com', '1234567890', '$2b$10$0LZJSXUpS5xrGZMg7Z3xbO0q4ITtXXjRrTPNZfWlRgcjDG2R51/Lq', 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg', 'Hi, I am Bob Johnson', 'store', '31.456154,74.336137', '789 Maple Ave, Anytown USA', 1, NULL, '2023-03-01 16:46:19'),
(4, 'lisa321', 'Lisa Davis', 'lisadavis@example.com', '1234567890', '$2b$10$0LZJSXUpS5xrGZMg7Z3xbO0q4ITtXXjRrTPNZfWlRgcjDG2R51/Lq', 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg', 'Hi, I am Lisa Davis', 'user', '31.450663,74.299039', '321 Elm St, Anytown USA', 1, NULL, '2023-03-01 16:46:19'),
(5, 'mike654', 'Mike Wilson', 'mikewilson@example.com', '1234567890', '$2b$10$0LZJSXUpS5xrGZMg7Z3xbO0q4ITtXXjRrTPNZfWlRgcjDG2R51/Lq', 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg', 'Hi, I am Mike Wilson', 'store', '31.461426,74.349542', '654 Birch Rd, Anytown USA', 1, NULL, '2023-03-01 16:46:19'),
(6, 'amy987', 'Amy Brown', 'amybrown@example.com', '1234567890', '$2b$10$0LZJSXUpS5xrGZMg7Z3xbO0q4ITtXXjRrTPNZfWlRgcjDG2R51/Lq', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', 'Hi, I am Amy Brown', 'user', '31.509441,74.341012', '987 Pine St, Anytown USA', 1, NULL, '2023-03-01 16:46:19'),
(7, 'david321', 'David Lee', 'davidlee@example.com', '1234567890', '$2b$10$0LZJSXUpS5xrGZMg7Z3xbO0q4ITtXXjRrTPNZfWlRgcjDG2R51/Lq', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', 'Hi, I am David Lee', 'user', '31.497440,74.334247', '321 Oak St, Anytown USA', 1, NULL, '2023-03-01 16:46:19'),
(8, 'emily456', 'Emily Davis', 'emilydavis@example.com', '1234567890', '$2b$10$0LZJSXUpS5xrGZMg7Z3xbO0q4ITtXXjRrTPNZfWlRgcjDG2R51/Lq', 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg', 'Hi, I am Emily Davis', 'store', '31.490706,74.315438', '456 Main St, Anytown USA', 1, NULL, '2023-03-01 16:46:19');

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
  MODIFY `catId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

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
  MODIFY `foodId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `foodposts`
--
ALTER TABLE `foodposts`
  MODIFY `foodId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1014;

--
-- AUTO_INCREMENT for table `likeditems`
--
ALTER TABLE `likeditems`
  MODIFY `likesId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `usercart`
--
ALTER TABLE `usercart`
  MODIFY `cartId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
