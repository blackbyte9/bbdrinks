import Image from "next/image";
import { NavigationMenu } from "../ui/navigation-menu";
import { UserButton } from "@daveyplate/better-auth-ui";

export interface Props {
    className?: string;
    ariaLabel?: string;
};

export const Navigation: React.FC<Props> = ({
    className = '',
    ariaLabel = 'Navigation',
}) => {
    return (
        <header className={`navigation ${className} sticky top-0 left-0 right-0 w-full bg-orange-900 text-white p-4 flex flex-row`}
            aria-label={ariaLabel}
        >
            <div className="basis-1/4 relative">
                <Image src="/logo.png" alt="Logo" width={240} height={40} className="w-auto h-auto object-contain" fill={false} />
            </div>
            <div className='basis-1/2 mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
                <NavigationMenu>

                </NavigationMenu>
            </div>
            <div className="basis-1/4 relative flex justify-end items-center">
                <UserButton />
            </div>
        </header>
    );
};
