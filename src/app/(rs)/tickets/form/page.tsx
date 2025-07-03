import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs";

export default async function TicketFormPage(
    {searchParams}:{searchParams: Promise<{[key: string]:string | undefined}>}
){

    try{
        const {customerId, ticketId} = await searchParams;
        if(!customerId && !ticketId){
                return (
                    <>
                        <h2 className="text-2xl mb-2">TicketId or CustomerId required</h2>
                        <BackButton title="Go Back" className="mb-4" variant='default'/>
                    </>
                )
        }
        if(customerId){
            const customer = await getCustomer(parseInt(customerId));
            if(!customer){
                return (
                    <>
                        <h2 className="text-2xl mb-2">CustomerId #{customerId} not found</h2>
                        <BackButton title="Go Back" className="mb-4" variant='default'/>
                    </>
                )
            }
            if(!customer.active){
                return (
                    <>
                        <h2 className="text-2xl mb-2">CustomerId #{customerId} not active</h2>
                        <BackButton title="Go Back" className="mb-4" variant='default'/>
                    </>
                )
            }
            //return ticekt form
            console.log(customer);
            // put customer form component
        }
        if(ticketId){
            const ticket = await getTicket(parseInt(ticketId));
            if(!ticket){
                return (
                    <>
                        <h2 className="text-2xl mb-2">TicketId #{ticketId} not found</h2>
                        <BackButton title="Go Back" className="mb-4" variant='default'/>
                    </>
                )
            }
            const customer = await getCustomer(ticket.customerId);

            //return ticekt form
            console.log("Customer:",customer);
            console.log("Ticket:",ticket);
            // put ticket form component
        }
    }catch (error) {
        if(error instanceof Error) {
            Sentry.captureException(error);
            throw error;
        }
    }
}