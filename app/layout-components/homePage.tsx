import Item from "./items";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"


export default function HomePage() {

    return (

        
        <main className="bg-gray-50">

   

            <h2 className="text-4xl roboto-slab-title justify-center m-10">Mais recentes: </h2>

            <div className="m-10 grid grid-cols-1 justify-start gap-6 md:grid-cols-2">
                <Item descricao="Descrição do Item 1" foto="/IMG_0174.jpg" />
                <Item descricao="Descrição do Item 2" foto="/IMG_0897.jpg" />
                <Item descricao="Descrição do Item 2" foto="/IMG_0919.jpg" />
                <Item descricao="Descrição do Item 2" foto="/IMG_0926.jpg" />
            </div>

            <div id="quem-sou" className=" mt-10 flex min-h-80 w-full flex-col items-center justify-start gap-6 bg-amber-100 px-6 py-8 text-2xl md:flex-row md:px-20">
                <Image src="/profile.jpg" alt="Foto de perfil" width={200} height={200} className="h-50 w-50 shrink-0 rounded-full object-cover" />
                <p className="max-w-3xl text-center md:text-left">O registro é uma parte fundamental de quem eu sou, não é trabalho, ou hobby, mas a fotografia é uma expressão espontânea da minha própria identidade.</p>
                <p className="max-w-3xl text-center md:text-left">Apenas um rapaz latino americano, nascido no interior no começo do século. Rodando por aí, às vezes de bike, às vezes a pé, mas sempre com o olhar atento.</p>
            </div>

        </main>
    )
}