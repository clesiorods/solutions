-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "symbol" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT '',
    "shortName" TEXT NOT NULL,
    "longName" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "url_logo" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" DATETIME NOT NULL,
    "updated_by" INTEGER,
    "deleted_at" DATETIME,
    "deleted_by" INTEGER
);
INSERT INTO "new_Stock" ("Description", "created_at", "created_by", "currency", "deleted_at", "deleted_by", "id", "longName", "shortName", "symbol", "updated_at", "updated_by", "url_logo") SELECT "Description", "created_at", "created_by", "currency", "deleted_at", "deleted_by", "id", "longName", "shortName", "symbol", "updated_at", "updated_by", "url_logo" FROM "Stock";
DROP TABLE "Stock";
ALTER TABLE "new_Stock" RENAME TO "Stock";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
