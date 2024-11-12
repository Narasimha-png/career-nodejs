CREATE TRIGGER before_insert_openings 
BEFORE INSERT ON OpenPostings
FOR EACH ROW
BEGIN
    DECLARE Job_Id INT;
    SET Job_Id = FLOOR(10000 + (RAND() * 90000));
    WHILE EXISTS(SELECT 1 FROM OpenPostings WHERE id = Job_Id) DO
        SET Job_Id = FLOOR(10000 + (RAND() * 90000));
    END WHILE;
    SET NEW.id = Job_Id;
END 