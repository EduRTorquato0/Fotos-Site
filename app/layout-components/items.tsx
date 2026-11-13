export default function Item({ foto, descricao }: { foto: string; descricao: string }) {
    return (
        <div className="flex h-full flex-col bg-white shadow-md p-4">
            <img src={foto} alt="Item" className="w-full h-auto" />
            <p className="mt-auto py-4 font-bold">{descricao}</p>
        </div>
    )
}
