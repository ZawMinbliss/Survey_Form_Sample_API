/*
  Warnings:

  - The primary key for the `Survey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[Token]` on the table `Survey` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Survey` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `Token` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Survey_Token_key` ON `Survey`(`Token`);
