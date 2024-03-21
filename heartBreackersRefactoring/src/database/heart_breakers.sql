-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/12/2023 às 13:11
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `heart_breakers`
--

DROP DATABASE IF EXISTS `heart_breakers_refactoring`;
CREATE DATABASE `heart_breakers_refactoring`;
USE `heart_breakers_refactoring`;
-- --------------------------------------------------------

--
-- Estrutura para tabela `doctor`
--

CREATE TABLE `doctor` (
  `doctorId` int(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(11) NOT NULL UNIQUE,
  `password` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `doctor`
--

INSERT INTO `doctor` (`email`, `password`) VALUES
('11111111111', '123'),
('22222222222', '123');

-- --------------------------------------------------------

--
-- Estrutura para tabela `patient`
--

CREATE TABLE `patient` (
  `medical_record` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `photo` longblob DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` int(11) DEFAULT NULL UNIQUE,
  `rg` int(11) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cell` int(10) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  `gender` varchar(9) DEFAULT NULL,
  `blood_type` varchar(3) DEFAULT NULL,
  `cid` varchar(3) DEFAULT NULL,
  `complaint` varchar(255) DEFAULT NULL,
  `disease_history` varchar(255) DEFAULT NULL,
  `allergies` varchar(255) DEFAULT NULL,
  `conduct` varchar(255) DEFAULT NULL,
  `physical_state` varchar(255) DEFAULT NULL,
  `exams` longblob DEFAULT NULL,
  `diagnostic_hypothesis` varchar(255) DEFAULT NULL,
  `results` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
