-- CreateTable
CREATE TABLE `User` (
    `Token` INTEGER NOT NULL,
    `Name` VARCHAR(255) NOT NULL,
    `Phone_no` VARCHAR(255) NOT NULL,
    `Company_Name` VARCHAR(255) NULL,
    `Designation` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_Company_Name_key`(`Company_Name`),
    PRIMARY KEY (`Token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
