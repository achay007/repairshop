"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Form} from '@/components/ui/form'
import {Button} from '@/components/ui/button'

import { insertCustomerSchema, type insertCustomerSchemaType, type selectCustomerSchemaType } from "@/zod-schemas/customer";

type Props = {
    customer?: selectCustomerSchemaType
}
export default function CustomerForm({customer}: Props) { 
    const defaultValues: insertCustomerSchemaType = {
        id: customer?.id || 0,
        firstName: customer?.firstName || '',
        lastName: customer?.lastName || '',
        address1: customer?.address1 || '',
        address2: customer?.address2 || '',
        city: customer?.city || '',
        state: customer?.state || '',  
        zip: customer?.zip || '',
        phone: customer?.phone || '',
        email: customer?.email || '',
        notes: customer?.notes || '',
        createdAt: customer?.createdAt || new Date(),
        updatedAt: customer?.updatedAt || new Date(),
    }
    const form = useForm<insertCustomerSchemaType>({
        resolver: zodResolver(insertCustomerSchema),
        defaultValues,
        mode: 'onBlur',
    });

    async function submitForm(data: insertCustomerSchemaType) {
        console.log('submitForm', data);
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">
                    {customer?.id ? 'Edit' : 'New'} Customer Form
                </h2>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitForm)} 
                className="flex flex-col sm:flex-row sm:gap-8 gap-4">
                    <p>
                        {JSON.stringify(form.getValues())}
                    </p>
                </form>
            </Form>
        </div>
    )

}
