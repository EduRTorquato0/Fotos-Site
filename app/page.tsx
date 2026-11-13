import { Carroussel } from "./layout-components/carroussel"
import HomePage from "./layout-components/homePage"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between">
    {/* NAVBAR  */}

    {/* CARROUSEL DE PRINCIPAIS IMAGENS*/}
    <Carroussel />
    

    <HomePage />

    
    {/* Contato */}
    </main>
  )
}