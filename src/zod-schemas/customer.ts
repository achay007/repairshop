import {createInsertSchema,createSelectSchema} from 'drizzle-zod';
import {customers} from '@/db/schema';

export const insertCustomerSchema = createInsertSchema(customers,{
    firstName: (field) => field.min(1, 'first name is required'),
    lastName: (field) => field.min(1, 'last name is required'),
    address1: (field) => field.min(1, 'address is required'),
    city: (field) => field.min(1, 'city is required'),
    state: (field) => field.length(2, 'state must be 2 characters'),
    email: (field) => field.email('invalid email address').min(1, 'email is required'),
    zip: (field) => field.regex(/^\d{5}(-\d{4})?$/,'invalid zip code use five digits or five digits followed by - and 4 digits'),
    phone: (field) => field.regex(/^\d{3}-\d{3}-\d{4}?$/,'invalid phone number use xxx-xxx-xxxx format'),
});

export const selectCustomerSchema =createSelectSchema(customers)

export type insertCustomerSchemaType = typeof insertCustomerSchema
export type selectCustomerSchemaType = typeof selectCustomerSchema