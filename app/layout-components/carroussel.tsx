import Image from "next/image"
import { withBasePath } from "@/lib/site-path"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const photos = [
    { src: withBasePath("/carrousselphotos/IMG_0324.jpg"), alt: "Imagem do carrossel 1" },
    { src: withBasePath("/carrousselphotos/IMG_0294.jpg"), alt: "Imagem do carrossel 2" },
    { src: withBasePath("/carrousselphotos/IMG_0875.jpg"), alt: "Imagem do carrossel 3" },
    { src: withBasePath("/carrousselphotos/IMG_0897.jpg"), alt: "Imagem do carrossel 4" },
    { src: withBasePath("/carrousselphotos/IMG_0919.jpg"), alt: "Imagem do carrossel 5" },
]

export function Carroussel() {

    return (
        <div className="w-full relative id=home">
            <Carousel opts={{ loop: true, duration: 50}} className="w-full h-[37.5rem] mb-5">
                <CarouselContent className="w-full">
                    {photos.map((photo, index) => (
                        <CarouselItem key={photo.src} className="relative h-[37.5rem] w-full basis-1/2 pl-10">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="100vw"
                                loading="eager"
                                fetchPriority={index === 0 ? "high" : "auto"}
                                className="object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-3 h-15 w-15 cursor-pointer rounded-full " />
                <CarouselNext className="absolute right-3 h-15 w-15 cursor-pointer rounded-full" />
            </Carousel>
        </div>
    )
}
