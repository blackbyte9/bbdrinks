import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { UserButton } from "@daveyplate/better-auth-ui";
import Link from "next/link";

export interface Props {
    className?: string;
    ariaLabel?: string;
};

export const Navigation: React.FC<Props> = ({
    className = '',
    ariaLabel = 'Navigation',
}) => {
    return (
        <header className={`navigation ${className} sticky top-0 left-0 right-0 w-full transition-all bg-orange-900 text-white p-4 flex flex-row`}
            aria-label={ariaLabel}
        >
            <div className="basis-1/4 relative">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={240} height={40} className="w-auto h-auto object-contain" fill={false} />
                </Link>
            </div>
            <div className='basis-1/2 h-full w-full items-center justify-between '>
                <NavigationMenu className="h-full w-full items-center justify-between">
                    <NavigationMenuList className='flex-wrap justify-start gap-2'>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/inventory/2">Inventur</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/shoppinglist">Einkaufsliste</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="basis-1/4 relative">
                <UserButton />
            </div>
        </header>
    );
};
