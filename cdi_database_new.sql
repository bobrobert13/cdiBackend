/*
 Navicat Premium Dump SQL

 Source Server         : MYSQL
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3306
 Source Schema         : cdi_database

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 27/08/2025 20:47:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cdis
-- ----------------------------
DROP TABLE IF EXISTS `cdis`;
CREATE TABLE `cdis`  (
  `id_cdi` int NOT NULL AUTO_INCREMENT,
  `numero_cdi` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `encargado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cuadrante` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `estado` enum('activo','inactivo') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'activo',
  PRIMARY KEY (`id_cdi`) USING BTREE,
  UNIQUE INDEX `numero_cdi`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `cdis_numero_cdi`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_2`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_3`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_4`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_5`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_6`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_7`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_8`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_9`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_10`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_11`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_12`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_13`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_14`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_15`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_16`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_17`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_18`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_19`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_20`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_21`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_22`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_23`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_24`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_25`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_26`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_27`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_28`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_29`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_30`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_31`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_32`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_33`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_34`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_35`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_36`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_37`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_38`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_39`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_40`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_41`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_42`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_43`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_44`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_45`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_46`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_47`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_48`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_49`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_50`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_51`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_52`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_53`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_54`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_55`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_56`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_57`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_58`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_59`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_60`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_61`(`numero_cdi` ASC) USING BTREE,
  UNIQUE INDEX `numero_cdi_62`(`numero_cdi` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cdis
-- ----------------------------
INSERT INTO `cdis` VALUES (7, '1039', 'Centro Diagnóstico Integral Puerto Cabello', 'Jhonatan Salazar', 'AB-23', '2025-06-22 17:27:25', '2025-08-28 00:36:02', 'activo');
INSERT INTO `cdis` VALUES (8, '1032', 'Centro Diagnóstico Integral La Esperanza', 'Dra. María González', 'CD-92', '2025-06-24 03:19:01', '2025-06-24 03:19:01', 'activo');
INSERT INTO `cdis` VALUES (9, '1088', 'Centro Diagnóstico Integral La Paz', 'Dra. María González', 'NT-22', '2025-06-24 03:30:35', '2025-07-14 01:22:39', 'activo');
INSERT INTO `cdis` VALUES (10, '1021', 'Centro Diagnóstico Integral Paéz', 'Dra. María González', 'CD-21', '2025-06-24 03:34:31', '2025-07-14 01:24:53', 'activo');

-- ----------------------------
-- Table structure for consultas
-- ----------------------------
DROP TABLE IF EXISTS `consultas`;
CREATE TABLE `consultas`  (
  `id_consulta` int NOT NULL AUTO_INCREMENT,
  `tipo_consulta` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `motivo_consulta` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sintomas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `notas_medicas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_cdi_id` int NOT NULL,
  `fecha_consulta` datetime NULL DEFAULT NULL,
  `estado_consulta` enum('Activo','Suspendido','Completado') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Activo',
  PRIMARY KEY (`id_consulta`) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_paciente_id`(`fk_paciente_id` ASC) USING BTREE,
  INDEX `fk_cdi_id`(`fk_cdi_id` ASC) USING BTREE,
  CONSTRAINT `consultas_ibfk_1180` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `consultas_ibfk_1181` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `consultas_ibfk_1182` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of consultas
-- ----------------------------
INSERT INTO `consultas` VALUES (25, 'General', 'Fiebre alta y tos fuerte', 'Sin detalles', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi', 5, 11, '2025-08-28 00:11:12', '2025-08-28 00:11:12', 7, '2025-08-27 04:00:00', 'Activo');
INSERT INTO `consultas` VALUES (26, 'General', 'Lorem ipsum dolor sit amet, consectetu', 'Aenean vel erat nisl. Donec hendrerit finibus tristique', 'Aenean gravida posuere leo at consequat. Cras eleifend dictum felis ut maximus. Vivamus et purus vitae massa mattis finibus sit amet et ligula. Cras ut diam nunc. Nam dolor elit, ultrices sit amet orci sit amet, pharetra aliquet orci. Vivamus urna ex, condimentum lobortis congue ut', 5, 11, '2025-08-28 00:23:21', '2025-08-28 00:23:21', 7, '2025-09-17 04:00:00', 'Activo');

-- ----------------------------
-- Table structure for correos
-- ----------------------------
DROP TABLE IF EXISTS `correos`;
CREATE TABLE `correos`  (
  `id_correo` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_correo`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of correos
-- ----------------------------
INSERT INTO `correos` VALUES (33, 'emiolio223@gmail.com', '2025-07-06 20:14:02', '2025-07-06 20:14:02');
INSERT INTO `correos` VALUES (39, 'carlossere@gmail.com', '2025-08-26 21:21:20', '2025-08-28 00:26:52');
INSERT INTO `correos` VALUES (40, 'ellimail@gmail.comm', '2025-08-28 00:08:24', '2025-08-28 00:08:24');
INSERT INTO `correos` VALUES (41, 'rodrica@gmail.com', '2025-08-28 00:30:23', '2025-08-28 00:30:43');
INSERT INTO `correos` VALUES (42, 'rosaa21@gmail.com', '2025-08-28 00:43:58', '2025-08-28 00:43:58');

-- ----------------------------
-- Table structure for diagnosticos
-- ----------------------------
DROP TABLE IF EXISTS `diagnosticos`;
CREATE TABLE `diagnosticos`  (
  `id_diagnostico` int NOT NULL AUTO_INCREMENT,
  `fecha_diagnostico` datetime NULL DEFAULT NULL,
  `condicion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `gravedad` enum('Leve','Moderada','Grave','Crítica') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Leve',
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_cdi_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_diagnostico`) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_paciente_id`(`fk_paciente_id` ASC) USING BTREE,
  INDEX `fk_cdi_id`(`fk_cdi_id` ASC) USING BTREE,
  CONSTRAINT `diagnosticos_ibfk_1144` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diagnosticos_ibfk_1145` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diagnosticos_ibfk_1146` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of diagnosticos
-- ----------------------------
INSERT INTO `diagnosticos` VALUES (6, NULL, 'paludismo', ' Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi', 'Moderada', 5, 11, '2025-08-28 00:13:25', '2025-08-28 00:13:25', 7);

-- ----------------------------
-- Table structure for direcciones
-- ----------------------------
DROP TABLE IF EXISTS `direcciones`;
CREATE TABLE `direcciones`  (
  `id_direccion` int NOT NULL AUTO_INCREMENT,
  `parroquia` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `codigo_postal` int NULL DEFAULT NULL,
  `numero_casa` int NULL DEFAULT NULL,
  `calle` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `punto_referencia` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `sector` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_direccion`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of direcciones
-- ----------------------------
INSERT INTO `direcciones` VALUES (21, 'El Tigre', 6050, 233, 'Lorem ipsum dolor sit ame', 'Lorem ipsum dolor sit ame', 'Lorem ipsum dolor sit ame', '2025-07-06 20:14:02', '2025-07-06 20:14:02');
INSERT INTO `direcciones` VALUES (26, 'El Tigre', 5642, 23, 'Integer a ipsum vitae urna varius egestas Integer laoreet', 'm vitae urna varius egestas Integer laoreet Integer a ipsum vitae urna varius egestas Integer laoreet m vitae urna varius eges', 'm vitae urna varius egestas Integer laoreet', '2025-07-29 01:43:18', '2025-07-29 01:43:18');
INSERT INTO `direcciones` VALUES (27, 'El Tigre', 5060, 22, 'Lorrem', 'lorem ipsum dolor sit ame', 'lorem ipsum dolor sit ame', '2025-08-26 21:18:55', '2025-08-26 21:18:58');
INSERT INTO `direcciones` VALUES (28, 'El Tigre', 6050, 54, 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', '2025-08-28 00:08:24', '2025-08-28 00:08:24');
INSERT INTO `direcciones` VALUES (29, 'Puerto La Cruz', 6009, 244, 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', '2025-08-28 00:30:23', '2025-08-28 00:30:23');
INSERT INTO `direcciones` VALUES (30, 'El Tigre', 6050, 6662, 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', 'Donec hendrerit finibus tristique', '2025-08-28 00:43:58', '2025-08-28 00:43:58');

-- ----------------------------
-- Table structure for doctores
-- ----------------------------
DROP TABLE IF EXISTS `doctores`;
CREATE TABLE `doctores`  (
  `id_doctor` int NOT NULL AUTO_INCREMENT,
  `anos_experiencia` int NOT NULL DEFAULT 0,
  `numero_carnet` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `area_de_trabajo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `horario` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `fk_persona_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_cdi_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_doctor`) USING BTREE,
  INDEX `fk_persona_id`(`fk_persona_id` ASC) USING BTREE,
  INDEX `fk_cdi_id`(`fk_cdi_id` ASC) USING BTREE,
  CONSTRAINT `doctores_ibfk_361` FOREIGN KEY (`fk_persona_id`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `doctores_ibfk_362` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctores
-- ----------------------------
INSERT INTO `doctores` VALUES (5, 5, 'DOC-001', 'Pediatría', 'Lunes a Viernes 8:00-16:00', 10, '2025-06-22 17:27:25', '2025-06-22 17:27:25', 7);
INSERT INTO `doctores` VALUES (18, 7, 'A-239', 'Laboratorio', 'Lunes a Viernes 10:00 am - 4:00 pm', 38, '2025-08-28 00:30:23', '2025-08-28 00:30:43', 7);
INSERT INTO `doctores` VALUES (19, 4, 'A-203', 'Emergencias', 'Sábados 9:00 am - 1:00 pm', 39, '2025-08-28 00:43:58', '2025-08-28 00:43:58', 7);

-- ----------------------------
-- Table structure for emergencias
-- ----------------------------
DROP TABLE IF EXISTS `emergencias`;
CREATE TABLE `emergencias`  (
  `id_emergencia` int NOT NULL AUTO_INCREMENT,
  `motivo_emergencia` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `diagnostico_provisional` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `estado_paciente` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `procesamiento_realizado` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `tiempo_atencion` int NULL DEFAULT NULL COMMENT 'Tiempo en minutos',
  `notas_de_atencion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `destino` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Destino del paciente después de la emergencia',
  `fk_paciente_id` int NOT NULL,
  `fk_doctor_id` int NOT NULL,
  `fk_cdi_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `estado_emergencia` enum('Activo','Finalizado') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Activo',
  PRIMARY KEY (`id_emergencia`) USING BTREE,
  INDEX `fk_paciente_id`(`fk_paciente_id` ASC) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_cdi_id`(`fk_cdi_id` ASC) USING BTREE,
  CONSTRAINT `emergencias_ibfk_754` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `emergencias_ibfk_755` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `emergencias_ibfk_756` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of emergencias
-- ----------------------------

-- ----------------------------
-- Table structure for examenes_resultados
-- ----------------------------
DROP TABLE IF EXISTS `examenes_resultados`;
CREATE TABLE `examenes_resultados`  (
  `id_examenes` int NOT NULL AUTO_INCREMENT,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `tipo_de_examen` enum('Sangre','Orina','Radiografía','Tomografía','Resonancia Magnética','Ecografía','Electrocardiograma','Endoscopia','Biopsia','Cultivo','Análisis Genético','Prueba de Esfuerzo','Mamografía','Densitometría','Otros') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `resultados` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `estado_examen` enum('Pendiente','Completado','Cancelado') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Pendiente',
  `medico_solicitante` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `laboratorio_centro` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `valores_referencia` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT 'Valores normales de referencia para el examen',
  `observaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_examenes`) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_paciente_id`(`fk_paciente_id` ASC) USING BTREE,
  CONSTRAINT `examenes_resultados_ibfk_897` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `examenes_resultados_ibfk_898` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of examenes_resultados
-- ----------------------------
INSERT INTO `examenes_resultados` VALUES (7, 5, 11, 'Sangre', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', NULL, 'Pendiente', NULL, 'sit amet, consec', NULL, '', '2025-08-28 00:14:13', '2025-08-28 00:14:13');
INSERT INTO `examenes_resultados` VALUES (8, 5, 11, 'Orina', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', NULL, 'Pendiente', NULL, 't amet, consectetur adipiscing elit', NULL, '', '2025-08-28 00:17:43', '2025-08-28 00:17:43');

-- ----------------------------
-- Table structure for historial_medico
-- ----------------------------
DROP TABLE IF EXISTS `historial_medico`;
CREATE TABLE `historial_medico`  (
  `id_historial` int NOT NULL AUTO_INCREMENT,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `estado_anterior` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `estado_posterior` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `usuario_responsable` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `notas_adicionales` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `categoria_evento` enum('Consulta','Emergencia','Cirugía','Tratamiento','Diagnóstico','Seguimiento','Hospitalización','Alta médica') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fecha_evento` datetime NOT NULL,
  `fk_consulta_id` int NULL DEFAULT NULL,
  `fk_emergencia_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_historial`) USING BTREE,
  INDEX `fk_emergencia_id`(`fk_emergencia_id` ASC) USING BTREE,
  INDEX `fk_consulta_id`(`fk_consulta_id` ASC) USING BTREE,
  CONSTRAINT `historial_medico_ibfk_1` FOREIGN KEY (`fk_consulta_id`) REFERENCES `consultas` (`id_consulta`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of historial_medico
-- ----------------------------

-- ----------------------------
-- Table structure for hospitalizacion
-- ----------------------------
DROP TABLE IF EXISTS `hospitalizacion`;
CREATE TABLE `hospitalizacion`  (
  `id_hospitalizacion` int NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` datetime NOT NULL,
  `fecha_egreso` datetime NULL DEFAULT NULL,
  `motivo_de_hospitalizacion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `unidad_hospitalaria` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `estado` enum('Activo','Finalizado') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Activo',
  `notas_medicas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_doctor_id` int NULL DEFAULT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_cdi_id` int NOT NULL,
  PRIMARY KEY (`id_hospitalizacion`) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_paciente_id`(`fk_paciente_id` ASC) USING BTREE,
  INDEX `fk_cdi_id`(`fk_cdi_id` ASC) USING BTREE,
  CONSTRAINT `hospitalizacion_ibfk_1154` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `hospitalizacion_ibfk_1155` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `hospitalizacion_ibfk_1156` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hospitalizacion
-- ----------------------------

-- ----------------------------
-- Table structure for imagenes_medicas
-- ----------------------------
DROP TABLE IF EXISTS `imagenes_medicas`;
CREATE TABLE `imagenes_medicas`  (
  `id_imagenes_medicas` int NOT NULL AUTO_INCREMENT,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `tipo_imagen` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fecha_captura` datetime NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `formato` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `resolucion` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tamaño` decimal(10, 2) NULL DEFAULT NULL,
  `equipo_utilizado` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `estado` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Pendiente',
  `region_anatomica` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `interpretacion_medica` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_imagenes_medicas`) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_paciente_id`(`fk_paciente_id` ASC) USING BTREE,
  CONSTRAINT `imagenes_medicas_ibfk_895` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `imagenes_medicas_ibfk_896` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of imagenes_medicas
-- ----------------------------

-- ----------------------------
-- Table structure for medicamentos
-- ----------------------------
DROP TABLE IF EXISTS `medicamentos`;
CREATE TABLE `medicamentos`  (
  `id_medicamento` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dosis` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Ejemplo: 500mg, 10ml, 1 tableta',
  `via_administracion` enum('Oral','Intravenosa','Intramuscular','Subcutánea','Tópica','Oftálmica','Ótica','Nasal','Rectal','Vaginal','Inhalatoria','Sublingual','Transdérmica') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `frecuencia` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Ejemplo: Cada 8 horas, 2 veces al día, Una vez por semana',
  `duracion` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Ejemplo: 7 días, 2 semanas, Indefinido',
  `observaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `principio_activo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `laboratorio` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `fecha_inicio` datetime NULL DEFAULT NULL,
  `fecha_fin` datetime NULL DEFAULT NULL,
  `medico_prescriptor` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `estado_tratamiento` enum('Activo','Suspendido','Completado') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Activo',
  `tipo_medicamento` enum('Antibiotico','Analgesico','Antiinflamatorio','Antihipertensivo','Antidiabetico','Anticoagulante','Vitamina','Suplemento','Hormonal','Psiquiatrico','Cardiovascular','Respiratorio','Digestivo','Otros') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `contraindicaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `efectos_secundarios` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_medicamento`) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_paciente_id`(`fk_paciente_id` ASC) USING BTREE,
  CONSTRAINT `medicamentos_ibfk_891` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `medicamentos_ibfk_892` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of medicamentos
-- ----------------------------
INSERT INTO `medicamentos` VALUES (5, 'Diclofenac', '1 tableta', 'Oral', 'Cada 8 horas', '7 días', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper, quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi. Duis gravida odio at orci ullamcorper interdum. Ut at est nisl. Aliquam condimentum nisl tortor, nec tincidunt neque facilisis id. Aliquam in venenatis purus. Sed tempus lorem in consequat placerat. Donec finibus justo lacinia massa egestas euismod.', 'diclofenaco sódico', NULL, '2025-08-27 04:00:00', '2025-09-03 04:00:00', NULL, 'Activo', 'Antibiotico', 'orem ipsum dolor sit amet, consectetur adipiscing elit. ', 'orem ipsum dolor sit amet, consectetur adipiscing elit. ', 5, 11, '2025-08-28 00:21:51', '2025-08-28 00:21:51');

-- ----------------------------
-- Table structure for pacientes
-- ----------------------------
DROP TABLE IF EXISTS `pacientes`;
CREATE TABLE `pacientes`  (
  `id_paciente` int NOT NULL AUTO_INCREMENT,
  `enfermedades_cronicas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `peso` decimal(5, 2) NULL DEFAULT NULL,
  `vacunas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `discapacidad` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `antecedentes_familiares` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `tipo_de_sangre` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `alergias` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_persona_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fk_doctor_id` int NULL DEFAULT NULL,
  `fk_cdi_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_paciente`) USING BTREE,
  INDEX `fk_persona_id`(`fk_persona_id` ASC) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_cdi_id`(`fk_cdi_id` ASC) USING BTREE,
  CONSTRAINT `pacientes_ibfk_544` FOREIGN KEY (`fk_persona_id`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pacientes_ibfk_545` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pacientes_ibfk_546` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pacientes
-- ----------------------------
INSERT INTO `pacientes` VALUES (9, 'Hipertensión arterial y dislipidemia tratada con Amlodipino 5 mg cada 12 h', 78.50, 'Esquema completo COVID-19 (3 dosis de Pfizer/BioNTech), gripe estacional 2023, refuerzo DPT en 2020', 'Ninguna', 'Abuela materna y madre con diabetes tipo 2 diagnosticada después de los 45 años, padre fallecido por infarto agudo de miocardio a los 62 años', 'O (O⁺)', 'Hipersensibilidad confirmada a penicilina (erupción cutánea maculopapular y prurito)', 32, '2025-07-06 20:14:02', '2025-07-06 20:14:02', 5, 7);
INSERT INTO `pacientes` VALUES (11, 'Duis gravida odio at orci ullamcorper interdum', 76.00, 'rubeola', 'Duis gravida odio at orci ullamcorper interdum', 'Duis gravida odio at orci ullamcorper interdum', 'B+', 'Duis gravida odio at orci ullamcorper interdum', 37, '2025-08-28 00:08:24', '2025-08-28 00:08:24', 5, 7);

-- ----------------------------
-- Table structure for personas
-- ----------------------------
DROP TABLE IF EXISTS `personas`;
CREATE TABLE `personas`  (
  `id_persona` int NOT NULL AUTO_INCREMENT,
  `nombre1` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sexo` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `edad` int NULL DEFAULT NULL,
  `estado_civil` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ocupacion` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cedula_identidad` int NULL DEFAULT NULL,
  `fk_cdi_id` int NULL DEFAULT NULL,
  `fk_direccion_id` int NULL DEFAULT NULL,
  `fk_telefono_id` int NULL DEFAULT NULL,
  `fk_correo_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `nacionalidad` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_persona`) USING BTREE,
  INDEX `fk_cdi_id`(`fk_cdi_id` ASC) USING BTREE,
  INDEX `fk_direccion_id`(`fk_direccion_id` ASC) USING BTREE,
  INDEX `fk_telefono_id`(`fk_telefono_id` ASC) USING BTREE,
  INDEX `fk_correo_id`(`fk_correo_id` ASC) USING BTREE,
  CONSTRAINT `personas_ibfk_1777` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_1778` FOREIGN KEY (`fk_direccion_id`) REFERENCES `direcciones` (`id_direccion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_1779` FOREIGN KEY (`fk_telefono_id`) REFERENCES `telefonos` (`id_telefono`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_1780` FOREIGN KEY (`fk_correo_id`) REFERENCES `correos` (`id_correo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of personas
-- ----------------------------
INSERT INTO `personas` VALUES (10, 'Carlos', 'Masculino', 32, NULL, NULL, 87654321, 7, 27, 40, 39, '2025-06-22 17:27:25', '2025-08-28 00:26:52', 'Venezolano/a');
INSERT INTO `personas` VALUES (32, 'Edmundo G', 'Masculino', 50, 'Soltero', 'Lorem ipsum dolor sit ame', 2837477, 7, 21, 33, 33, '2025-07-06 20:14:02', '2025-07-06 20:14:02', 'Extranjero/a');
INSERT INTO `personas` VALUES (37, 'Emilia Lopez', 'Femenino', 19, 'Soltero', 'Duis gravida odio at orci ullamcorper interdum', 28392839, 7, 28, 41, 40, '2025-08-28 00:08:24', '2025-08-28 00:08:24', 'Venezolano/a');
INSERT INTO `personas` VALUES (38, 'Rodrigo Camacho', NULL, NULL, NULL, 'Doctor Especialista', 18283293, 7, 29, 42, 41, '2025-08-28 00:30:23', '2025-08-28 00:30:43', 'Venezolano/a');
INSERT INTO `personas` VALUES (39, 'Rosa A', NULL, NULL, NULL, 'Especialista', 2039844, 7, 30, 43, 42, '2025-08-28 00:43:58', '2025-08-28 00:43:58', 'Venezolano/a');

-- ----------------------------
-- Table structure for pins_recuperacion
-- ----------------------------
DROP TABLE IF EXISTS `pins_recuperacion`;
CREATE TABLE `pins_recuperacion`  (
  `id_pin` int NOT NULL AUTO_INCREMENT,
  `pin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fk_usuario_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pin`) USING BTREE,
  INDEX `fk_usuario_id`(`fk_usuario_id` ASC) USING BTREE,
  CONSTRAINT `pins_recuperacion_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pins_recuperacion
-- ----------------------------

-- ----------------------------
-- Table structure for preguntas_seguridad
-- ----------------------------
DROP TABLE IF EXISTS `preguntas_seguridad`;
CREATE TABLE `preguntas_seguridad`  (
  `id_pregunta` int NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `respuesta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fk_usuario_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pregunta`) USING BTREE,
  INDEX `fk_usuario_id`(`fk_usuario_id` ASC) USING BTREE,
  CONSTRAINT `preguntas_seguridad_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of preguntas_seguridad
-- ----------------------------

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_role`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------

-- ----------------------------
-- Table structure for seguridad
-- ----------------------------
DROP TABLE IF EXISTS `seguridad`;
CREATE TABLE `seguridad`  (
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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of seguridad
-- ----------------------------

-- ----------------------------
-- Table structure for telefonos
-- ----------------------------
DROP TABLE IF EXISTS `telefonos`;
CREATE TABLE `telefonos`  (
  `id_telefono` int NOT NULL AUTO_INCREMENT,
  `codigo` int NULL DEFAULT NULL,
  `numero` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_telefono`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of telefonos
-- ----------------------------
INSERT INTO `telefonos` VALUES (33, 414, 34345343, '2025-07-06 20:14:02', '2025-07-06 20:14:02');
INSERT INTO `telefonos` VALUES (40, 412, 2918273, '2025-08-26 21:20:55', '2025-08-28 00:26:52');
INSERT INTO `telefonos` VALUES (41, 414, 8442093, '2025-08-28 00:08:24', '2025-08-28 00:08:24');
INSERT INTO `telefonos` VALUES (42, 414, 29382, '2025-08-28 00:30:23', '2025-08-28 00:30:43');
INSERT INTO `telefonos` VALUES (43, 414, 5938838, '2025-08-28 00:43:58', '2025-08-28 00:43:58');

-- ----------------------------
-- Table structure for tratamientos
-- ----------------------------
DROP TABLE IF EXISTS `tratamientos`;
CREATE TABLE `tratamientos`  (
  `id_tratamiento` int NOT NULL AUTO_INCREMENT,
  `tipo_de_tratamiento` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_culminacion` datetime NULL DEFAULT NULL,
  `estado` enum('Activo','Suspendido','Finalizado') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Activo',
  `detalles` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `fk_doctor_id` int NOT NULL,
  `fk_paciente_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_tratamiento`) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_paciente_id`(`fk_paciente_id` ASC) USING BTREE,
  CONSTRAINT `tratamientos_ibfk_903` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tratamientos_ibfk_904` FOREIGN KEY (`fk_paciente_id`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tratamientos
-- ----------------------------
INSERT INTO `tratamientos` VALUES (4, 'Quimioterapia', '2025-09-02 04:00:00', '2025-09-23 04:00:00', 'Activo', 'quam et euismod interdum, tortor lacus laoreet neque, sed pharetra velit erat sed nisi. Duis gravida odio at orci ullamcorper interdum. Ut at est nisl', 5, 11, '2025-08-28 00:19:34', '2025-08-28 00:19:34');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `nombre_usuario` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `estado` enum('activo','inactivo','suspendido') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'activo',
  `fk_doctor_id` int NULL DEFAULT NULL,
  `fk_cdi_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `contrasena` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_pregunta` int NULL DEFAULT NULL,
  `id_pin` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`) USING BTREE,
  INDEX `fk_doctor_id`(`fk_doctor_id` ASC) USING BTREE,
  INDEX `fk_cdi_id`(`fk_cdi_id` ASC) USING BTREE,
  INDEX `id_pregunta`(`id_pregunta` ASC) USING BTREE,
  INDEX `id_pin`(`id_pin` ASC) USING BTREE,
  CONSTRAINT `usuarios_ibfk_1730` FOREIGN KEY (`fk_doctor_id`) REFERENCES `doctores` (`id_doctor`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `usuarios_ibfk_1731` FOREIGN KEY (`fk_cdi_id`) REFERENCES `cdis` (`id_cdi`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `usuarios_ibfk_1732` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas_seguridad` (`id_pregunta`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `usuarios_ibfk_1733` FOREIGN KEY (`id_pin`) REFERENCES `pins_recuperacion` (`id_pin`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES (10, 'doctor', 'DrCarlos', '2025-06-22 17:27:25', 'activo', 5, 7, '2025-06-22 17:27:25', '2025-08-28 00:36:45', '$2b$13$7pzrV7qzSSQCoihxrXQ5FegPL6T..dFogYrQaJVOmuGcgLGMUvKTG', NULL, NULL);
INSERT INTO `usuarios` VALUES (12, 'cdi', 'cdi-admin', '2025-06-22 17:27:25', 'activo', NULL, 7, '2025-06-22 17:27:25', '2025-08-28 00:36:02', '$2a$13$pPyjdabspNbDBNJQCKosCe3CgTt0POAER5ff3gI9lOas5xIOhkKF6', NULL, NULL);
INSERT INTO `usuarios` VALUES (13, 'admin', 'superadmin', '2025-06-22 17:27:25', 'activo', NULL, NULL, '2025-06-22 17:27:25', '2025-06-22 17:27:25', '$2a$13$pPyjdabspNbDBNJQCKosCe3CgTt0POAER5ff3gI9lOas5xIOhkKF6', NULL, NULL);
INSERT INTO `usuarios` VALUES (31, 'doctor', 'drcamacho', '2025-08-28 00:30:24', 'activo', 18, 7, '2025-08-28 00:30:24', '2025-08-28 00:36:44', '$2b$13$NvRxvuVymL7AIKF..jXUt.PTz9XPcvrMGzwmWOuWykEWJ/5X2Iz/m', NULL, NULL);
INSERT INTO `usuarios` VALUES (32, 'doctor', 'rosaA', '2025-08-28 00:43:59', 'activo', 19, 7, '2025-08-28 00:43:59', '2025-08-28 00:43:59', '$2b$13$YrLYC54Isu34czUDFL5hYeLw5Yb8hD0tQoI.EQig1hwBtW8dpL8rK', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
