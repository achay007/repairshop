import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs";

export default async function CustomerFormPage(
    {searchParams}:{searchParams: Promise<{[key: string]:string | undefined}>}

)
{
    try {
        const {customerId} = await searchParams;
        if(customerId){
            const customer = await getCustomer(parseInt(customerId))

            if(!customer){
                return (
                    <>
                        <h2 className="text-2xl mb-2">CustomerId #{customerId} not found</h2>
                        <BackButton title="Go Back" className="mb-4" variant='default'/>
                    </>
                )
            }
            console.log(customer);
            // put customer form component

        } else {
            // put new customer form component
        }

    }catch (error) {
        if(error instanceof Error) {
            Sentry.captureException(error);
            throw error;
            
    }
}
}