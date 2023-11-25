-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Payables" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "date_expiration" DATETIME NOT NULL,
    "date_payment" DATETIME NOT NULL,
    "value" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "addiction" REAL NOT NULL,
    "amount_paid" REAL NOT NULL,
    "is_parcel" INTEGER NOT NULL DEFAULT 0,
    "first_parcel" INTEGER NOT NULL,
    "total_parcel_value" REAL NOT NULL,
    "quantity_parcel" INTEGER NOT NULL,
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
