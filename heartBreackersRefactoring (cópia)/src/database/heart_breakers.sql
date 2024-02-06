-- Banco de dados: `heart_breakers_refactoring`

--
-- Estrutura para tabela `doctor`
--

CREATE TABLE IF NOT EXISTS `doctor` (
  `doctorId` INTEGER PRIMARY KEY AUTOINCREMENT,
  `cpf` TEXT NOT NULL UNIQUE,
  `password` TEXT NOT NULL
);

-- Despejando dados para a tabela `doctor`

INSERT INTO `doctor` (`cpf`, `password`) VALUES
('11111111111', '123'),
('22222222222', '123');

--
-- Estrutura para tabela `patient`
--

CREATE TABLE IF NOT EXISTS `patient` (
  `medical_record` INTEGER PRIMARY KEY AUTOINCREMENT,
  `photo` BLOB,
  `name` TEXT,
  `cpf` TEXT UNIQUE,
  `rg` INTEGER,
  `birth_date` TEXT,
  `address` TEXT,
  `cell` INTEGER,
  `weight` REAL,
  `height` REAL,
  `gender` TEXT,
  `blood_type` TEXT,
  `cid` TEXT,
  `complaint` TEXT,
  `disease_history` TEXT,
  `allergies` TEXT,
  `conduct` TEXT,
  `physical_state` TEXT,
  `exams` BLOB,
  `diagnostic_hypothesis` TEXT,
  `results` TEXT
);
