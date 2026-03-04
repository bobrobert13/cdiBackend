-- ============================================
-- MEDREC Database Backup
-- Generated: 2026-03-04T00:45:43.484Z
-- Database: cdi_database
-- ============================================

SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';
SET AUTOCOMMIT = 0;
START TRANSACTION;

CREATE DATABASE IF NOT EXISTS `cdi_database` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cdi_database`;

-- ----------------------------------------
-- Table: cdis
-- ----------------------------------------
DROP TABLE IF EXISTS `cdis`;
CREATE TABLE `cdis` (
  `id_cdi` int NOT NULL AUTO_INCREMENT,
  `numero_cdi` varchar(50) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `encargado` varchar(255) DEFAULT NULL,
  `cuadrante` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `estado` enum('activo','inactivo') NOT NULL DEFAULT 'activo',
  PRIMARY KEY (`id_cdi`),
  UNIQUE KEY `numero_cdi` (`numero_cdi`),
  UNIQUE KEY `cdis_numero_cdi` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_2` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_3` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_4` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_5` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_6` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_7` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_8` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_9` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_10` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_11` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_12` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_13` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_14` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_15` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_16` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_17` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_18` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_19` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_20` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_21` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_22` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_23` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_24` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_25` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_26` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_27` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_28` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_29` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_30` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_31` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_32` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_33` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_34` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_35` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_36` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_37` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_38` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_39` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_40` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_41` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_42` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_43` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_44` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_45` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_46` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_47` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_48` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_49` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_50` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_51` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_52` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_53` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_54` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_55` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_56` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_57` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_58` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_59` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_60` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_61` (`numero_cdi`),
  UNIQUE KEY `numero_cdi_62` (`numero_cdi`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `cdis` (`id_cdi`, `numero_cdi`, `nombre`, `encargado`, `cuadrante`, `createdAt`, `updatedAt`, `estado`) VALUES
(7, '1039', 'Centro Diagnóstico Integral Puerto Cabello', 'Jhonatan Salazar', 'AB-23', '2025-06-22 21:27:25', '2025-09-04 04:46:45', 'activo'),
(8, '1032', 'Centro Diagnóstico Integral La Esperanza', 'Dra. María González', 'CD-92', '2025-06-24 07:19:01', '2025-06-24 07:19:01', 'activo'),
(9, '1088', 'Centro Diagnóstico Integral La Paz', 'Dra. María González', 'NT-22', '2025-06-24 07:30:35', '2025-07-14 05:22:39', 'activo'),
(10, '1021', 'Centro Diagnóstico Integral Paéz', 'Dra. María González', 'CD-21', '2025-06-24 07:34:31', '2025-07-14 05:24:53', 'activo'),
(13, '839', 'Guevara', 'Juan', 'norte', '2025-09-04 04:45:57', '2025-09-04 04:46:17', 'inactivo'),
(14, '10391', 'Antonio Peralta', 'Antonio', 'Sur', '2025-10-28 04:36:56', '2025-10-28 04:36:56', 'activo'),
(15, '1023', 'Antonio', 'Antonino', 'Antonio', '2025-10-28 04:39:59', '2025-10-28 04:39:59', 'activo'),
(16, '1', 'cdiuno', 'Alberto', 'manocdiuno', '2026-01-04 21:23:42', '2026-01-04 21:27:58', 'activo');

-- ----------------------------------------
-- Table: consultas
-- ----------------------------------------
DROP TABLE IF EXISTS `consultas`;
CREATE TABLE `consultas` (
  `id_consulta` int NOT NULL AUTO_INCREMENT,
  `tipo_consulta` varchar(100) NOT NULL,
  `motivo_consulta` text NOT NULL,
  `sintomas` text,
  `notas_medicas` text,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_cdi_id` int NOT NULL,
  `fecha_consulta` datetime DEFAULT NULL,
  `estado_consulta` enum('Activo','Suspendido','Completado') NOT NULL DEFAULT 'Activo',
  PRIMARY KEY (`id_consulta`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_paciente_id` (`fk_paciente_id`),
  KEY `fk_cdi_id` (`fk_cdi_id`),
  CONSTRAINT `consultas_ibfk_1861` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `consultas_ibfk_1862` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `consultas_ibfk_1863` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `consultas` (`id_consulta`, `tipo_consulta`, `motivo_consulta`, `sintomas`, `notas_medicas`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`, `fk_cdi_id`, `fecha_consulta`, `estado_consulta`) VALUES
(25, 'General', 'Fiebre alta y tos fuerte', 'Sin detalles', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi', 5, 11, '2025-08-28 04:11:12', '2025-08-28 04:11:12', 7, '2025-08-27 08:00:00', 'Activo'),
(26, 'General', 'Lorem ipsum dolor sit amet, consectetu', 'Aenean vel erat nisl. Donec hendrerit finibus tristique', 'Aenean gravida posuere leo at consequat. Cras eleifend dictum felis ut maximus. Vivamus et purus vitae massa mattis finibus sit amet et ligula. Cras ut diam nunc. Nam dolor elit, ultrices sit amet orci sit amet, pharetra aliquet orci. Vivamus urna ex, condimentum lobortis congue ut', 5, 11, '2025-08-28 04:23:21', '2025-08-28 04:23:21', 7, '2025-09-17 08:00:00', 'Activo'),
(27, 'General', 'Gripe', 'here are many variatio', 'majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum gen', 5, 9, '2025-09-04 04:25:20', '2025-09-04 04:25:20', 7, '2025-09-04 08:00:00', 'Activo'),
(28, 'General', 'Gripe', 'la gripe lo esta jodiendo', 'la nota metica', 5, 11, '2025-11-26 05:50:37', '2025-11-26 05:50:37', 7, '2025-11-26 08:00:00', 'Activo'),
(29, 'General', 'wqdqwdqwd', 'qwdwqdwqdqwd', 'qwdqwdqwdqwdqwd', 5, 18, '2026-01-05 00:49:56', '2026-01-05 00:49:56', 7, '2026-01-05 08:00:00', 'Activo');

-- ----------------------------------------
-- Table: correos
-- ----------------------------------------
DROP TABLE IF EXISTS `correos`;
CREATE TABLE `correos` (
  `id_correo` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_correo`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `correos` (`id_correo`, `correo`, `createdAt`, `updatedAt`) VALUES
(33, 'emiolio223@gmail.com', '2025-07-07 00:14:02', '2025-07-07 00:14:02'),
(39, 'carlossere@gmail.com', '2025-08-27 01:21:20', '2025-08-28 04:26:52'),
(40, 'ellimail@gmail.comm', '2025-08-28 04:08:24', '2025-08-28 04:08:24'),
(41, 'rodrica@gmail.com', '2025-08-28 04:30:23', '2025-08-28 04:30:43'),
(42, 'rosaa21@gmail.com', '2025-08-28 04:43:58', '2025-08-28 04:43:58'),
(43, 'ramonab@gmail.com', '2025-09-10 05:27:13', '2025-09-10 05:27:13'),
(44, 'fannys72@gmail.com', '2025-10-17 05:40:53', '2025-10-17 05:40:53'),
(45, 'danie82@gmail.com', '2025-10-17 05:50:22', '2025-10-17 05:50:22'),
(46, 'jesusadriaro@gmail.com', '2025-10-26 17:45:25', '2025-10-31 06:26:49'),
(47, 'emiliron@gmail.com', '2025-10-26 18:21:46', '2026-02-12 03:00:14'),
(48, 'leonelpa@gmail.com', '2025-10-28 06:29:27', '2026-02-12 02:56:10'),
(49, 'ramono83@gmail.com', '2026-01-04 21:05:41', '2026-01-04 21:05:41'),
(50, 'ariannasa@gmail.com', '2026-01-05 00:16:08', '2026-01-05 00:16:08'),
(51, 'ramonabac@gmail.com', '2026-01-05 00:21:14', '2026-01-05 00:21:14'),
(52, 'testname@gmail.com', '2026-01-09 00:31:52', '2026-01-09 00:31:52'),
(53, 'testnamedos@gmail.com', '2026-01-09 00:32:46', '2026-01-09 00:32:46'),
(54, 'testhiji@gmail.com', '2026-01-09 01:29:55', '2026-01-09 01:29:55');

-- ----------------------------------------
-- Table: diagnosticos
-- ----------------------------------------
DROP TABLE IF EXISTS `diagnosticos`;
CREATE TABLE `diagnosticos` (
  `id_diagnostico` int NOT NULL AUTO_INCREMENT,
  `fecha_diagnostico` datetime DEFAULT NULL,
  `condicion` varchar(200) NOT NULL,
  `descripcion` text,
  `gravedad` enum('Leve','Moderada','Grave','Crítica') NOT NULL DEFAULT 'Leve',
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_cdi_id` int DEFAULT NULL,
  PRIMARY KEY (`id_diagnostico`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_paciente_id` (`fk_paciente_id`),
  KEY `fk_cdi_id` (`fk_cdi_id`),
  CONSTRAINT `diagnosticos_ibfk_1816` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diagnosticos_ibfk_1817` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diagnosticos_ibfk_1818` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `diagnosticos` (`id_diagnostico`, `fecha_diagnostico`, `condicion`, `descripcion`, `gravedad`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`, `fk_cdi_id`) VALUES
(6, NULL, 'paludismo', ' Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi', 'Moderada', 5, 11, '2025-08-28 04:13:25', '2025-10-26 20:56:26', 7),
(7, NULL, 'Gripesita', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada vestibulum velit, ac convallis magna efficitur eu. Proin sagittis orci ut massa molestie tempor. Nunc pretium accumsan odio. Vivamus pharetra interdum dapibus. Quisque magna ligula, tristique ut felis ut, fermentum elementu', 'Leve', 5, 9, '2025-09-04 04:33:29', '2025-09-04 04:33:29', 7),
(8, NULL, 'Gripesita', 'tis purus finibus. Nam luctus ultricies mollis. Donec malesuada elit tortor, ac rhoncus enim venenatis sed. Ut quis elementum sapien. In rutrum pharetra lorem vel pharetra. Proin lobortis nibh ut orci ornare vehicula. Vestibulum nec erat sed erat blandit fermentum.', 'Leve', 5, 11, '2025-09-04 04:36:39', '2025-09-04 04:36:39', 7);

-- ----------------------------------------
-- Table: direcciones
-- ----------------------------------------
DROP TABLE IF EXISTS `direcciones`;
CREATE TABLE `direcciones` (
  `id_direccion` int NOT NULL AUTO_INCREMENT,
  `parroquia` varchar(100) NOT NULL,
  `codigo_postal` int DEFAULT NULL,
  `numero_casa` int DEFAULT NULL,
  `calle` varchar(100) NOT NULL,
  `punto_referencia` text,
  `sector` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_direccion`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `direcciones` (`id_direccion`, `parroquia`, `codigo_postal`, `numero_casa`, `calle`, `punto_referencia`, `sector`, `createdAt`, `updatedAt`) VALUES
(21, 'El Tigre', 6050, 233, 'Lorem ipsum dolor sit ame', 'Lorem ipsum dolor sit ame', 'Lorem ipsum dolor sit ame', '2025-07-07 00:14:02', '2025-07-07 00:14:02'),
(26, 'El Tigre', 5642, 23, 'Integer a ipsum vitae urna varius egestas Integer laoreet', 'm vitae urna varius egestas Integer laoreet Integer a ipsum vitae urna varius egestas Integer laoreet m vitae urna varius eges', 'm vitae urna varius egestas Integer laoreet', '2025-07-29 05:43:18', '2025-07-29 05:43:18'),
(27, 'El Tigre', 5060, 22, 'Lorrem', 'lorem ipsum dolor sit ame', 'lorem ipsum dolor sit ame', '2025-08-27 01:18:55', '2025-08-27 01:18:58'),
(28, 'El Tigre', 6050, 54, 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', '2025-08-28 04:08:24', '2025-08-28 04:08:24'),
(29, 'Puerto La Cruz', 6009, 244, 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', '2025-08-28 04:30:23', '2025-08-28 04:30:23'),
(30, 'El Tigre', 6050, 6662, 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', '2025-08-28 04:43:58', '2025-08-28 04:43:58'),
(31, 'El Tigre', 6050, 21, 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', '2025-09-10 05:27:13', '2025-09-10 05:27:13'),
(32, 'San José de Guanipa', 8053, 98, 'Calle el triunfo', 'La cancha luego de la av republica', 'Unberto simonobis', '2025-10-17 05:40:53', '2025-10-17 05:40:53'),
(33, 'El Tigre', 8032, 92, 'Una ubicacion sin fin', 'prueba de informacion', 'prueba de informacion', '2025-10-17 05:50:22', '2025-10-17 05:50:22'),
(34, 'El Tigre', 6050, 23, 'Est in dolores consetetur et no et velit takimata sanctus', 'Est in dolores consetetur', 'Est in dolores', '2025-10-26 17:45:25', '2025-10-31 06:26:49'),
(35, 'El Tigre', 6050, 21, 'Est in dolores consetetur et no et velit takimata sanctus', 'Est in dolores consetetur et no et velit takimata sanctus', 'Est in dolores consetetur et no et velit takimata sanctus', '2025-10-26 18:21:46', '2026-02-12 03:00:14'),
(36, 'El Tigre', 6050, 2, 'Consequat blandit vel tempor volutpat invidunt est nonumy vel illum', 'fdasssssssssssssssssssss', 'asfddddddddddddddddddd', '2025-10-28 06:29:27', '2026-02-12 02:56:10'),
(37, 'El Tigre', 6050, 28, 'Av 32. Mon Intercomunal', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'test1test1test1test1test1', '2026-01-04 21:05:41', '2026-01-04 21:05:41'),
(38, 'El Tigre', 6050, 28, 'Av 23 intercomunal', 'testtesttesttest', 'test', '2026-01-05 00:16:08', '2026-01-05 00:16:08'),
(39, 'El Tigre', 6050, 28, 'av intercomunal test', 'av intercomunal test', 'av intercomunal test', '2026-01-05 00:21:14', '2026-01-05 00:21:14'),
(40, 'El Tigre', 21122, 982, 'test', 'test', 'test', '2026-01-09 00:31:52', '2026-01-09 00:31:52'),
(41, 'El Tigre', 6050, 23, 'testnamedos', 'testnamedos', 'testnamedos', '2026-01-09 00:32:46', '2026-01-09 00:32:46'),
(42, 'El Tigre', 6050, 233, 'testhiji', 'testhiji', 'testhiji', '2026-01-09 01:29:55', '2026-01-09 01:29:55');

-- ----------------------------------------
-- Table: doctores
-- ----------------------------------------
DROP TABLE IF EXISTS `doctores`;
CREATE TABLE `doctores` (
  `id_doctor` int NOT NULL AUTO_INCREMENT,
  `anos_experiencia` int NOT NULL DEFAULT '0',
  `numero_carnet` varchar(50) NOT NULL,
  `area_de_trabajo` varchar(100) NOT NULL,
  `horario` varchar(200) DEFAULT NULL,
  `fk_persona_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_cdi_id` int DEFAULT NULL,
  PRIMARY KEY (`id_doctor`),
  KEY `fk_persona_id` (`fk_persona_id`),
  KEY `fk_cdi_id` (`fk_cdi_id`),
  CONSTRAINT `doctores_ibfk_817` FOREIGN KEY (`fk_persona_id`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `doctores_ibfk_818` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `doctores` (`id_doctor`, `anos_experiencia`, `numero_carnet`, `area_de_trabajo`, `horario`, `fk_persona_id`, `createdAt`, `updatedAt`, `fk_cdi_id`) VALUES
(5, 5, 'DOC-001', 'Pediatría', 'Lunes a Viernes 8:00-16:00', 10, '2025-06-22 21:27:25', '2025-06-22 21:27:25', 7),
(18, 7, 'A-239', 'Laboratorio', 'Lunes a Viernes 10:00 am - 4:00 pm', 38, '2025-08-28 04:30:23', '2025-08-28 04:30:43', 7),
(19, 4, 'A-203', 'Emergencias', 'Sábados 9:00 am - 1:00 pm', 39, '2025-08-28 04:43:58', '2025-08-28 04:43:58', 7),
(20, 4, '00293', 'Hospitalizacion', 'Lunes a Viernes 9:00 am - 5:00 pm', 43, '2025-10-26 17:45:25', '2025-10-26 17:45:25', 7),
(21, 2, '02933', 'Enfermeria', 'Sábados 10:00 am - 2:00 pm', 44, '2025-10-26 18:21:46', '2025-10-26 18:21:46', 7),
(22, 5, '221', 'TerapiasIntensivas', 'Lunes a Viernes 10:00 am - 4:00 pm', 45, '2025-10-28 06:29:27', '2025-10-31 06:08:36', 7);

-- ----------------------------------------
-- Table: emergencias
-- ----------------------------------------
DROP TABLE IF EXISTS `emergencias`;
CREATE TABLE `emergencias` (
  `id_emergencia` int NOT NULL AUTO_INCREMENT,
  `motivo_emergencia` text NOT NULL,
  `diagnostico_provisional` text,
  `estado_paciente` varchar(100) NOT NULL,
  `procesamiento_realizado` text,
  `tiempo_atencion` int DEFAULT NULL COMMENT 'Tiempo en minutos',
  `notas_de_atencion` text,
  `destino` varchar(200) DEFAULT NULL COMMENT 'Destino del paciente después de la emergencia',
  `fk_paciente_id` int NOT NULL,
  `fk_doctor_id` int NOT NULL,
  `fk_cdi_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `estado_emergencia` enum('Activo','Finalizado') NOT NULL DEFAULT 'Activo',
  `fecha_ingreso` datetime DEFAULT NULL,
  `fecha_egreso` datetime DEFAULT NULL,
  PRIMARY KEY (`id_emergencia`),
  KEY `fk_paciente_id` (`fk_paciente_id`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_cdi_id` (`fk_cdi_id`),
  CONSTRAINT `emergencias_ibfk_1429` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `emergencias_ibfk_1430` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `emergencias_ibfk_1431` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `emergencias` (`id_emergencia`, `motivo_emergencia`, `diagnostico_provisional`, `estado_paciente`, `procesamiento_realizado`, `tiempo_atencion`, `notas_de_atencion`, `destino`, `fk_paciente_id`, `fk_doctor_id`, `fk_cdi_id`, `createdAt`, `updatedAt`, `estado_emergencia`, `fecha_ingreso`, `fecha_egreso`) VALUES
(2, ' Vestibulum sodales sem at pellentesque posuere', ' Vestibulum sodales sem at pellentesque posuere', ' Vestibulum sodales sem at pellentesque posuere', ' Vestibulum sodales sem at pellentesque posuere', 3, ' Vestibulum sodales sem at pellentesque posuere', ' Vestibulum sodales sem at pellentesque posuere', 12, 5, 7, '2025-09-11 04:40:40', '2025-09-11 04:40:40', 'Activo', '2025-09-10 12:00:00', '2025-09-26 02:00:00'),
(3, 'ta grave loco', 'sisis', 'casi muerto', 'afsdasfdasdf', 4, 'alsjfdasdfjasdf', 'hospital', 9, 5, 7, '2025-11-28 04:14:35', '2026-01-04 20:20:44', 'Finalizado', '2025-11-27 08:00:00', '2026-01-04 20:20:44'),
(4, 'Mano tas mal', 'sisis', 'Grave', 'askdfasldfjklasdfj', 4, 'xxxxxxxxxxxxxxxxxxxxxxx', 'hospital', 9, 5, 7, '2026-01-04 20:23:47', '2026-01-04 20:25:02', 'Finalizado', '2026-01-04 08:00:00', '2026-01-04 20:25:02'),
(5, 'tiene enfermo', 'test 1', 'test 1', 'test 1', 3, 'test 1test 1test 1', 'test 1', 9, 5, 7, '2026-01-04 20:40:11', '2026-01-04 20:42:19', 'Finalizado', '2026-01-04 08:00:00', '2026-01-04 20:42:19'),
(6, 'asdfsdfa', 'sfdasfdafsd', 'afsdasdfa', 'sfdafdasafsdfasd', 4, 'sdfafdafdasdasf', 'asdfafsdsdfasdfa', 18, 5, 7, '2026-01-05 01:21:28', '2026-01-05 01:21:56', 'Finalizado', '2026-01-05 01:21:19', '2026-01-05 01:21:56');

-- ----------------------------------------
-- Table: examenes_resultados
-- ----------------------------------------
DROP TABLE IF EXISTS `examenes_resultados`;
CREATE TABLE `examenes_resultados` (
  `id_examenes` int NOT NULL AUTO_INCREMENT,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `tipo_de_examen` enum('Sangre','Orina','Radiografía','Tomografía','Resonancia Magnética','Ecografía','Electrocardiograma','Endoscopia','Biopsia','Cultivo','Análisis Genético','Prueba de Esfuerzo','Mamografía','Densitometría','Otros') NOT NULL,
  `descripcion` text,
  `resultados` text,
  `estado_examen` enum('Pendiente','Completado','Cancelado') NOT NULL DEFAULT 'Pendiente',
  `medico_solicitante` varchar(100) DEFAULT NULL,
  `laboratorio_centro` varchar(150) DEFAULT NULL,
  `valores_referencia` text COMMENT 'Valores normales de referencia para el examen',
  `observaciones` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_examenes`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_paciente_id` (`fk_paciente_id`),
  CONSTRAINT `examenes_resultados_ibfk_1343` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `examenes_resultados_ibfk_1344` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `examenes_resultados` (`id_examenes`, `fk_doctor_id`, `fk_paciente_id`, `tipo_de_examen`, `descripcion`, `resultados`, `estado_examen`, `medico_solicitante`, `laboratorio_centro`, `valores_referencia`, `observaciones`, `createdAt`, `updatedAt`) VALUES
(7, 5, 11, 'Sangre', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'qwdqwdqwd', 'Pendiente', 'qwdqwdqwd', 'sit amet, consec', 'qwdqwdqwd', '', '2025-08-28 04:14:13', '2025-08-28 04:14:13'),
(8, 5, 11, 'Orina', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'qwqwwqwq', 'Pendiente', 'wdqqwdqwdwqdwqd', 't amet, consectetur adipiscing elit', 'wqwqwqwqqwwq', '', '2025-08-28 04:17:43', '2025-08-28 04:17:43'),
(9, 5, 22, 'Sangre', 'xxxxxxxxxxxxxxxxx', NULL, 'Pendiente', NULL, 'xxxxxxxxxxxxxxxxxxxxxxxxxx', NULL, '', '2026-02-12 03:23:28', '2026-02-12 03:23:28'),
(10, 5, 22, 'Orina', 'qddwwqddqwqw', NULL, 'Pendiente', NULL, 'dqwqdwdqwqdwdwq', NULL, '', '2026-02-12 03:24:34', '2026-02-12 03:24:34');

-- ----------------------------------------
-- Table: historial_medico
-- ----------------------------------------
DROP TABLE IF EXISTS `historial_medico`;
CREATE TABLE `historial_medico` (
  `id_historial` int NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `estado_anterior` varchar(100) DEFAULT NULL,
  `estado_posterior` varchar(100) DEFAULT NULL,
  `usuario_responsable` varchar(100) NOT NULL,
  `notas_adicionales` text,
  `categoria_evento` enum('Consulta','Emergencia','Cirugía','Tratamiento','Diagnóstico','Seguimiento','Hospitalización','Alta médica') NOT NULL,
  `fecha_evento` datetime NOT NULL,
  `fk_consulta_id` int DEFAULT NULL,
  `fk_emergencia_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_historial`),
  KEY `fk_emergencia_id` (`fk_emergencia_id`),
  KEY `fk_consulta_id` (`fk_consulta_id`),
  CONSTRAINT `historial_medico_ibfk_1` FOREIGN KEY (`fk_consulta_id`) REFERENCES `consultas` (`id_consulta`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------------
-- Table: hospitalizacion
-- ----------------------------------------
DROP TABLE IF EXISTS `hospitalizacion`;
CREATE TABLE `hospitalizacion` (
  `id_hospitalizacion` int NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` datetime NOT NULL,
  `fecha_egreso` datetime DEFAULT NULL,
  `motivo_de_hospitalizacion` text NOT NULL,
  `unidad_hospitalaria` varchar(100) NOT NULL,
  `estado` enum('Activo','Finalizado') NOT NULL DEFAULT 'Activo',
  `notas_medicas` text,
  `fk_doctor_id` int DEFAULT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_cdi_id` int NOT NULL,
  PRIMARY KEY (`id_hospitalizacion`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_paciente_id` (`fk_paciente_id`),
  KEY `fk_cdi_id` (`fk_cdi_id`),
  CONSTRAINT `hospitalizacion_ibfk_1832` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `hospitalizacion_ibfk_1833` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON UPDATE CASCADE,
  CONSTRAINT `hospitalizacion_ibfk_1834` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `hospitalizacion` (`id_hospitalizacion`, `fecha_ingreso`, `fecha_egreso`, `motivo_de_hospitalizacion`, `unidad_hospitalaria`, `estado`, `notas_medicas`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`, `fk_cdi_id`) VALUES
(3, '2025-09-11 08:00:00', '2025-09-18 12:00:58', 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet velit ante accumsan arcu', 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet velit ante accumsan arcu', 'Finalizado', 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet velit ante accumsan arcu', 5, 12, '2025-09-11 03:40:19', '2025-09-11 03:49:23', 7),
(4, '2026-01-04 08:00:00', '2026-01-04 20:45:33', 'manoooooooooo=1', 'manoooooooooo=1', 'Finalizado', 'manoooooooooo=1manoooooooooo=1', 5, 9, '2026-01-04 20:45:05', '2026-01-04 20:45:33', 7),
(5, '2026-01-04 20:52:52', '2026-01-04 20:53:39', 'xxxxxxxxxxxxxxxxx2', 'xxxxxxxxxxxxxxxxx2', 'Finalizado', 'xxxxxxxxxxxxxxxxx2', 5, 9, '2026-01-04 20:53:06', '2026-01-04 20:53:39', 7);

-- ----------------------------------------
-- Table: imagenes_medicas
-- ----------------------------------------
DROP TABLE IF EXISTS `imagenes_medicas`;
CREATE TABLE `imagenes_medicas` (
  `id_imagenes_medicas` int NOT NULL AUTO_INCREMENT,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `tipo_imagen` varchar(100) NOT NULL,
  `fecha_captura` datetime NOT NULL,
  `descripcion` text,
  `formato` varchar(20) NOT NULL,
  `resolucion` varchar(50) DEFAULT NULL,
  `tamaño` decimal(10,2) DEFAULT NULL,
  `equipo_utilizado` varchar(200) DEFAULT NULL,
  `estado` varchar(50) NOT NULL DEFAULT 'Pendiente',
  `region_anatomica` varchar(100) NOT NULL,
  `interpretacion_medica` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_imagenes_medicas`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_paciente_id` (`fk_paciente_id`),
  CONSTRAINT `imagenes_medicas_ibfk_1341` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `imagenes_medicas_ibfk_1342` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------------
-- Table: medicamentos
-- ----------------------------------------
DROP TABLE IF EXISTS `medicamentos`;
CREATE TABLE `medicamentos` (
  `id_medicamento` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `dosis` varchar(100) NOT NULL COMMENT 'Ejemplo: 500mg, 10ml, 1 tableta',
  `via_administracion` enum('Oral','Intravenosa','Intramuscular','Subcutánea','Tópica','Oftálmica','Ótica','Nasal','Rectal','Vaginal','Inhalatoria','Sublingual','Transdérmica') NOT NULL,
  `frecuencia` varchar(100) NOT NULL COMMENT 'Ejemplo: Cada 8 horas, 2 veces al día, Una vez por semana',
  `duracion` varchar(50) DEFAULT NULL COMMENT 'Ejemplo: 7 días, 2 semanas, Indefinido',
  `observaciones` text,
  `principio_activo` varchar(200) DEFAULT NULL,
  `laboratorio` varchar(100) DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `medico_prescriptor` varchar(100) DEFAULT NULL,
  `estado_tratamiento` enum('Activo','Suspendido','Completado') NOT NULL DEFAULT 'Activo',
  `tipo_medicamento` enum('Antibiotico','Analgesico','Antiinflamatorio','Antihipertensivo','Antidiabetico','Anticoagulante','Vitamina','Suplemento','Hormonal','Psiquiatrico','Cardiovascular','Respiratorio','Digestivo','Otros') DEFAULT NULL,
  `contraindicaciones` text,
  `efectos_secundarios` text,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_medicamento`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_paciente_id` (`fk_paciente_id`),
  CONSTRAINT `medicamentos_ibfk_1337` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `medicamentos_ibfk_1338` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `medicamentos` (`id_medicamento`, `nombre`, `dosis`, `via_administracion`, `frecuencia`, `duracion`, `observaciones`, `principio_activo`, `laboratorio`, `fecha_inicio`, `fecha_fin`, `medico_prescriptor`, `estado_tratamiento`, `tipo_medicamento`, `contraindicaciones`, `efectos_secundarios`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`) VALUES
(5, 'Diclofenac', '1 tableta', 'Oral', 'Cada 8 horas', '7 días', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi. Duis gravida odio at orci ullamcorper interdum. Ut at est nisl. Aliquam condimentum nisl tortor, nec tincidunt neque facilisis id. Aliquam in venenatis purus. Sed tempus lorem in consequat placerat. Donec finibus justo lacinia massa egestas euismod.', 'diclofenaco sódico', NULL, '2025-08-27 08:00:00', '2025-09-03 08:00:00', NULL, 'Activo', 'Antibiotico', 'orem ipsum dolor sit amet, consectetur adipiscing elit. ', 'orem ipsum dolor sit amet, consectetur adipiscing elit. ', 5, 11, '2025-08-28 04:21:51', '2025-08-28 04:21:51');

-- ----------------------------------------
-- Table: pacientes
-- ----------------------------------------
DROP TABLE IF EXISTS `pacientes`;
CREATE TABLE `pacientes` (
  `id_paciente` int NOT NULL AUTO_INCREMENT,
  `enfermedades_cronicas` text,
  `peso` decimal(5,2) DEFAULT NULL,
  `vacunas` text,
  `discapacidad` text,
  `antecedentes_familiares` text,
  `tipo_de_sangre` varchar(10) DEFAULT NULL,
  `alergias` text,
  `fk_persona_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_doctor_id` int DEFAULT NULL,
  `fk_cdi_id` int DEFAULT NULL,
  `documento_identidad_representante` int DEFAULT NULL,
  `numero_orden_representante` int DEFAULT NULL,
  PRIMARY KEY (`id_paciente`),
  KEY `fk_persona_id` (`fk_persona_id`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_cdi_id` (`fk_cdi_id`),
  CONSTRAINT `pacientes_ibfk_1228` FOREIGN KEY (`fk_persona_id`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pacientes_ibfk_1229` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pacientes_ibfk_1230` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `pacientes` (`id_paciente`, `enfermedades_cronicas`, `peso`, `vacunas`, `discapacidad`, `antecedentes_familiares`, `tipo_de_sangre`, `alergias`, `fk_persona_id`, `createdAt`, `updatedAt`, `fk_doctor_id`, `fk_cdi_id`, `documento_identidad_representante`, `numero_orden_representante`) VALUES
(9, 'Hipertensión arterial y dislipidemia tratada con Amlodipino 5 mg cada 12 h', '78.50', 'Esquema completo COVID-19 (3 dosis de Pfizer/BioNTech), gripe estacional 2023, refuerzo DPT en 2020', 'Ninguna', 'Abuela materna y madre con diabetes tipo 2 diagnosticada después de los 45 años, padre fallecido por infarto agudo de miocardio a los 62 años', 'O (O⁺)', 'Hipersensibilidad confirmada a penicilina (erupción cutánea maculopapular y prurito)', 32, '2025-07-07 00:14:02', '2025-07-07 00:14:02', 5, 7, NULL, NULL),
(11, 'Duis gravida odio at orci ullamcorper interdum', '76.00', 'rubeola', 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', 'B+', 'Duis gravida odio at orci ullamcorper interdum', 37, '2025-08-28 04:08:24', '2025-08-28 04:08:24', 5, 7, NULL, NULL),
(12, 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', '78.00', 'hepatitis_B', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 'B+', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 40, '2025-09-10 05:27:13', '2025-09-10 05:27:13', 5, 7, 29019288, 299),
(13, 'asdsdaasdsad', '22.00', 'varicela', 'asdsadasdasdsadsda', 'asdsadasddassad', 'B+', 'asdasdsdaasdasdasddasdsaasd', 10, '2025-10-17 05:25:23', '2025-10-17 05:25:23', 5, 7, NULL, NULL),
(14, 'Proin ultricies vitae enim quis dignissim', '87.00', 'hepatitis_B', 'Proin ultricies vitae enim quis dignissim', 'Proin ultricies vitae enim quis dignissim', 'B+', 'Proin ultricies vitae enim quis dignissim', 41, '2025-10-17 05:40:53', '2025-10-17 05:40:53', 5, 7, NULL, NULL),
(15, 'prueba de informacion', '87.00', 'hepatitis_A', 'prueba de informacion', 'prueba de informacion', 'AB+', 'prueba de informacion', 42, '2025-10-17 05:50:22', '2025-10-17 05:50:22', 5, 7, NULL, NULL),
(16, 'wedwdfwefwfewef', '87.00', 'hepatitis_B', 'weffwewefwefwfe', 'wfeefwefwefwefw', 'A-', 'weffweefwewfefwefwewf', 46, '2026-01-04 21:05:41', '2026-01-04 21:05:41', 5, 7, NULL, NULL),
(17, 'testtesttest', '78.00', 'hepatitis_B', 'testtesttesttest', 'testtesttest', 'B+', 'testtesttest', 47, '2026-01-05 00:16:08', '2026-01-05 00:16:08', 5, 7, NULL, NULL),
(18, 'av intercomunal test', '89.00', 'sarampion', 'av intercomunal test', 'av intercomunal test', 'AB-', 'av intercomunal test', 48, '2026-01-05 00:21:14', '2026-01-05 00:21:14', 5, 7, 8992883, 1),
(19, 'test', '88.00', 'tetano', 'test', 'test', 'A-', 'test', 49, '2026-01-09 00:31:52', '2026-01-09 00:31:52', 5, 7, 27317783, 211122),
(20, 'testnamedos', '67.00', 'tetano', 'testnamedos', 'testnamedos', 'B-', 'testnamedos', 50, '2026-01-09 00:32:46', '2026-01-09 00:32:46', 5, 7, NULL, NULL),
(21, 'testhiji', '54.00', 'hepatitis_A', 'testhiji', 'testhiji', 'A+', 'testhiji', 51, '2026-01-09 01:29:55', '2026-01-09 01:29:55', 5, 7, 27317783, 2232),
(22, 'xxxxxxxxxxxxxxxxxxxxxxxxxxx', '98.00', 'Ninguna', 'xxxxxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxxxxx', 'A+', 'xxxxxxxxxxxxxxxxxxxxxxxxxxx', 38, '2026-02-12 03:08:20', '2026-02-12 03:08:20', 5, 7, NULL, NULL);

-- ----------------------------------------
-- Table: personas
-- ----------------------------------------
DROP TABLE IF EXISTS `personas`;
CREATE TABLE `personas` (
  `id_persona` int NOT NULL AUTO_INCREMENT,
  `nombre1` varchar(500) NOT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `estado_civil` varchar(20) DEFAULT NULL,
  `ocupacion` varchar(100) DEFAULT NULL,
  `cedula_identidad` int DEFAULT NULL,
  `fk_cdi_id` int DEFAULT NULL,
  `fk_direccion_id` int DEFAULT NULL,
  `fk_telefono_id` int DEFAULT NULL,
  `fk_correo_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `nacionalidad` varchar(25) NOT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `fk_cdi_id` (`fk_cdi_id`),
  KEY `fk_direccion_id` (`fk_direccion_id`),
  KEY `fk_telefono_id` (`fk_telefono_id`),
  KEY `fk_correo_id` (`fk_correo_id`),
  CONSTRAINT `personas_ibfk_2664` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_2665` FOREIGN KEY (`fk_direccion_id`) REFERENCES `direcciones` (`id_direccion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_2666` FOREIGN KEY (`fk_telefono_id`) REFERENCES `telefonos` (`id_telefono`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_2667` FOREIGN KEY (`fk_correo_id`) REFERENCES `correos` (`id_correo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `personas` (`id_persona`, `nombre1`, `sexo`, `edad`, `estado_civil`, `ocupacion`, `cedula_identidad`, `fk_cdi_id`, `fk_direccion_id`, `fk_telefono_id`, `fk_correo_id`, `createdAt`, `updatedAt`, `nacionalidad`) VALUES
(10, 'Carlos', 'Masculino', 32, 'Soltero', 'Quirofano', 87654321, 7, 27, 40, 39, '2025-06-22 21:27:25', '2025-08-28 04:26:52', 'Venezolano/a'),
(32, 'Edmundo G', 'Masculino', 50, 'Soltero', 'Lorem ipsum dolor sit ame', 2837477, 7, 21, 33, 33, '2025-07-07 00:14:02', '2025-07-07 00:14:02', 'Extranjero/a'),
(37, 'Emilia Lopez', 'Femenino', 19, 'Soltero', 'Duis gravida odio at orci ullamcorper interdum', 28392839, 7, 28, 41, 40, '2025-08-28 04:08:24', '2025-08-28 04:08:24', 'Venezolano/a'),
(38, 'Rodrigo Camacho', 'Masculino', 28, 'Soltero', 'Doctor Especialista', 18283293, 7, 29, 42, 41, '2025-08-28 04:30:23', '2025-08-28 04:30:43', 'Venezolano/a'),
(39, 'Rosa A', 'Femenino', 29, 'Soltero', 'Especialista', 2039844, 7, 30, 43, 42, '2025-08-28 04:43:58', '2025-08-28 04:43:58', 'Venezolano/a'),
(40, 'Ramon Marquez', 'Masculino', 15, 'Soltero', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 83928839, 7, 31, 44, 43, '2025-09-10 05:27:13', '2025-09-10 05:27:13', 'Venezolano/a'),
(41, 'Fanny Martinez', 'Femenino', 48, 'Casado', 'Proin ultricies vitae enim quis dignissim', 14132830, 7, 32, 45, 44, '2025-10-17 05:40:53', '2025-10-17 05:40:53', 'Venezolano/a'),
(42, 'Daniel Herrera', 'Masculino', 70, 'Divorciado', 'Sin empleo', 31839283, 7, 33, 46, 45, '2025-10-17 05:50:22', '2025-10-17 05:50:22', 'Venezolano/a'),
(43, 'Jesus Adrian Romero', 'Masculino', 43, 'Casado', 'Doctor', 13728338, 7, 34, 47, 46, '2025-10-26 17:45:25', '2025-10-31 06:26:49', 'Venezolano/a'),
(44, 'Emili Rondon', 'Femenino', 26, 'Soltero', 'Doctor', 24928392, 7, 35, 48, 47, '2025-10-26 18:21:46', '2026-02-12 03:00:14', 'Venezolano/a'),
(45, 'Leonel Padillasss', NULL, 34, NULL, 'Doctor', 27839228, 7, 36, 49, 48, '2025-10-28 06:29:27', '2026-02-12 02:56:10', 'Venezolano/a'),
(46, 'Ramon Mano', 'Masculino', 67, 'Casado', 'ewfewfwefewfewfwewef', 28938929, 7, 37, 50, 49, '2026-01-04 21:05:41', '2026-01-04 21:05:41', 'Venezolano/a'),
(47, 'Arianna Salazar', 'Masculino', 20, 'Soltero', 'testtesttest', 14132839, 7, 38, 51, 50, '2026-01-05 00:16:08', '2026-01-05 00:16:08', 'Venezolano/a'),
(48, 'Ramon Abache', 'Femenino', 8, 'Casado', 'av intercomunal test', NULL, 7, 39, 52, 51, '2026-01-05 00:21:14', '2026-01-05 00:21:14', 'Venezolano/a'),
(49, 'test name', 'Masculino', 3, 'Soltero', 'test', NULL, 7, 40, 53, 52, '2026-01-09 00:31:52', '2026-01-09 00:31:52', 'Venezolano/a'),
(50, 'testnamedos', 'Masculino', 30, 'Soltero', 'testnamedos', 27317783, 7, 41, 54, 53, '2026-01-09 00:32:46', '2026-01-09 00:32:46', 'Venezolano/a'),
(51, 'testhiji', 'Masculino', 10, 'Soltero', 'testhiji', NULL, 7, 42, 55, 54, '2026-01-09 01:29:55', '2026-01-09 01:29:55', 'Venezolano/a');

-- ----------------------------------------
-- Table: pins_recuperacion
-- ----------------------------------------
DROP TABLE IF EXISTS `pins_recuperacion`;
CREATE TABLE `pins_recuperacion` (
  `id_pin` int NOT NULL AUTO_INCREMENT,
  `pin` varchar(255) NOT NULL,
  `fk_usuario_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pin`),
  KEY `fk_usuario_id` (`fk_usuario_id`),
  CONSTRAINT `pins_recuperacion_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------------
-- Table: preguntas_seguridad
-- ----------------------------------------
DROP TABLE IF EXISTS `preguntas_seguridad`;
CREATE TABLE `preguntas_seguridad` (
  `id_pregunta` int NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(255) NOT NULL,
  `respuesta` varchar(255) NOT NULL,
  `fk_usuario_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pregunta`),
  KEY `fk_usuario_id` (`fk_usuario_id`),
  CONSTRAINT `preguntas_seguridad_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------------
-- Table: roles
-- ----------------------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------------
-- Table: seguridad
-- ----------------------------------------
DROP TABLE IF EXISTS `seguridad`;
CREATE TABLE `seguridad` (
  `id_seguridad` int NOT NULL AUTO_INCREMENT,
  `pregunta1` varchar(200) NOT NULL,
  `respuesta1` varchar(200) NOT NULL,
  `pregunta2` varchar(200) NOT NULL,
  `respuesta2` varchar(200) NOT NULL,
  `pregunta3` varchar(200) NOT NULL,
  `respuesta3` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_seguridad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------------
-- Table: telefonos
-- ----------------------------------------
DROP TABLE IF EXISTS `telefonos`;
CREATE TABLE `telefonos` (
  `id_telefono` int NOT NULL AUTO_INCREMENT,
  `codigo` int DEFAULT NULL,
  `numero` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_telefono`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `telefonos` (`id_telefono`, `codigo`, `numero`, `createdAt`, `updatedAt`) VALUES
(33, 414, 34345343, '2025-07-07 00:14:02', '2025-07-07 00:14:02'),
(40, 412, 2918273, '2025-08-27 01:20:55', '2025-08-28 04:26:52'),
(41, 414, 8442093, '2025-08-28 04:08:24', '2025-08-28 04:08:24'),
(42, 414, 29382, '2025-08-28 04:30:23', '2025-08-28 04:30:43'),
(43, 414, 5938838, '2025-08-28 04:43:58', '2025-08-28 04:43:58'),
(44, 414, 42212233, '2025-09-10 05:27:13', '2025-09-10 05:27:13'),
(45, 414, 48392383, '2025-10-17 05:40:53', '2025-10-17 05:40:53'),
(46, 414, 9283928, '2025-10-17 05:50:22', '2025-10-17 05:50:22'),
(47, 426, 82733382, '2025-10-26 17:45:25', '2025-10-31 06:26:49'),
(48, 414, 21344322, '2025-10-26 18:21:46', '2026-02-12 03:00:14'),
(49, 416, 82738832, '2025-10-28 06:29:27', '2026-02-12 02:56:10'),
(50, 414, 92883992, '2026-01-04 21:05:41', '2026-01-04 21:05:41'),
(51, 414, 4928389, '2026-01-05 00:16:08', '2026-01-05 00:16:08'),
(52, 414, 332322323, '2026-01-05 00:21:14', '2026-01-05 00:21:14'),
(53, 414, 4837732, '2026-01-09 00:31:52', '2026-01-09 00:31:52'),
(54, 414, 21121221, '2026-01-09 00:32:46', '2026-01-09 00:32:46'),
(55, 414, 9298382, '2026-01-09 01:29:55', '2026-01-09 01:29:55');

-- ----------------------------------------
-- Table: tratamientos
-- ----------------------------------------
DROP TABLE IF EXISTS `tratamientos`;
CREATE TABLE `tratamientos` (
  `id_tratamiento` int NOT NULL AUTO_INCREMENT,
  `tipo_de_tratamiento` varchar(100) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_culminacion` datetime DEFAULT NULL,
  `estado` enum('Activo','Suspendido','Finalizado') NOT NULL DEFAULT 'Activo',
  `detalles` text,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_tratamiento`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_paciente_id` (`fk_paciente_id`),
  CONSTRAINT `tratamientos_ibfk_1353` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tratamientos_ibfk_1354` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `tratamientos` (`id_tratamiento`, `tipo_de_tratamiento`, `fecha_inicio`, `fecha_culminacion`, `estado`, `detalles`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`) VALUES
(4, 'Quimioterapia', '2025-09-02 08:00:00', '2025-09-23 08:00:00', 'Finalizado', 'quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi. Duis gravida odio at orci ullamcorper interdum. Ut at est nisl', 5, 11, '2025-08-28 04:19:34', '2025-09-18 03:58:11'),
(5, 'Farmacologico', '2025-09-17 08:00:00', '2025-09-24 08:00:00', 'Finalizado', 'Orci varius natoque penatibus et magnis dis parturient montes', 5, 9, '2025-09-18 03:57:53', '2025-09-18 03:58:04'),
(6, 'Fisioterapia', '2026-02-11 08:00:00', '2026-02-12 08:00:00', 'Activo', 'qwdqwddqwdqwdqw', 5, 22, '2026-02-12 03:24:54', '2026-02-12 03:24:54'),
(7, 'Fisioterapia', '2026-02-12 08:00:00', '2026-02-20 08:00:00', 'Activo', 'qwddddddddddddd', 5, 22, '2026-02-12 03:25:05', '2026-02-12 03:25:05');

-- ----------------------------------------
-- Table: usuarios
-- ----------------------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) DEFAULT NULL,
  `nombre_usuario` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `estado` enum('activo','inactivo','suspendido') NOT NULL DEFAULT 'activo',
  `fk_doctor_id` int DEFAULT NULL,
  `fk_cdi_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `contrasena` varchar(300) NOT NULL,
  `id_pregunta` int DEFAULT NULL,
  `id_pin` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `fk_doctor_id` (`fk_doctor_id`),
  KEY `fk_cdi_id` (`fk_cdi_id`),
  KEY `id_pregunta` (`id_pregunta`),
  KEY `id_pin` (`id_pin`),
  CONSTRAINT `usuarios_ibfk_2610` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON UPDATE CASCADE,
  CONSTRAINT `usuarios_ibfk_2611` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON UPDATE CASCADE,
  CONSTRAINT `usuarios_ibfk_2612` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas_seguridad` (`id_pregunta`),
  CONSTRAINT `usuarios_ibfk_2613` FOREIGN KEY (`id_pin`) REFERENCES `pins_recuperacion` (`id_pin`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `usuarios` (`id_usuario`, `rol`, `nombre_usuario`, `fecha_creacion`, `estado`, `fk_doctor_id`, `fk_cdi_id`, `createdAt`, `updatedAt`, `contrasena`, `id_pregunta`, `id_pin`) VALUES
(10, 'doctor', 'DrCarlos', '2025-06-22 21:27:25', 'activo', 5, 7, '2025-06-22 21:27:25', '2025-11-07 04:51:50', '$2b$13$7pzrV7qzSSQCoihxrXQ5FegPL6T..dFogYrQaJVOmuGcgLGMUvKTG', NULL, NULL),
(12, 'cdi', 'cdi-admin', '2025-06-22 21:27:25', 'activo', NULL, 7, '2025-06-22 21:27:25', '2025-09-04 04:46:45', '$2a$13$pPyjdabspNbDBNJQCKosCe3CgTt0POAER5ff3gI9lOas5xIOhkKF6', NULL, NULL),
(13, 'admin', 'superadmin', '2025-06-22 21:27:25', 'activo', NULL, NULL, '2025-06-22 21:27:25', '2025-06-22 21:27:25', '$2a$13$pPyjdabspNbDBNJQCKosCe3CgTt0POAER5ff3gI9lOas5xIOhkKF6', NULL, NULL),
(31, 'doctor', 'drcamacho', '2025-08-28 04:30:24', 'activo', 18, 7, '2025-08-28 04:30:24', '2025-09-04 04:46:45', '$2b$13$NvRxvuVymL7AIKF..jXUt.PTz9XPcvrMGzwmWOuWykEWJ/5X2Iz/m', NULL, NULL),
(32, 'doctor', 'rosaA', '2025-08-28 04:43:59', 'activo', 19, 7, '2025-08-28 04:43:59', '2025-09-04 04:46:45', '$2b$13$YrLYC54Isu34czUDFL5hYeLw5Yb8hD0tQoI.EQig1hwBtW8dpL8rK', NULL, NULL),
(33, 'cdi', 'cdinorte', '2025-09-04 04:45:58', 'inactivo', NULL, 13, '2025-09-04 04:45:58', '2025-09-04 04:46:17', '$2b$13$IaE6mojCSAECPrB3eBtBGOSWi.pk6LajUYFfDe32bDq2ECzzP5Pv.', NULL, NULL),
(34, 'doctor', 'DrJesusAdran', '2025-10-26 17:45:25', 'activo', 20, 7, '2025-10-26 17:45:25', '2025-10-26 17:45:25', '$2b$13$3WU0HMbTe4pwg8wbz9QSf.lGnUBV5PQuZPS5xOAWYVakdFIGcCplS', NULL, NULL),
(35, 'doctor', 'EmiliRon', '2025-10-26 18:21:46', 'activo', 21, 7, '2025-10-26 18:21:46', '2025-10-31 04:24:55', '$2b$13$Vi8hyDN/sOtAKWEHD1IY1Ocd/e1PBRfcxoaqyRePz1f4Hf5edvSiK', NULL, NULL),
(36, 'cdi', 'antonioCDI', '2025-10-28 04:36:56', 'activo', NULL, 14, '2025-10-28 04:36:56', '2025-10-28 04:36:56', '$2b$13$vHfl/1v0.1N11eRb4QmPR.PP92piFlw8J0BXVV6aQQtqg6YnFUV1a', NULL, NULL),
(37, 'cdi', 'antoniocdidos', '2025-10-28 04:40:00', 'activo', NULL, 15, '2025-10-28 04:40:00', '2025-10-28 04:40:00', '$2b$13$r9G9TxDJNm1VGDF3mfIfT.2N290lBkLblfvC2mncs.MX3iX.XCJxy', NULL, NULL),
(38, 'doctor', 'leonel', '2025-10-28 06:29:27', 'inactivo', 22, 7, '2025-10-28 06:29:27', '2026-02-12 02:56:15', '$2b$13$hjGG4MnysexVuotwqAd8cu2S.O4j14XSg6qcnZISFGhTNDYcAJb62', NULL, NULL),
(39, 'cdi', 'cdidealberto', '2026-01-04 21:23:42', 'activo', NULL, 16, '2026-01-04 21:23:42', '2026-01-04 21:23:42', '$2b$13$PK/vh/12GU7GLI5aZzUOvOqOnm9hgKdQbo4n/HWSV.3CRdkRO8qnu', NULL, NULL);

COMMIT;
SET FOREIGN_KEY_CHECKS = 1;
