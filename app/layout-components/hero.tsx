import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { withBasePath } from "@/lib/site-path"

export function Hero() {
    return (
        <div className="flex items-center justify-between h-25 bg-white w-full sticky top-0 z-50">

            <h1 className="text-4xl roboto-slab-title pl-40">Eduardo Torquato</h1>

            <NavigationMenu className="cursor-pointer pr-40">
                <NavigationMenuList>



                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuTrigger className="cursor-pointer">Trabalhos</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className="cursor-pointer" href={withBasePath("/photopages/amsterdam/")}>
                                Amsterdam
                            </NavigationMenuLink>
                            <NavigationMenuLink className="cursor-pointer" href={withBasePath("/photopages/london/")}>
                                London
                            </NavigationMenuLink>
                            <NavigationMenuLink className="cursor-pointer" href={withBasePath("/photopages/sbsp/")}>
                                SBSP
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href={withBasePath("/")}>Home</NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href={`${withBasePath("/")}#contatos`}>Contatos</NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href={`${withBasePath("/")}#quem-sou`}>Quem sou</NavigationMenuLink>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )

}