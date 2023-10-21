-- AlterTable
ALTER TABLE "Note" ADD COLUMN "created_by" INTEGER;
ALTER TABLE "Note" ADD COLUMN "deleted_by" INTEGER;
ALTER TABLE "Note" ADD COLUMN "updated_by" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "created_by" INTEGER;
ALTER TABLE "User" ADD COLUMN "deleted_by" INTEGER;
ALTER TABLE "User" ADD COLUMN "updated_by" INTEGER;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Module" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "group" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "locatin" TEXT NOT NULL DEFAULT '',
    "order" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" DATETIME NOT NULL,
    "updated_by" INTEGER,
    "deleted_at" DATETIME,
    "deleted_by" INTEGER
);
INSERT INTO "new_Module" ("created_at", "deleted_at", "description", "group", "id", "updated_at") SELECT "created_at", "deleted_at", "description", "group", "id", "updated_at" FROM "Module";
DROP TABLE "Module";
ALTER TABLE "new_Module" RENAME TO "Module";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
