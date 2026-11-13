import Item from "./items";

export default function Pages(text: string, photos: { src: string; alt: string }[]) {

    return (
        <main className="bg-gray-50">
            <p className="max-w-5xl text-2xl text-start w-100 ml-30 mt-10">{'"' + text + '"'}</p>
            <div className="flex flex-col items-center gap-6 mt-2 px-6 py-8 text-2xl md:flex-row md:px-20">

                <div className="m-10 grid grid-cols-1 justify-start gap-6 md:grid-cols-2">
                    {photos.map((photo, index) => (
                        <Item key={index} foto={photo.src} descricao={photo.alt} />
                    ))}
                </div>
            </div>
        </main>
    );

}