import { Button } from "@/components/ui/button"
import {Hero} from "./layout-components/hero"
import { Carroussel } from "./layout-components/carroussel"
import { Footer } from "./layout-components/footer"
import HomePage from "./layout-components/homePage"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    {/* NAVBAR  */}
    <Hero />

    {/* CARROUSEL DE PRINCIPAIS IMAGENS*/}
    <Carroussel />
    

    <HomePage />

    
    {/* Contato */}
    <Footer />
    </main>
  )
}