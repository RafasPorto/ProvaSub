-- CreateTable
CREATE TABLE "Computador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dono" TEXT NOT NULL,
    "placamae" TEXT NOT NULL,
    "processador" TEXT NOT NULL,
    "memoria" INTEGER NOT NULL,
    "armazenamento" TEXT NOT NULL,
    "fonte" TEXT NOT NULL,
    "criadoEm" DATETIME DEFAULT CURRENT_TIMESTAMP
);
