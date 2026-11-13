import Item from "./items";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { withBasePath } from "@/lib/site-path"


const photos = [
    { src: withBasePath("/recents/IMG_0174.jpg"), alt: "Centro de Amsterdã" },
    { src: withBasePath("/recents/IMG_1037.jpg"), alt: "Ciclista, na Ciclofaixa da Marginal de SP" },
    { src: withBasePath("/recents/IMG_0926.jpg"), alt: "Igreja em São Bento do Sapucaí" },
    { src: withBasePath("/recents/IMG_1026.jpg"), alt: "Ponte Estaiada, SP" },
    { src: withBasePath("/recents/IMG_0919.jpg"), alt: "Eu Registrado pelo olhar da Deborah, São Bento do Sapucaí" },
]

export default function HomePage() {

    return (


        <main className="bg-gray-50">


            <div className="flex flex-col items-center justify-center gap-6 bg-blue-100 mt-2 px-6 py-8 text-2xl md:flex-row md:px-20">
                <p className="max-w-3xl text-center md:text-center">Você também pode encontrar mais fotos e contratar serviços por meio do meu <a href="https://instagram.com/torquato.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Instagram</a>.</p>
            </div>

            <h2 className="text-4xl roboto-slab-title justify-center m-10">Mais recentes: </h2>


            <div className="m-10 grid grid-cols-1 justify-start gap-6 md:grid-cols-2">
                {photos.map((photo, index) => (
                    <Item key={index} foto={photo.src} descricao={photo.alt} />
                ))}
            </div>

            <div id="quem-sou" className=" mt-10 flex min-h-80 w-full flex-col items-center justify-start gap-6 bg-amber-100 px-6 py-8 text-2xl md:flex-row md:px-20">
                <Image src={withBasePath("/profile.jpg")} alt="Foto de perfil" width={200} height={200} className="h-50 w-50 shrink-0 rounded-full object-cover" />
                <p className="max-w-3xl text-center md:text-left">O registro é uma parte fundamental de quem eu sou, não é trabalho, ou hobby, mas a fotografia é uma expressão espontânea da minha própria identidade.</p>
                <p className="max-w-3xl text-center md:text-left">Apenas um rapaz latino americano, nascido no interior no começo do século. Rodando por aí, às vezes de bike, às vezes a pé, mas sempre com o olhar atento.</p>
            </div>

        </main>
    )
}