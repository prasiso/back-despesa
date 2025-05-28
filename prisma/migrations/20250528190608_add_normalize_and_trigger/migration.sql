
CREATE EXTENSION IF NOT EXISTS unaccent;

CREATE OR REPLACE FUNCTION normalize_title(title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(
           regexp_replace(
             unaccent(title),
             '\s+', '', 'g'
           )
         );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_norm_title()
RETURNS TRIGGER AS $$
BEGIN
  NEW.norm_title := normalize_title(NEW.title);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_norm_title
BEFORE INSERT OR UPDATE OF title ON expense
FOR EACH ROW
EXECUTE FUNCTION update_norm_title();

CREATE OR REPLACE FUNCTION update_norm_category()
RETURNS TRIGGER AS $$
BEGIN
  NEW.norm_category := normalize_title(NEW.category);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_norm_category
BEFORE INSERT OR UPDATE OF category ON expense
FOR EACH ROW
EXECUTE FUNCTION update_norm_category();
