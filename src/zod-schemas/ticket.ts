import {createInsertSchema, createSelectSchema} from 'drizzle-zod';
import {tickets} from '@/db/schema';
import {z,ZodType,ZodTypeAny,ZodUnion} from 'zod';

export const insertTicketSchema = createInsertSchema(tickets, {
    id:  (field) => field.optional(),
    title: (field) => field.min(1, 'Title is required'),
    description: (field) => field.min(1, 'Description is required'),
    tech: (field) => field.email('email is required'),
});

export const selectTicketSchema = createSelectSchema(tickets)

export type insertTicketSchemaType = typeof insertTicketSchema
export type selectTicketSchemaType = typeof selectTicketSchema
