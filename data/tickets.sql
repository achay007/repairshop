INSERT INTO tickets (
    customer_id, title, description, completed, tech, created_at, updated_at
) VALUES
(
    1, 'Password Reset', 'Customer needs help resetting their password.', false, 'Alice', NOW(), NOW()
),
(
    2, 'Billing Issue', 'Incorrect charge on last invoice.', false, 'Bob', NOW(), NOW()
),
(
    3, 'Software Installation', 'Assist with installation of required software.', true, 'Charlie', NOW(), NOW()
),
(
    1, 'VPN Access', 'VPN not connecting from home network.', false, 'unassigned', NOW(), NOW()
),
(
    5, 'Account Locked', 'Too many failed login attempts, account is locked.', true, 'Dave', NOW(), NOW()
);
