CREATE TABLE IF NOT EXISTS todo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    target_date DATE,
    is_done BOOLEAN
); 


