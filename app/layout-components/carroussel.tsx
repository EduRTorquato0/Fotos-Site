import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function Carroussel() {

    return (
        <div className="w-full relative id=home">
            <Carousel opts={{ loop: true, duration: 50}} className="w-full">
                <CarouselContent className="w-200">
                    <CarouselItem>
                        <img src="/IMG_0174.jpg" alt="Image 1" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="/IMG_0294.jpg" alt="Image 2" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="/IMG_0324.jpg" alt="Image 3" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="/IMG_0324.jpg" alt="Image 3" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="/IMG_0324.jpg" alt="Image 3" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="/IMG_0324.jpg" alt="Image 3" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="/IMG_0324.jpg" alt="Image 3" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="/IMG_0324.jpg" alt="Image 3" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="/IMG_0324.jpg" alt="Image 3" className="w-full h-full object-cover" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-3 h-15 w-15 cursor-pointer rounded-full " />
                <CarouselNext className="absolute right-3 h-15 w-15 cursor-pointer rounded-full" />
            </Carousel>
        </div>
    )
}
