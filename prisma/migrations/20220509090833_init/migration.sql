/*
  Warnings:

  - You are about to drop the column `Phone_no` on the `Survey` table. All the data in the column will be lost.
  - Added the required column `Phone_Number` to the `Survey` table without a default value. This is not possible if the table is not empty.
  - Made the column `Company_Name` on table `Survey` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Survey_Company_Name_key` ON `Survey`;

-- AlterTable
ALTER TABLE `Survey` DROP COLUMN `Phone_no`,
    ADD COLUMN `Phone_Number` VARCHAR(255) NOT NULL,
    MODIFY `Company_Name` VARCHAR(255) NOT NULL;
