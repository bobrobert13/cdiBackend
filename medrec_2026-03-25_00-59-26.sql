-- ============================================
-- MEDREC Database Backup
-- Generated: 2026-03-25T00:59:26.369Z
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
  PRIMARY KEY (`id_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `cdis_numero_cdi` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_2` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_3` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_4` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_5` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_6` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_7` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_8` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_9` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_10` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_11` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_12` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_13` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_14` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_15` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_16` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_17` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_18` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_19` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_20` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_21` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_22` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_23` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_24` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_25` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_26` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_27` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_28` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_29` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_30` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_31` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_32` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_33` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_34` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_35` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_36` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_37` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_38` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_39` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_40` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_41` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_42` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_43` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_44` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_45` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_46` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_47` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_48` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_49` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_50` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_51` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_52` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_53` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_54` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_55` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_56` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_57` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_58` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_59` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_60` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_61` (`numero_cdi`) USING BTREE,
  UNIQUE KEY `numero_cdi_62` (`numero_cdi`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `cdis` (`id_cdi`, `numero_cdi`, `nombre`, `encargado`, `cuadrante`, `createdAt`, `updatedAt`, `estado`) VALUES
(7, '1039', 'Centro Diagnóstico Integral Puerto Cabello', 'Jhonatan Salazar', 'AB-23', '2025-06-23 09:27:25', '2025-09-04 16:46:45', 'activo'),
(8, '1032', 'Centro Diagnóstico Integral La Esperanza', 'Dra. María González', 'CD-92', '2025-06-24 19:19:01', '2025-06-24 19:19:01', 'activo'),
(9, '1088', 'Centro Diagnóstico Integral La Paz', 'Dra. María González', 'NT-22', '2025-06-24 19:30:35', '2025-07-14 17:22:39', 'activo'),
(10, '1021', 'Centro Diagnóstico Integral Paéz', 'Dra. María González', 'CD-21', '2025-06-24 19:34:31', '2025-07-14 17:24:53', 'activo'),
(13, '839', 'Guevara', 'Juan', 'norte', '2025-09-04 16:45:57', '2025-10-29 11:03:19', 'activo'),
(14, '10391', 'Antonio Peralta', 'Antonio', 'Sur', '2025-10-28 16:36:56', '2025-10-28 16:36:56', 'activo'),
(15, '1023', 'Antonio', 'Antonino', 'Antonio', '2025-10-28 16:39:59', '2025-10-28 16:39:59', 'activo'),
(16, '301', 'Vita Sana', 'Damián Soler', 'Oeste', '2025-10-29 11:00:27', '2025-10-29 11:10:33', 'activo'),
(17, '234', 'El Jardín Interior', 'Rocío Alamedas', 'norte', '2025-10-29 11:04:55', '2026-03-10 03:36:26', 'inactivo'),
(18, '134', 'Rosa Palmar', 'Rosa Palmar', 'Este', '2026-03-10 03:41:59', '2026-03-10 03:41:59', 'activo');

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
  PRIMARY KEY (`id_consulta`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_paciente_id` (`fk_paciente_id`) USING BTREE,
  KEY `fk_cdi_id` (`fk_cdi_id`) USING BTREE,
  CONSTRAINT `consultas_ibfk_1639` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `consultas_ibfk_1640` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `consultas_ibfk_1641` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `consultas` (`id_consulta`, `tipo_consulta`, `motivo_consulta`, `sintomas`, `notas_medicas`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`, `fk_cdi_id`, `fecha_consulta`, `estado_consulta`) VALUES
(25, 'General', 'Fiebre alta y tos fuerte', 'Sin detalles', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi', 5, 11, '2025-08-28 16:11:12', '2025-08-28 16:11:12', 7, '2025-08-27 20:00:00', 'Activo'),
(26, 'General', 'Lorem ipsum dolor sit amet, consectetu', 'Aenean vel erat nisl. Donec hendrerit finibus tristique', 'Aenean gravida posuere leo at consequat. Cras eleifend dictum felis ut maximus. Vivamus et purus vitae massa mattis finibus sit amet et ligula. Cras ut diam nunc. Nam dolor elit, ultrices sit amet orci sit amet, pharetra aliquet orci. Vivamus urna ex, condimentum lobortis congue ut', 5, 11, '2025-08-28 16:23:21', '2025-08-28 16:23:21', 7, '2025-09-17 20:00:00', 'Activo'),
(27, 'General', 'Gripe', 'here are many variatio', 'majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum gen', 5, 9, '2025-09-04 16:25:20', '2025-09-04 16:25:20', 7, '2025-09-04 20:00:00', 'Activo');

-- ----------------------------------------
-- Table: correos
-- ----------------------------------------
DROP TABLE IF EXISTS `correos`;
CREATE TABLE `correos` (
  `id_correo` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_correo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `correos` (`id_correo`, `correo`, `createdAt`, `updatedAt`) VALUES
(33, 'emiolio223@gmail.com', '2025-07-07 12:14:02', '2025-07-07 12:14:02'),
(39, 'carlossere@gmail.com', '2025-08-27 13:21:20', '2025-10-31 18:42:20'),
(40, 'ellimail@gmail.comm', '2025-08-28 16:08:24', '2025-08-28 16:08:24'),
(41, 'rodrica@gmail.com', '2025-08-28 16:30:23', '2025-08-28 16:30:43'),
(42, 'rosaa21@gmail.com', '2025-08-28 16:43:58', '2025-08-28 16:43:58'),
(43, 'ramonab@gmail.com', '2025-09-10 17:27:13', '2025-09-10 17:27:13'),
(44, 'fannys72@gmail.com', '2025-10-17 17:40:53', '2025-10-17 17:40:53'),
(45, 'danie82@gmail.com', '2025-10-17 17:50:22', '2025-10-17 17:50:22'),
(46, 'jesusadriaro@gmail.com', '2025-10-27 05:45:25', '2025-10-27 05:45:25'),
(47, 'emiliron@gmail.com', '2025-10-27 06:21:46', '2025-10-27 06:21:46'),
(48, 'leonelpa@gmail.com', '2025-10-28 18:29:27', '2025-10-28 18:29:27'),
(49, 'elena.morales.r@mailficticio.com', '2025-10-29 11:26:37', '2025-10-29 11:26:37'),
(50, 'dsoler@oasisvital.com', '2025-10-29 11:50:15', '2025-10-29 11:50:15'),
(51, 'l.montesdeoca@centrovitalis.com', '2025-10-29 12:12:24', '2025-10-29 12:12:24'),
(52, 'fabio.montesino@raiceswellness.com', '2025-10-29 12:37:15', '2025-10-29 12:37:15'),
(53, 'miriam31@gmail.com', '2026-03-06 12:29:26', '2026-03-06 12:29:26'),
(54, 'naty.uptjaa@gmail.com', '2026-03-06 21:30:24', '2026-03-06 21:30:24'),
(55, 'carlauptjaa@gmail.com', '2026-03-10 04:21:46', '2026-03-10 04:21:46'),
(56, 'crisbeth21@gmail.com', '2026-03-10 04:49:22', '2026-03-10 04:49:22');

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
  PRIMARY KEY (`id_diagnostico`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_paciente_id` (`fk_paciente_id`) USING BTREE,
  KEY `fk_cdi_id` (`fk_cdi_id`) USING BTREE,
  CONSTRAINT `diagnosticos_ibfk_1597` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diagnosticos_ibfk_1598` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diagnosticos_ibfk_1599` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `diagnosticos` (`id_diagnostico`, `fecha_diagnostico`, `condicion`, `descripcion`, `gravedad`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`, `fk_cdi_id`) VALUES
(6, NULL, 'paludismo', ' Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi', 'Moderada', 5, 11, '2025-08-28 16:13:25', '2025-10-27 08:56:26', 7),
(7, NULL, 'Gripesita', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada vestibulum velit, ac convallis magna efficitur eu. Proin sagittis orci ut massa molestie tempor. Nunc pretium accumsan odio. Vivamus pharetra interdum dapibus. Quisque magna ligula, tristique ut felis ut, fermentum elementu', 'Leve', 5, 9, '2025-09-04 16:33:29', '2025-09-04 16:33:29', 7),
(8, NULL, 'Gripesita', 'tis purus finibus. Nam luctus ultricies mollis. Donec malesuada elit tortor, ac rhoncus enim venenatis sed. Ut quis elementum sapien. In rutrum pharetra lorem vel pharetra. Proin lobortis nibh ut orci ornare vehicula. Vestibulum nec erat sed erat blandit fermentum.', 'Leve', 5, 11, '2025-09-04 16:36:39', '2025-09-04 16:36:39', 7),
(9, NULL, 'Regular', 'Presentacion de sintomas afiliados a la fiebre del pollo ', 'Moderada', 5, 16, '2025-10-29 12:15:19', '2025-10-29 12:15:19', 7),
(10, NULL, 'muy afectado ', 'mucho dolor en la parte superior derech ', 'Moderada', 5, 9, '2025-11-13 17:06:28', '2025-11-13 17:06:28', 7),
(11, NULL, 'alergia por polvo', 'el paciente llego moderadamente afectado por un indicio de alergia cronica', 'Moderada', 5, 18, '2026-03-06 21:31:28', '2026-03-06 21:31:28', 7),
(12, NULL, 'ligeramente alergico', 'el paciente llego con una erupcion en la piel', 'Moderada', 26, 19, '2026-03-10 04:50:38', '2026-03-10 04:50:38', 18),
(13, NULL, 'sueve', 'ligeramente alergico', 'Leve', 26, 19, '2026-03-10 04:51:14', '2026-03-10 04:51:14', 18);

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
  PRIMARY KEY (`id_direccion`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `direcciones` (`id_direccion`, `parroquia`, `codigo_postal`, `numero_casa`, `calle`, `punto_referencia`, `sector`, `createdAt`, `updatedAt`) VALUES
(21, 'El Tigre', 6050, 233, 'Lorem ipsum dolor sit ame', 'Lorem ipsum dolor sit ame', 'Lorem ipsum dolor sit ame', '2025-07-07 12:14:02', '2025-07-07 12:14:02'),
(26, 'El Tigre', 5642, 23, 'Integer a ipsum vitae urna varius egestas Integer laoreet', 'm vitae urna varius egestas Integer laoreet Integer a ipsum vitae urna varius egestas Integer laoreet m vitae urna varius eges', 'm vitae urna varius egestas Integer laoreet', '2025-07-29 17:43:18', '2025-07-29 17:43:18'),
(27, 'El Tigre', 5060, 22, 'Lorrem', 'lorem ipsum dolor sit ame', 'lorem ipsum dolor sit ame', '2025-08-27 13:18:55', '2025-08-27 13:18:58'),
(28, 'El Tigre', 6050, 54, 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', '2025-08-28 16:08:24', '2025-08-28 16:08:24'),
(29, 'Puerto La Cruz', 6009, 244, 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', '2025-08-28 16:30:23', '2025-08-28 16:30:23'),
(30, 'El Tigre', 6050, 6662, 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', '2025-08-28 16:43:58', '2025-08-28 16:43:58'),
(31, 'El Tigre', 6050, 21, 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', '2025-09-10 17:27:13', '2025-09-10 17:27:13'),
(32, 'San José de Guanipa', 8053, 98, 'Calle el triunfo', 'La cancha luego de la av republica', 'Unberto simonobis', '2025-10-17 17:40:53', '2025-10-17 17:40:53'),
(33, 'El Tigre', 8032, 92, 'Una ubicacion sin fin', 'prueba de informacion', 'prueba de informacion', '2025-10-17 17:50:22', '2025-10-17 17:50:22'),
(34, 'El Tigre', 6050, 23, 'Est in dolores consetetur et no et velit takimata sanctus', 'Est in dolores consetetur', 'Est in dolores', '2025-10-27 05:45:25', '2025-10-27 05:45:25'),
(35, 'El Tigre', 6050, 21, 'Est in dolores consetetur et no et velit takimata sanctus', 'Est in dolores consetetur et no et velit takimata sanctus', 'Est in dolores consetetur et no et velit takimata sanctus', '2025-10-27 06:21:46', '2025-10-27 06:21:46'),
(36, 'El Tigre', 6050, 2, 'Consequat blandit vel tempor volutpat invidunt est nonumy vel illum', 'Consequat blandit vel tempor volutpat invidunt est nonumy vel illum', 'Consequat blandit vel tempor volutpat invidunt est nonumy vel illum', '2025-10-28 18:29:27', '2025-10-28 18:29:27'),
(37, 'Puerto La Cruz', 4040, 36, '20 sur ', 'despues del paredon', 'los llopales', '2025-10-29 11:26:37', '2025-10-29 11:26:37'),
(38, 'Puerto La Cruz', 4040, 36, '39 sur', 'despues del paredon', 'los llopales', '2025-10-29 11:50:15', '2025-10-29 11:50:15'),
(39, 'Barcelona', 6050, 30, 'quince sur', 'despues de los chinos', 'los rosales', '2025-10-29 12:12:24', '2025-10-29 12:12:24'),
(40, 'San Fernando de Apure', 40890, 42, 'brisas del sur', 'despues de la caña', 'veracruz', '2025-10-29 12:37:15', '2025-10-29 12:37:15'),
(41, 'El Tigre', 6050, 2, 'calle 9', 'después de la pandemia ', 'Inavi', '2026-03-06 12:29:26', '2026-03-06 12:29:26'),
(42, 'El Tigre', 6050, 14, '24 sur', 'centro comercial morichal plaza', 'pueblo nuevo sur', '2026-03-06 21:30:24', '2026-03-06 21:30:24'),
(43, 'El Tigre', 6050, 0, '4ta carrera sur', '3 casa de daoca', 'pueblo nuevo sur', '2026-03-10 04:21:47', '2026-03-10 04:21:47'),
(44, 'El Tigre', 6050, 0, '4ta sur', '3 casa de daoca', 'pueblo nuevo sur ', '2026-03-10 04:49:22', '2026-03-10 04:49:22');

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
  PRIMARY KEY (`id_doctor`) USING BTREE,
  KEY `fk_persona_id` (`fk_persona_id`) USING BTREE,
  KEY `fk_cdi_id` (`fk_cdi_id`) USING BTREE,
  CONSTRAINT `doctores_ibfk_669` FOREIGN KEY (`fk_persona_id`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `doctores_ibfk_670` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `doctores` (`id_doctor`, `anos_experiencia`, `numero_carnet`, `area_de_trabajo`, `horario`, `fk_persona_id`, `createdAt`, `updatedAt`, `fk_cdi_id`) VALUES
(5, 5, 'DOC-001', 'Pediatría', 'Lunes a Viernes 8:00-16:00', 10, '2025-06-23 09:27:25', '2025-06-23 09:27:25', 7),
(18, 7, 'A-239', 'Laboratorio', 'Lunes a Viernes 10:00 am - 4:00 pm', 38, '2025-08-28 16:30:23', '2025-08-28 16:30:43', 7),
(19, 4, 'A-203', 'Emergencias', 'Sábados 9:00 am - 1:00 pm', 39, '2025-08-28 16:43:58', '2025-08-28 16:43:58', 7),
(20, 4, '00293', 'Hospitalizacion', 'Lunes a Viernes 9:00 am - 5:00 pm', 43, '2025-10-27 05:45:25', '2025-10-27 05:45:25', 7),
(21, 2, '02933', 'Enfermeria', 'Sábados 10:00 am - 2:00 pm', 44, '2025-10-27 06:21:46', '2025-10-27 06:21:46', 7),
(22, 5, '221', 'Hospitalizacion', 'Lunes a Viernes 10:00 am - 4:00 pm', 45, '2025-10-28 18:29:27', '2025-10-28 18:29:27', 7),
(23, 32, '4567', 'Enfermeria', 'Lunes a Viernes 8:00 am - 6:00 pm', 46, '2025-10-29 11:26:37', '2025-10-29 11:26:37', 16),
(24, 32, '456', 'Rayosx', 'Lunes a Viernes 8:00 am - 6:00 pm', 47, '2025-10-29 11:50:15', '2025-10-29 11:50:15', 7),
(25, 34, '678', 'Laboratorio', 'Lunes a Viernes 10:00 am - 4:00 pm', 49, '2025-10-29 12:37:15', '2025-10-29 12:37:15', 7),
(26, 22, '2688', 'Oftalmologia', 'Lunes a Viernes 8:00 am - 6:00 pm', 52, '2026-03-10 04:21:47', '2026-03-10 04:21:47', 18);

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
  PRIMARY KEY (`id_emergencia`) USING BTREE,
  KEY `fk_paciente_id` (`fk_paciente_id`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_cdi_id` (`fk_cdi_id`) USING BTREE,
  CONSTRAINT `emergencias_ibfk_1213` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `emergencias_ibfk_1214` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `emergencias_ibfk_1215` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `emergencias` (`id_emergencia`, `motivo_emergencia`, `diagnostico_provisional`, `estado_paciente`, `procesamiento_realizado`, `tiempo_atencion`, `notas_de_atencion`, `destino`, `fk_paciente_id`, `fk_doctor_id`, `fk_cdi_id`, `createdAt`, `updatedAt`, `estado_emergencia`, `fecha_ingreso`, `fecha_egreso`) VALUES
(2, ' Vestibulum sodales sem at pellentesque posuere', ' Vestibulum sodales sem at pellentesque posuere', ' Vestibulum sodales sem at pellentesque posuere', ' Vestibulum sodales sem at pellentesque posuere', 3, ' Vestibulum sodales sem at pellentesque posuere', ' Vestibulum sodales sem at pellentesque posuere', 12, 5, 7, '2025-09-11 16:40:40', '2025-09-11 16:40:40', 'Activo', '2025-09-10 20:00:00', '2025-09-25 20:00:00'),
(3, 'desangrado', 'perdida masiva', 'moderado', 'transfucion ', 5, 'el paciente esta con desangrado', 'terapia intensiva ', 19, 26, 18, '2026-03-10 04:59:38', '2026-03-10 04:59:38', 'Activo', '2026-03-10 04:57:07', NULL);

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
  PRIMARY KEY (`id_examenes`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_paciente_id` (`fk_paciente_id`) USING BTREE,
  CONSTRAINT `examenes_resultados_ibfk_1199` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `examenes_resultados_ibfk_1200` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `examenes_resultados` (`id_examenes`, `fk_doctor_id`, `fk_paciente_id`, `tipo_de_examen`, `descripcion`, `resultados`, `estado_examen`, `medico_solicitante`, `laboratorio_centro`, `valores_referencia`, `observaciones`, `createdAt`, `updatedAt`) VALUES
(7, 5, 11, 'Sangre', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', NULL, 'Pendiente', NULL, 'sit amet, consec', NULL, '', '2025-08-28 16:14:13', '2025-08-28 16:14:13'),
(8, 5, 11, 'Orina', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', NULL, 'Pendiente', NULL, 't amet, consectetur adipiscing elit', NULL, '', '2025-08-28 16:17:43', '2025-08-28 16:17:43'),
(9, 5, 16, 'Sangre', 'Realizar con urgencia y retornar resultados para asignar tratamiento ', NULL, 'Pendiente', NULL, 'Frente al Hospital ', NULL, '', '2025-10-29 12:17:48', '2025-10-29 12:17:48'),
(10, 5, 16, 'Sangre', 'hacer examen urgente ', NULL, 'Pendiente', NULL, 'centro sur ', NULL, '', '2026-02-23 16:34:17', '2026-02-23 16:34:17'),
(11, 26, 19, 'Sangre', 'tipiaje', NULL, 'Pendiente', NULL, 'Laboratorio ortiz', NULL, '', '2026-03-10 04:55:38', '2026-03-10 04:55:38');

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
  PRIMARY KEY (`id_historial`) USING BTREE,
  KEY `fk_emergencia_id` (`fk_emergencia_id`) USING BTREE,
  KEY `fk_consulta_id` (`fk_consulta_id`) USING BTREE,
  CONSTRAINT `historial_medico_ibfk_1` FOREIGN KEY (`fk_consulta_id`) REFERENCES `consultas` (`id_consulta`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

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
  PRIMARY KEY (`id_hospitalizacion`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_paciente_id` (`fk_paciente_id`) USING BTREE,
  KEY `fk_cdi_id` (`fk_cdi_id`) USING BTREE,
  CONSTRAINT `hospitalizacion_ibfk_1613` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `hospitalizacion_ibfk_1614` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON UPDATE CASCADE,
  CONSTRAINT `hospitalizacion_ibfk_1615` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `hospitalizacion` (`id_hospitalizacion`, `fecha_ingreso`, `fecha_egreso`, `motivo_de_hospitalizacion`, `unidad_hospitalaria`, `estado`, `notas_medicas`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`, `fk_cdi_id`) VALUES
(3, '2025-09-11 20:00:00', '2025-09-18 20:00:00', 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet velit ante accumsan arcu', 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet velit ante accumsan arcu', 'Finalizado', 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet velit ante accumsan arcu', 5, 12, '2025-09-11 15:40:19', '2025-09-11 15:49:23', 7),
(4, '2025-11-12 20:00:00', '2025-11-17 20:00:00', 'diarrea cronica ', 'principal', 'Finalizado', 'revisar fluidos continuamente ', 5, 9, '2025-11-13 17:09:05', '2025-11-13 17:10:27', 7);

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
  PRIMARY KEY (`id_imagenes_medicas`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_paciente_id` (`fk_paciente_id`) USING BTREE,
  CONSTRAINT `imagenes_medicas_ibfk_1197` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `imagenes_medicas_ibfk_1198` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

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
  PRIMARY KEY (`id_medicamento`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_paciente_id` (`fk_paciente_id`) USING BTREE,
  CONSTRAINT `medicamentos_ibfk_1191` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `medicamentos_ibfk_1192` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `medicamentos` (`id_medicamento`, `nombre`, `dosis`, `via_administracion`, `frecuencia`, `duracion`, `observaciones`, `principio_activo`, `laboratorio`, `fecha_inicio`, `fecha_fin`, `medico_prescriptor`, `estado_tratamiento`, `tipo_medicamento`, `contraindicaciones`, `efectos_secundarios`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`) VALUES
(5, 'Diclofenac', '1 tableta', 'Oral', 'Cada 8 horas', '7 días', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi. Duis gravida odio at orci ullamcorper interdum. Ut at est nisl. Aliquam condimentum nisl tortor, nec tincidunt neque facilisis id. Aliquam in venenatis purus. Sed tempus lorem in consequat placerat. Donec finibus justo lacinia massa egestas euismod.', 'diclofenaco sódico', NULL, '2025-08-27 20:00:00', '2025-09-03 20:00:00', NULL, 'Activo', 'Antibiotico', 'orem ipsum dolor sit amet, consectetur adipiscing elit. ', 'orem ipsum dolor sit amet, consectetur adipiscing elit. ', 5, 11, '2025-08-28 16:21:51', '2025-08-28 16:21:51'),
(6, 'tachipirin', '5ml', 'Oral', 'Cada 8 horas', '10 días', 'cumplir el tratamiento al pie de la letra ', 'Ácido (RS)-2-(4-isobutilfenil) propanoico.', NULL, '2025-10-28 20:00:00', '2025-11-07 20:00:00', NULL, 'Activo', 'Antibiotico', 'solo para uso domestico', 'ninguno', 5, 16, '2025-10-29 12:26:12', '2025-10-29 12:26:12');

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
  PRIMARY KEY (`id_paciente`) USING BTREE,
  KEY `fk_persona_id` (`fk_persona_id`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_cdi_id` (`fk_cdi_id`) USING BTREE,
  CONSTRAINT `pacientes_ibfk_1006` FOREIGN KEY (`fk_persona_id`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pacientes_ibfk_1007` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pacientes_ibfk_1008` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `pacientes` (`id_paciente`, `enfermedades_cronicas`, `peso`, `vacunas`, `discapacidad`, `antecedentes_familiares`, `tipo_de_sangre`, `alergias`, `fk_persona_id`, `createdAt`, `updatedAt`, `fk_doctor_id`, `fk_cdi_id`, `documento_identidad_representante`, `numero_orden_representante`) VALUES
(9, 'Hipertensión arterial y dislipidemia tratada con Amlodipino 5 mg cada 12 h', '78.50', 'Esquema completo COVID-19 (3 dosis de Pfizer/BioNTech), gripe estacional 2023, refuerzo DPT en 2020', 'Ninguna', 'Abuela materna y madre con diabetes tipo 2 diagnosticada después de los 45 años, padre fallecido por infarto agudo de miocardio a los 62 años', 'O (O⁺)', 'Hipersensibilidad confirmada a penicilina (erupción cutánea maculopapular y prurito)', 32, '2025-07-07 12:14:02', '2025-07-07 12:14:02', 5, 7, NULL, NULL),
(11, 'Duis gravida odio at orci ullamcorper interdum', '76.00', 'rubeola', 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', 'B+', 'Duis gravida odio at orci ullamcorper interdum', 37, '2025-08-28 16:08:24', '2025-08-28 16:08:24', 5, 7, NULL, NULL),
(12, 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', '78.00', 'hepatitis_B', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 'B+', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 40, '2025-09-10 17:27:13', '2025-09-10 17:27:13', 5, 7, 29019288, 299),
(13, 'asdsdaasdsad', '22.00', 'varicela', 'asdsadasdasdsadsda', 'asdsadasddassad', 'B+', 'asdasdsdaasdasdasddasdsaasd', 10, '2025-10-17 17:25:23', '2025-10-17 17:25:23', 5, 7, NULL, NULL),
(14, 'Proin ultricies vitae enim quis dignissim', '87.00', 'hepatitis_B', 'Proin ultricies vitae enim quis dignissim', 'Proin ultricies vitae enim quis dignissim', 'B+', 'Proin ultricies vitae enim quis dignissim', 41, '2025-10-17 17:40:53', '2025-10-17 17:40:53', 5, 7, NULL, NULL),
(15, 'prueba de informacion', '87.00', 'hepatitis_A', 'prueba de informacion', 'prueba de informacion', 'AB+', 'prueba de informacion', 42, '2025-10-17 17:50:22', '2025-10-17 17:50:22', 5, 7, NULL, NULL),
(16, 'Diabetes ', '90.00', 'Ninguna', 'visual', 'Cancer', 'AB+', 'Al polvo', 48, '2025-10-29 12:12:24', '2025-10-29 12:12:24', 5, 7, NULL, NULL),
(17, 'niguna ', '60.00', 'Ninguna', 'ninguna ', 'diabetes ', 'A+', 'ninguna ', 50, '2026-03-06 12:29:26', '2026-03-06 12:29:26', 5, 7, NULL, NULL),
(18, 'gripe', '80.00', 'hepatitis_A', 'ninguna', 'ninguno', 'O-', 'ninguno', 51, '2026-03-06 21:30:24', '2026-03-06 21:30:24', 5, 7, NULL, NULL),
(19, 'ninguno', '45.00', 'sarampion', 'ninguno', 'alergias', 'O+', 'Polvo', 53, '2026-03-10 04:49:22', '2026-03-10 04:49:22', 26, 18, 19939257, 2);

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
  PRIMARY KEY (`id_persona`) USING BTREE,
  KEY `fk_cdi_id` (`fk_cdi_id`) USING BTREE,
  KEY `fk_direccion_id` (`fk_direccion_id`) USING BTREE,
  KEY `fk_telefono_id` (`fk_telefono_id`) USING BTREE,
  KEY `fk_correo_id` (`fk_correo_id`) USING BTREE,
  CONSTRAINT `personas_ibfk_2377` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_2378` FOREIGN KEY (`fk_direccion_id`) REFERENCES `direcciones` (`id_direccion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_2379` FOREIGN KEY (`fk_telefono_id`) REFERENCES `telefonos` (`id_telefono`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_2380` FOREIGN KEY (`fk_correo_id`) REFERENCES `correos` (`id_correo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `personas` (`id_persona`, `nombre1`, `sexo`, `edad`, `estado_civil`, `ocupacion`, `cedula_identidad`, `fk_cdi_id`, `fk_direccion_id`, `fk_telefono_id`, `fk_correo_id`, `createdAt`, `updatedAt`, `nacionalidad`) VALUES
(10, 'Carlosss', 'Masculino', 32, 'Soltero', 'Quirofano', 87654321, 7, 27, 40, 39, '2025-06-23 09:27:25', '2025-10-31 18:42:20', 'Venezolano/a'),
(32, 'Edmundo G', 'Masculino', 50, 'Soltero', 'Lorem ipsum dolor sit ame', 2837477, 7, 21, 33, 33, '2025-07-07 12:14:02', '2025-07-07 12:14:02', 'Extranjero/a'),
(37, 'Emilia Lopez', 'Femenino', 19, 'Soltero', 'Duis gravida odio at orci ullamcorper interdum', 28392839, 7, 28, 41, 40, '2025-08-28 16:08:24', '2025-08-28 16:08:24', 'Venezolano/a'),
(38, 'Rodrigo Camacho', 'Masculino', 28, 'Soltero', 'Doctor Especialista', 18283293, 7, 29, 42, 41, '2025-08-28 16:30:23', '2025-08-28 16:30:43', 'Venezolano/a'),
(39, 'Rosa A', 'Femenino', 29, 'Soltero', 'Especialista', 2039844, 7, 30, 43, 42, '2025-08-28 16:43:58', '2025-08-28 16:43:58', 'Venezolano/a'),
(40, 'Ramon Marquez', 'Masculino', 15, 'Soltero', 'Lorem ipsum dolor sit amet consectetur adipiscing elit quam torquen', 83928839, 7, 31, 44, 43, '2025-09-10 17:27:13', '2025-09-10 17:27:13', 'Venezolano/a'),
(41, 'Fanny Martinez', 'Femenino', 48, 'Casado', 'Proin ultricies vitae enim quis dignissim', 14132830, 7, 32, 45, 44, '2025-10-17 17:40:53', '2025-10-17 17:40:53', 'Venezolano/a'),
(42, 'Daniel Herrera', 'Masculino', 70, 'Divorciado', 'Sin empleo', 31839283, 7, 33, 46, 45, '2025-10-17 17:50:22', '2025-10-17 17:50:22', 'Venezolano/a'),
(43, 'Jesus Adrian Romero', 'Masculino', 43, 'Casado', 'Doctor', 13728338, 7, 34, 47, 46, '2025-10-27 05:45:25', '2025-10-27 05:45:25', 'Venezolano/a'),
(44, 'Emili Rondon', 'Femenino', 28, 'Soltero', 'Doctor', 24928392, 7, 35, 48, 47, '2025-10-27 06:21:46', '2025-10-27 06:21:46', 'Venezolano/a'),
(45, 'Leonel Padilla', NULL, NULL, NULL, 'Doctor', 27839228, 7, 36, 49, 48, '2025-10-28 18:29:27', '2025-10-28 18:29:27', 'Venezolano/a'),
(46, 'Miriam Segura ', NULL, NULL, NULL, 'Doctora', 31782234, 16, 37, 50, 49, '2025-10-29 11:26:37', '2025-10-29 11:26:37', 'Venezolano/a'),
(47, 'Catalina Ríos', 'Femenino', 36, 'Soltero', 'Doctor', 25735827, 7, 38, 52, 50, '2025-10-29 11:50:15', '2025-10-29 11:50:15', 'Extranjero/a'),
(48, 'Lorenzo Montes de Oca', 'Masculino', 60, 'Soltero', 'Albañil', 8988376, 7, 39, 53, 51, '2025-10-29 12:12:24', '2025-10-29 12:12:24', 'Venezolano/a'),
(49, 'Lionel Achard ', NULL, NULL, NULL, 'Doctor', 8738456, 7, 40, 54, 52, '2025-10-29 12:37:15', '2025-10-29 12:37:15', 'Venezolano/a'),
(50, 'Miriam Valentina Brito Salazar', 'Femenino', 20, 'Soltero', 'Diseñadora grafica ', 31529498, 7, 41, 55, 53, '2026-03-06 12:29:26', '2026-03-06 12:29:26', 'Venezolano/a'),
(51, 'nathalie rodriguez', 'Femenino', 43, 'Soltero', 'Docente', 15416593, 7, 42, 56, 54, '2026-03-06 21:30:24', '2026-03-06 21:30:24', 'Venezolano/a'),
(52, 'Carla Piñango', 'Femenino', 35, 'Soltero', 'Doctor', 19939257, 18, 43, 57, 55, '2026-03-10 04:21:47', '2026-03-10 04:21:47', 'Venezolano/a'),
(53, 'crisbeth quami', 'Femenino', 18, 'Soltero', 'estudiante', 26189642, 18, 44, 58, 56, '2026-03-10 04:49:22', '2026-03-10 04:49:22', 'Venezolano/a');

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
  PRIMARY KEY (`id_pin`) USING BTREE,
  KEY `fk_usuario_id` (`fk_usuario_id`) USING BTREE,
  CONSTRAINT `pins_recuperacion_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `pins_recuperacion` (`id_pin`, `pin`, `fk_usuario_id`, `createdAt`, `updatedAt`) VALUES
(1, '$2b$13$EbfmhqRm0vEXPxPyTh6kqe7.OhKF8FKj/XvdDOxQXVu17CwvBtG92', 13, '2026-03-10 04:24:36', '2026-03-10 04:24:36');

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
  PRIMARY KEY (`id_pregunta`) USING BTREE,
  KEY `fk_usuario_id` (`fk_usuario_id`) USING BTREE,
  CONSTRAINT `preguntas_seguridad_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `preguntas_seguridad` (`id_pregunta`, `pregunta`, `respuesta`, `fk_usuario_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Color favorito', '$2b$13$9ncFGIZtgSFDjQI8/AeWn./1T4pIWshvbjf8AIORX4Azjx1ZMlX4W', 13, '2026-03-10 03:27:41', '2026-03-10 03:27:41');

-- ----------------------------------------
-- Table: roles
-- ----------------------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_role`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------------------
-- Table: seguridad
-- ----------------------------------------
DROP TABLE IF EXISTS `seguridad`;
CREATE TABLE `seguridad` (
  `id_seguridad` int NOT NULL AUTO_INCREMENT,
  `pregunta1` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `respuesta1` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pregunta2` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `respuesta2` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pregunta3` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `respuesta3` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_seguridad`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

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
  PRIMARY KEY (`id_telefono`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `telefonos` (`id_telefono`, `codigo`, `numero`, `createdAt`, `updatedAt`) VALUES
(33, 414, 34345343, '2025-07-07 12:14:02', '2025-07-07 12:14:02'),
(40, 412, 2918273, '2025-08-27 13:20:55', '2025-10-31 18:42:20'),
(41, 414, 8442093, '2025-08-28 16:08:24', '2025-08-28 16:08:24'),
(42, 414, 29382, '2025-08-28 16:30:23', '2025-08-28 16:30:43'),
(43, 414, 5938838, '2025-08-28 16:43:58', '2025-08-28 16:43:58'),
(44, 414, 42212233, '2025-09-10 17:27:13', '2025-09-10 17:27:13'),
(45, 414, 48392383, '2025-10-17 17:40:53', '2025-10-17 17:40:53'),
(46, 414, 9283928, '2025-10-17 17:50:22', '2025-10-17 17:50:22'),
(47, 414, 82733382, '2025-10-27 05:45:25', '2025-10-27 05:45:25'),
(48, 414, 21344322, '2025-10-27 06:21:46', '2025-10-27 06:21:46'),
(49, 414, 82738832, '2025-10-28 18:29:27', '2025-10-28 18:29:27'),
(50, 414, 4347821, '2025-10-29 11:26:37', '2025-10-29 11:26:37'),
(51, 414, 4347822, '2025-10-29 11:49:42', '2025-10-29 11:49:42'),
(52, 424, 43478229, '2025-10-29 11:50:15', '2025-10-29 11:50:15'),
(53, 412, 3447829, '2025-10-29 12:12:24', '2025-10-29 12:12:24'),
(54, 416, 2546783, '2025-10-29 12:37:15', '2025-10-29 12:37:15'),
(55, 424, 8656462, '2026-03-06 12:29:26', '2026-03-06 12:29:26'),
(56, 424, 8326125, '2026-03-06 21:30:24', '2026-03-06 21:30:24'),
(57, 414, 7767266, '2026-03-10 04:21:46', '2026-03-10 04:21:46'),
(58, 414, 7767267, '2026-03-10 04:49:22', '2026-03-10 04:49:22');

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
  PRIMARY KEY (`id_tratamiento`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_paciente_id` (`fk_paciente_id`) USING BTREE,
  CONSTRAINT `tratamientos_ibfk_1209` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tratamientos_ibfk_1210` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `tratamientos` (`id_tratamiento`, `tipo_de_tratamiento`, `fecha_inicio`, `fecha_culminacion`, `estado`, `detalles`, `fk_doctor_id`, `fk_paciente_id`, `createdAt`, `updatedAt`) VALUES
(4, 'Quimioterapia', '2025-09-02 20:00:00', '2025-09-23 20:00:00', 'Finalizado', 'quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi. Duis gravida odio at orci ullamcorper interdum. Ut at est nisl', 5, 11, '2025-08-28 16:19:34', '2025-09-18 15:58:11'),
(5, 'Farmacologico', '2025-09-17 20:00:00', '2025-09-24 20:00:00', 'Finalizado', 'Orci varius natoque penatibus et magnis dis parturient montes', 5, 9, '2025-09-18 15:57:53', '2025-09-18 15:58:04'),
(6, 'Farmacologico', '2025-10-28 20:00:00', '2025-11-12 20:00:00', 'Activo', 'Realizar con precacuion y solo bajo cindicaciones medicas ', 5, 16, '2025-10-29 12:20:11', '2025-10-29 12:20:11');

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
  PRIMARY KEY (`id_usuario`) USING BTREE,
  KEY `fk_doctor_id` (`fk_doctor_id`) USING BTREE,
  KEY `fk_cdi_id` (`fk_cdi_id`) USING BTREE,
  KEY `id_pregunta` (`id_pregunta`) USING BTREE,
  KEY `id_pin` (`id_pin`) USING BTREE,
  CONSTRAINT `usuarios_ibfk_2326` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON UPDATE CASCADE,
  CONSTRAINT `usuarios_ibfk_2327` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON UPDATE CASCADE,
  CONSTRAINT `usuarios_ibfk_2328` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas_seguridad` (`id_pregunta`),
  CONSTRAINT `usuarios_ibfk_2329` FOREIGN KEY (`id_pin`) REFERENCES `pins_recuperacion` (`id_pin`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

INSERT INTO `usuarios` (`id_usuario`, `rol`, `nombre_usuario`, `fecha_creacion`, `estado`, `fk_doctor_id`, `fk_cdi_id`, `createdAt`, `updatedAt`, `contrasena`, `id_pregunta`, `id_pin`) VALUES
(10, 'doctor', 'DrCarlos', '2025-06-23 09:27:25', 'activo', 5, 7, '2025-06-23 09:27:25', '2025-10-29 11:35:50', '$2a$13$gSsSxbgFZqRX/Uh9NDrGCOi/N23I7YFk36Tv088g4ZiWQ4lqSftfy', NULL, NULL),
(12, 'cdi', 'cdi-admin', '2025-06-23 09:27:25', 'activo', NULL, 7, '2025-06-23 09:27:25', '2025-09-04 16:46:45', '$2a$13$IxlAXAUHGVs/C5DhSfVy4eLCn63EpSsXIKqV2rEAy9otlG7KBT9h2', NULL, NULL),
(13, 'admin', 'superadmin', '2025-06-23 09:27:25', 'activo', NULL, NULL, '2025-06-23 09:27:25', '2026-03-10 04:25:31', '$2a$13$A7tzZU0N6XyzaV25gyDvMuF8IPa1uotcSxVjPajvGkyHXbw1Qr8o.', NULL, NULL),
(31, 'doctor', 'drcamacho', '2025-08-28 16:30:24', 'inactivo', 18, 7, '2025-08-28 16:30:24', '2025-10-31 11:06:26', '$2b$13$NvRxvuVymL7AIKF..jXUt.PTz9XPcvrMGzwmWOuWykEWJ/5X2Iz/m', NULL, NULL),
(32, 'doctor', 'rosaA', '2025-08-28 16:43:59', 'activo', 19, 7, '2025-08-28 16:43:59', '2025-09-04 16:46:45', '$2b$13$YrLYC54Isu34czUDFL5hYeLw5Yb8hD0tQoI.EQig1hwBtW8dpL8rK', NULL, NULL),
(33, 'cdi', 'cdinorte', '2025-09-04 16:45:58', 'activo', NULL, 13, '2025-09-04 16:45:58', '2025-10-29 11:03:19', '$2b$13$IaE6mojCSAECPrB3eBtBGOSWi.pk6LajUYFfDe32bDq2ECzzP5Pv.', NULL, NULL),
(34, 'doctor', 'DrJesusAdran', '2025-10-27 05:45:25', 'inactivo', 20, 7, '2025-10-27 05:45:25', '2025-10-31 11:06:27', '$2b$13$3WU0HMbTe4pwg8wbz9QSf.lGnUBV5PQuZPS5xOAWYVakdFIGcCplS', NULL, NULL),
(35, 'doctor', 'EmiliRon', '2025-10-27 06:21:46', 'activo', 21, 7, '2025-10-27 06:21:46', '2025-10-29 11:35:50', '$2b$13$Vi8hyDN/sOtAKWEHD1IY1Ocd/e1PBRfcxoaqyRePz1f4Hf5edvSiK', NULL, NULL),
(36, 'cdi', 'antonioCDI', '2025-10-28 16:36:56', 'activo', NULL, 14, '2025-10-28 16:36:56', '2025-10-28 16:36:56', '$2b$13$vHfl/1v0.1N11eRb4QmPR.PP92piFlw8J0BXVV6aQQtqg6YnFUV1a', NULL, NULL),
(37, 'cdi', 'antoniocdidos', '2025-10-28 16:40:00', 'activo', NULL, 15, '2025-10-28 16:40:00', '2025-10-28 16:40:00', '$2b$13$r9G9TxDJNm1VGDF3mfIfT.2N290lBkLblfvC2mncs.MX3iX.XCJxy', NULL, NULL),
(38, 'doctor', 'leonel', '2025-10-28 18:29:27', 'activo', 22, 7, '2025-10-28 18:29:27', '2025-10-28 18:29:27', '$2b$13$hjGG4MnysexVuotwqAd8cu2S.O4j14XSg6qcnZISFGhTNDYcAJb62', NULL, NULL),
(39, 'cdi', 'CDIvita', '2025-10-29 11:00:28', 'activo', NULL, 16, '2025-10-29 11:00:28', '2025-10-29 11:10:33', '$2b$13$smnDxre4K0VlA9DPnMvs9eIJb1988UBMb3p4lg8wqpad5kXWpfezK', NULL, NULL),
(40, 'cdi', 'CDIjardin', '2025-10-29 11:04:56', 'inactivo', NULL, 17, '2025-10-29 11:04:56', '2026-03-10 03:36:26', '$2b$13$LfWwyXWwgCGctO66ERpjUOqlpL4Jy1Mj6CXkTwlqmWYM7kaQsDZbu', NULL, NULL),
(41, 'doctor', 'Drmiriam', '2025-10-29 11:26:37', 'activo', 23, 16, '2025-10-29 11:26:37', '2025-10-29 11:26:37', '$2b$13$q.LWKAi15i0x6POa9ddU8edIXiI3K6nizAdbLoxrJUcicewhkLaOK', NULL, NULL),
(42, 'doctor', 'DRcatalina', '2025-10-29 11:50:15', 'activo', 24, 7, '2025-10-29 11:50:15', '2025-10-29 11:54:18', '$2b$13$UGB.hLxU32V0e/Ny4X2hBeQ2Ipgi3KtAsIwcsVDN2MzHdJmp9FT0y', NULL, NULL),
(43, 'doctor', 'Drleonel', '2025-10-29 12:37:16', 'activo', 25, 7, '2025-10-29 12:37:16', '2025-10-31 10:58:48', '$2b$13$Nk1Yv4Lxd4uKkC3MutqdGuA7Lejz/gdRCyjB2rIgS4V8Je/TABsZW', NULL, NULL),
(44, 'cdi', 'Rosaps', '2026-03-10 03:42:00', 'activo', NULL, 18, '2026-03-10 03:42:00', '2026-03-10 03:42:00', '$2b$13$3XK2IVNgCCmAoaDqm5pF/eIsWNhLYmV59SLu01sERFRZIFKwsFuNi', NULL, NULL),
(45, 'doctor', 'Carlap', '2026-03-10 04:21:48', 'activo', 26, 18, '2026-03-10 04:21:48', '2026-03-10 04:21:48', '$2b$13$UpKrnkVpGjZqm/4cv3MJJ.UZdFTuV1rAx/0uqKvH27FB0zS/mflEO', NULL, NULL);

COMMIT;
SET FOREIGN_KEY_CHECKS = 1;
