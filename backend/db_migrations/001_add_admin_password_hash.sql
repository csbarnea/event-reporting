-- 001_add_admin_password_hash.sql
-- Adds password_hash to admins table (needed for JWT admin login)

ALTER TABLE admins
ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255);