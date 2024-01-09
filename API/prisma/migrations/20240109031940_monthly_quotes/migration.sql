-- CreateTable
CREATE TABLE "MonthlyQuotes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_stock" INTEGER NOT NULL,
    "symbol" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "open" REAL NOT NULL,
    "high" REAL NOT NULL,
    "low" REAL NOT NULL,
    "close" REAL NOT NULL,
    "volume" INTEGER NOT NULL,
    "adjustedClose" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" DATETIME NOT NULL,
    "updated_by" INTEGER,
    "deleted_at" DATETIME,
    "deleted_by" INTEGER
);
