-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Payables" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "code" TEXT,
    "date_expiration" DATETIME NOT NULL,
    "date_payment" DATETIME NOT NULL,
    "value" REAL NOT NULL,
    "discount" REAL NOT NULL DEFAULT 0,
    "addiction" REAL NOT NULL DEFAULT 0,
    "amount_paid" REAL NOT NULL DEFAULT 0,
    "is_parcel" INTEGER DEFAULT 0,
    "first_parcel" INTEGER,
    "total_parcel_value" REAL,
    "quantity_parcel" INTEGER,
    "id_user" INTEGER NOT NULL,
    "obs" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_at" DATETIME NOT NULL,
    "updated_by" INTEGER,
    "deleted_at" DATETIME,
    "deleted_by" INTEGER
);
INSERT INTO "new_Payables" ("addiction", "amount_paid", "code", "created_at", "created_by", "date_expiration", "date_payment", "deleted_at", "deleted_by", "description", "discount", "first_parcel", "id", "id_user", "is_parcel", "obs", "quantity_parcel", "title", "total_parcel_value", "updated_at", "updated_by", "value") SELECT "addiction", "amount_paid", "code", "created_at", "created_by", "date_expiration", "date_payment", "deleted_at", "deleted_by", "description", "discount", "first_parcel", "id", "id_user", "is_parcel", "obs", "quantity_parcel", "title", "total_parcel_value", "updated_at", "updated_by", "value" FROM "Payables";
DROP TABLE "Payables";
ALTER TABLE "new_Payables" RENAME TO "Payables";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
