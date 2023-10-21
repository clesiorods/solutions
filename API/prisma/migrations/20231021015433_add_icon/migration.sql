-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Module" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "group" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL DEFAULT '',
    "location" TEXT NOT NULL DEFAULT '',
    "order" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" DATETIME NOT NULL,
    "updated_by" INTEGER,
    "deleted_at" DATETIME,
    "deleted_by" INTEGER
);
INSERT INTO "new_Module" ("created_at", "created_by", "deleted_at", "deleted_by", "description", "group", "id", "location", "order", "updated_at", "updated_by") SELECT "created_at", "created_by", "deleted_at", "deleted_by", "description", "group", "id", "location", "order", "updated_at", "updated_by" FROM "Module";
DROP TABLE "Module";
ALTER TABLE "new_Module" RENAME TO "Module";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
