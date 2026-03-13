-- Migration : ajouter la colonne Indeclinable à a01_words
-- À exécuter dans Supabase → SQL Editor
--
-- Contexte : lors de l'ajout de la colonne slug ou d'une migration,
-- la colonne Indeclinable peut avoir été omise. Ce script la rétablit.

-- Ajouter Indeclinable si elle n'existe pas
ALTER TABLE a01_words
ADD COLUMN IF NOT EXISTS "Indeclinable" text DEFAULT 'Non';

-- Marquer les mots indéclinables connus :
-- - Mots d'emprunt étrangers (se terminant par une voyelle)
-- - Toponymes étrangers indéclinables
UPDATE a01_words SET "Indeclinable" = 'Oui' WHERE base_form IN (
  'кафе', 'метро', 'такси', 'кино', 'радио', 'какао', 'кофе', 'меню', 'жюри', 'шоу', 'фото', 'евро',
  'Хельсинки', 'Сочи', 'Токио'
);
