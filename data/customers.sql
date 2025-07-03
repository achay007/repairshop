INSERT INTO customers (
    first_name, last_name, email, phone, address1, address2, city,
    state, zip, notes, active, created_at, updated_at
) VALUES
(
    'John', 'Doe', 'john.doe@example.com', '1234567890', '123 Main St', 'Apt 4B',
    'New York', 'NY', '10001', 'Preferred customer', true, now(), now()
),
(
    'Jane', 'Smith', 'jane.smith@example.com', '2345678901', '456 Elm St', NULL,
    'Los Angeles', 'CA', '90001', NULL, true, now(), NOW()
),
(
    'Alice', 'Johnson', 'alice.j@example.com', '3456789012', '789 Oak Ave', 'Suite 200',
    'Chicago', 'IL', '60601', 'Likes newsletters', false, NOW(), NOW()
),
(
    'Bob', 'Williams', 'bob.williams@example.com', '4567890123', '321 Pine Rd', NULL,
    'Houston', 'TX', '77001', NULL, true, NOW(), NOW()
),
(
    'Emily', 'Brown', 'emily.brown@example.com', '5678901234', '654 Cedar Blvd', 'Floor 3',
    'Miami', 'FL', '33101', 'VIP', true, NOW(), NOW()
);
