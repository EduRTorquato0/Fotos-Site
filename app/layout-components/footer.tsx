import { withBasePath } from "@/lib/site-path"

export function Footer() {
    return (
        <footer id="contatos" className="scroll-mt-25 bg-blue-950 text-white py-4 w-full h-100">
            <div className="container mx-auto text-left px-4 flex flex-col h-full">
                <p className="text-5xl roboto-slab-title mt-5">Eduardo Torquato</p>
                <p className="mt-2">Todas as imagens apresentadas são propriedade intelectual do autor.</p>
                
                <div className="flex items-center gap-4 mt-4">
                    <a href="https://wa.me/5511947057061" target="_blank" rel="noopener noreferrer">
                        <img src={withBasePath("/whatsapp.png")} alt="WhatsApp" className="w-5 h-5 cursor-pointer transition duration-300 ease-in-out hover:brightness-50" />
                    </a>
                    <a href="https://instagram.com/torquato.jpg" target="_blank" rel="noopener noreferrer">
                        <img src={withBasePath("/instagram.png")} alt="Instagram" className="w-5 h-5 cursor-pointer transition duration-300 ease-in-out hover:brightness-50" />
                    </a>
                </div>
                <p className="font-bold mt-auto">Made by MySelf</p>

            </div>
        </footer>
    )
}