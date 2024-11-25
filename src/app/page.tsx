import Image from "next/image";
import Form from "@/components/form";
import Message from "@/components/message";

export default function Home() {
    return (
        <>
            <div className="flex justify-center flex-col md:flex-row w-screen h-dvh items-center">
                <div className="w-full md:w-1/2 bg-amber-200 h-3/4 md:h-full">
                    <Form />
                </div>
                <div className="w-full md:w-1/2 bg-red-950 h-full flex justify-center items-center">
                    <Message/>
                </div>

                <Image
                    src="https://th.bing.com/th/id/R.a44d4a8700e36a874448f8b420e87215?rik=J1JBxivK8I%2fgVA&pid=ImgRaw&r=0"
                    alt="Imagén Vino"
                    width={400}
                    height={400}
                    className="absolute hidden md:block wine-img"/>


            </div>


        </>
    );
}