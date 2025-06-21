CREATE DATABASE cdi_database;

USE cdi_database;

CREATE TABLE Usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  nacionalidad VARCHAR(255) NOT NULL,
  dni VARCHAR(255) NOT NULL,
  telefono VARCHAR(255) NOT NULL,
  direccion VARCHAR(255),
  password VARCHAR(255),
  hash VARCHAR(255) NOT NULL DEFAULT '',
  profileImage VARCHAR(255) NOT NULL DEFAULT '',
  role ENUM('admin', 'Encargado', 'Doctor', 'user') NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Consultas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  salida DATE NOT NULL,
  ingreso DATE NOT NULL ,
  diagnostico VARCHAR(255) NOT NULL ,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Pacientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  nacionalidad VARCHAR(255) NOT NULL,
  dni VARCHAR(255) NOT NULL,
  edad VARCHAR(255) NOT NULL,
  telefono VARCHAR(255) NOT NULL,
  direccion VARCHAR(255),
  sexo VARCHAR(255) NOT NULL,
  hash VARCHAR(255) NOT NULL DEFAULT '',
  fatherID VARCHAR(255) DEFAULT '',
  role VARCHAR(255) NOT NULL DEFAULT 'Paciente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Especialidad (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roleEspecialidad ENUM('Enfermeria', 'Oftalmologia', 'Rayosx', 'Hospitalizacion', 'Emergencias', 'Laboratorio', 'Farmacia', 'TerapiasIntensivas', 'Recepcion') NOT NULL DEFAULT 'Enfermeria',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE Usuarios ADD COLUMN EspecialidadId INT;

ALTER TABLE Usuarios ADD CONSTRAINT fk_usuarios_especialidad FOREIGN KEY (EspecialidadId) REFERENCES Especialidad(id);

ALTER TABLE Consultas ADD COLUMN PacienteId INT;

ALTER TABLE Consultas ADD CONSTRAINT fk_consultas_paciente FOREIGN KEY (PacienteId) REFERENCES Pacientes(id);


INSERT INTO Especialidad (roleEspecialidad) VALUES ('Enfermeria');
INSERT INTO Especialidad (roleEspecialidad) VALUES ('Oftalmologia');
INSERT INTO Especialidad (roleEspecialidad) VALUES ('Rayosx');
INSERT INTO Especialidad (roleEspecialidad) VALUES ('Hospitalizacion');
INSERT INTO Especialidad (roleEspecialidad) VALUES ('Emergencias');
INSERT INTO Especialidad (roleEspecialidad) VALUES ('Laboratorio');
INSERT INTO Especialidad (roleEspecialidad) VALUES ('Farmacia');
INSERT INTO Especialidad (roleEspecialidad) VALUES ('TerapiasIntensivas');
INSERT INTO Especialidad (roleEspecialidad) VALUES ('Recepcion');


INSERT INTO Usuarios (name, email, nacionalidad, dni, telefono, direccion, password, role) 
VALUES ('Administrador', 'admin@admin.com', 'Venezuela', '123456789', '1234567890', 'Republica', '123456', 'admin');

INSERT INTO Usuarios (name, email, nacionalidad, dni, telefono, direccion, password, role) 
VALUES ('Encargado', 'encargado@gmail.com', 'Venezuela', '987654321', '0987654321', 'Republica', '123456', 'Encargado');

INSERT INTO Usuarios (name, email, nacionalidad, dni, telefono, direccion, password, role, EspecialidadId) 
VALUES ('Doctor', 'doctor@gmail.com', 'Venezuela', '456789123', '5678912345', 'Republica', '123456', 'Doctor', 1);
