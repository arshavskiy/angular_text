-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2017 at 11:31 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `theschool_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `phone`, `email`, `image`, `password`, `roles_id`) VALUES
(13, 'clifford carr', '0503332378', 'clifford@gmail.com', '58.jpg', '$2y$10$iln8aNUWb/TNkPFu3I4pe.sWM2MCMJgxKJUJt4a1t/xNL2HzG9Szi', 1),
(22, 'Pavel', '0586281637', 'arshavsky.pasha@gmail.com', 'us.jpg', '$2y$10$1.fQzTnMktHCo2y/JjvIV.s.LBPmDnranqDhdneuvfyEvwH/xV/M2', 2),
(23, 'Osefine ', '0521456423', 'osefine@gmail.com', '67.jpg', '$2y$10$/RrFLhjNB7CSDX44/pTFnu14/x/r6urDB54FHGdkLTtgW98wF7MvW', 3);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `des` varchar(3000) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `des`, `image`) VALUES
(1, 'math', 'Beginning algebra enhanced with pre-algebra topics such as arithmetic, fractions, and word problems as need indicates. Topics include real numbers, linear equations and inequalities in one variable, polynomials, factoring, algebraic fractions, problem solving, systems of linear equations, rational and irrational numbers.', 'mathmetics.png'),
(2, 'biology', 'The quantitative aspects of biology - including molecular biology, biochemistry, genetics, and cell biology - represent the core of the academic program. Courses are designed to provide a solid background in the physical sciences and to develop an integrated scientific perspective.', 'biology.png'),
(3, 'arts', 'Arts courses are a fantastic way to learn about subjects you love, while building critical thinking and communication skills that can be applied to a wide range of careers.', 'arts.png'),
(4, 'sports', 'These courses will cover sport, fitness and coaching, helping students understand the science and leadership behind these areas. Sport training may also help students improve their skills in these areas.', 'sports.png'),
(10, 'Finance', 'This Specialization builds on the success of the Introduction to Finance course and provides a rigorous introduction to core topics in financial valuation, including time value of money, cash flow analysis, asset pricing, and risk and return.', 'finance.png'),
(11, 'physics', 'Physics is concerned with the study of the universe from the smallest to the largest scale: why it is the way it is and how it works. Such knowledge is basic to scientific progress. ', 'physics.png'),
(12, 'English', 'Take an English course with us and you will get a qualified and experienced teacher, work in pairs and groups to develop real-life communication skills, practise your listening, speaking and pronunciation using a range of stimulating materials and classroom activities.', 'english.png'),
(13, 'chemistry', 'Chemistry is the study of matter, and all matter is made up of atoms. We will learn about elements, atomic number and mass, isotopes (chemistry moles, not the animal), and compounds. ', 'chemistry.png'),
(14, 'History', 'History of the world and the middle east, Egypt and China.', 'history.png');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` tinyint(4) NOT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'owner'),
(2, 'manager'),
(3, 'sales');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `phone`, `email`, `image`) VALUES
(25, 'Pavel', '0586281367', 'arshavsky.pasha@gmail.com', 'us.jpg'),
(27, 'kasper andersen', '2025550110', 'kasper@gmaila.com', '92.jpg'),
(28, 'susanna hughes', '2025550902', 'hughes@gmaila.com', '55.jpg'),
(29, 'johan thomsen', '1234587456', 'johan@gmail.aom', '21.jpg'),
(30, 'arttu wainio', '2563547896', 'arttu@gmail.acom', '53.jpg'),
(31, 'imogen moore', '8546785423', 'imogen@gmail.aoc', '3.jpg'),
(32, 'louis ouellet', '5456541235', 'louis@gmail.aom', '80.jpg'),
(33, 'shane pierce', '5456545874', 'shane@gmail.com', '83.jpg'),
(34, 'tristan fernandez', '8565412365', 'tristan@gmaila.com', '88.jpg'),
(35, 'augustin fernandez', '5865421458', 'augustin@asd.com', '1.jpg'),
(36, 'gÃ¶khan duygulu', '5254145874', 'gokhan@asdas.com', '39.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `students_courses`
--

CREATE TABLE `students_courses` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students_courses`
--

INSERT INTO `students_courses` (`id`, `student_id`, `course_id`) VALUES
(55, 25, 2),
(56, 25, 3),
(57, 25, 11),
(58, 25, 13),
(67, 28, 2),
(68, 28, 3),
(69, 28, 4),
(70, 28, 11),
(71, 28, 14),
(77, 27, 1),
(78, 27, 10),
(79, 27, 12),
(80, 27, 13),
(81, 27, 14),
(92, 29, 1),
(93, 29, 2),
(94, 29, 4),
(95, 29, 10),
(96, 29, 13),
(97, 30, 2),
(98, 30, 3),
(99, 30, 4),
(100, 30, 11),
(101, 30, 12),
(102, 30, 13),
(103, 30, 14),
(104, 31, 1),
(105, 31, 3),
(106, 31, 4),
(107, 31, 11),
(108, 31, 13),
(109, 31, 14),
(110, 32, 2),
(111, 32, 3),
(112, 32, 10),
(113, 32, 11),
(114, 32, 12),
(115, 32, 14),
(116, 33, 1),
(117, 33, 2),
(118, 33, 3),
(119, 33, 12),
(120, 33, 13),
(121, 33, 14),
(122, 34, 3),
(123, 34, 10),
(124, 34, 11),
(125, 34, 13),
(126, 34, 14),
(127, 35, 1),
(128, 35, 2),
(129, 35, 3),
(130, 35, 11),
(131, 35, 13),
(132, 36, 1),
(133, 36, 2),
(134, 36, 3),
(135, 36, 4),
(136, 36, 10),
(137, 36, 11);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_roles` (`roles_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students_courses`
--
ALTER TABLE `students_courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_courses` (`course_id`),
  ADD KEY `fk_students` (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `students_courses`
--
ALTER TABLE `students_courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `fk_roles` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `students_courses`
--
ALTER TABLE `students_courses`
  ADD CONSTRAINT `fk_courses` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_students` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
