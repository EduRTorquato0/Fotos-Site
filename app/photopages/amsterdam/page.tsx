import Pages from "@/app/layout-components/pages";

const photos = [
    { src: "/amsterdam/IMG_0173.jpg", alt: "Canais de Amsterdam" },
    { src: "/amsterdam/IMG_0193.jpg", alt: "Barco turístico andando pelos canais" },
    { src: "/amsterdam/IMG_0201.jpg", alt: "Museu de Arte Van Gogh, Amsterdam" },
    { src: "/amsterdam/IMG_0308.jpg", alt: "Bandeira Nacional da Holanda" },
    { src: "/amsterdam/IMG_0309.jpg", alt: "Ruas de Amsterdam" },
]

export default function Amsterdam() {
    return Pages("Passei um total de 4 dias em Amsterdam, é uma cidade afetada pelo turismo, mas ainda assim, única. Os canais são largos, lá existe cor como em nenhum outro lugar.", photos);
}
