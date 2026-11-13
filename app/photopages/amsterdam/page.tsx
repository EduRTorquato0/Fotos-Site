import Pages from "@/app/layout-components/pages";
import { withBasePath } from "@/lib/site-path";

const photos = [
    { src: withBasePath("/amsterdam/IMG_0173.jpg"), alt: "Canais de Amsterdam" },
    { src: withBasePath("/amsterdam/IMG_0193.jpg"), alt: "Barco turístico andando pelos canais" },
    { src: withBasePath("/amsterdam/IMG_0201.jpg"), alt: "Museu de Arte Van Gogh, Amsterdam" },
    { src: withBasePath("/amsterdam/IMG_0308.jpg"), alt: "Bandeira Nacional da Holanda" },
    { src: withBasePath("/amsterdam/IMG_0309.jpg"), alt: "Ruas de Amsterdam" },
]

export default function Amsterdam() {
    return Pages("Passei um total de 4 dias em Amsterdam, é uma cidade afetada pelo turismo, mas ainda assim, única. Os canais são largos, lá existe cor como em nenhum outro lugar.", photos);
}
