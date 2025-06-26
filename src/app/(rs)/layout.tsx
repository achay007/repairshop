import { Header } from "@/components/Header"
export default async function RSLayout({
    children,  
}:{
    children: React.ReactNode | React.ReactNode[]
}) {
    return (
        <>
        <div className="mx-auto w-full  ">
            {/* <Header /> */}
            <div>
                <Header />
            </div>
            <div className="px-4 py-2">
                {children}
            </div>
        </div>
        </>
    )
}