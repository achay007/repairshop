import {createInsertSchema,createSelectSchema} from 'drizzle-zod';
import {customers} from '@/db/schema';
import {z} from 'zod';


// export const insertCustomerSchema = createInsertSchema(customers,{
//     firstName: (schema) => schema.firstName.min(1, 'first name is required'),
//     lastName: (field) => field.min(1, 'last name is required'),
//     address1: (field) => field.min(1, 'address is required'),
//     city: (field) => field.min(1, 'city is required'),
//     state: (field) => field.length(2, 'state must be 2 characters'),
//     email: (field) => field.email('invalid email address').min(1, 'email is required'),
//     zip: (field) => field.regex(/^\d{5}(-\d{4})?$/,'invalid zip code use five digits or five digits followed by - and 4 digits'),
//     phone: (field) => field.regex(/^\d{3}-\d{3}-\d{4}?$/,'invalid phone number use xxx-xxx-xxxx format'),
// });
export const insertCustomerSchema = z.object({
    id: z.number().optional(),
    firstName: z.string().min(1, 'first name is required'),
    lastName: z.string().min(1, 'last name is required'),       
    address1: z.string().min(1, 'address is required'),
    address2: z.string().optional(),
    city: z.string().min(1, 'city is required'),
    state: z.string().length(2, 'state must be 2 characters'),
    email: z.string().email('invalid email address').min(1, 'email is required'),
    zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'invalid zip code use five digits or five digits followed by - and 4 digits'),
    phone: z.string().regex(/^\d{3}-\d{3}-\d{4}?$/, 'invalid phone number use xxx-xxx-xxxx format'),
    notes: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export const selectCustomerSchema =z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address1: z.string(),
  address2: z.string().nullable().optional(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  notes: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
console.log('insertcustomreschema', insertCustomerSchema);
export type insertCustomerSchemaType = typeof insertCustomerSchema._type
export type selectCustomerSchemaType = z.infer<typeof selectCustomerSchema>