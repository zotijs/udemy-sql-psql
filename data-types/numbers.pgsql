-- simple calc that return integer
SELECT (2 + 2);

-- returns numeric
SELECT (2.0);

-- treat as integer
SELECT (2.0::INTEGER);

-- treat as small integer
SELECT (2.0::SMALLINT);

-- out of range integer
-- SELECT (999999999999999999999999999999::INTEGER);

-- real numbers
SELECT (1.99999::REAL - 1.99998::REAL);

-- decimal numbers
SELECT (1.99999::DECIMAL - 1.99998::DECIMAL);