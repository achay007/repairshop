import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-black bg-[url('/images/Home.jpg')] bg-cover bg-center ">
        <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh ">
          <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-amber-50" >
            <h1 className="text-4xl font-bold">
              Computer <br/> repair shop</h1>
              <address>
                555 Gateway Lane <br/>
                Kansas city, KS 66112
              </address>
              <p>
                Open daily: 9am - 5pm
              </p>
              <Link href="tel:816-555-5555" className="hover:underline">
                <p>
                  816-555-5555
                </p>
              </Link>
            
            
          </div>
        </main>
    </div>
  );
}
