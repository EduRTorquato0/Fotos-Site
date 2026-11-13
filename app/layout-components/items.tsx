export default function Item({ foto, descricao }: { foto: string; descricao: string }) {
    return (
        <div className="flex flex-col bg-white shadow-md p-4">
            <img src={foto} alt="Item" className="w-full h-auto" />
            <p className="font-bold mt-2">{descricao}</p>
        </div>
    )
}
