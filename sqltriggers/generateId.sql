CREATE TRIGGER before_insert_openings 
BEFORE INSERT ON openpostings
FOR EACH ROW
BEGIN
    DECLARE Job_Id INT;
    SET Job_Id = FLOOR(10000 + (RAND() * 90000));
    WHILE EXISTS(SELECT 1 FROM openpostings WHERE id = Job_Id) DO
        SET Job_Id = FLOOR(10000 + (RAND() * 90000));
    END WHILE;
    SET NEW.id = Job_Id;
END 