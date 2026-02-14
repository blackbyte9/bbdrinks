
import { Input } from "../ui/input";

export interface Props {
    name: string;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
};

const items = [
    { id: 1, name: "Aperol" },
    { id: 2, name: "Augustiner Hell" },
    { id: 3, name: "Bitter Lemon" },
    { id: 4, name: "Cola 1L" },
    { id: 5, name: "Don Papa Rum" },
    { id: 6, name: "Franziskaner Weissbier" },
    { id: 7, name: "Gin" },
    { id: 8, name: "Gorbatschow Wodka" },
    { id: 9, name: "Gurke" },
    { id: 10, name: "Havanna Club" },
    { id: 11, name: "Jack Daniels" },
    { id: 12, name: "Käse" },
    { id: 13, name: "Klopapier" },
    { id: 14, name: "Knabberzeug" },
    { id: 15, name: "Limetten" },
    { id: 16, name: "Orangen" },
    { id: 17, name: "Papierhandtücher H3" },
    { id: 18, name: "Ramazzotti" },
    { id: 19, name: "Rotwein" },
    { id: 20, name: "Spätzle" },
    { id: 21, name: "Spezi Kiste" },
    { id: 22, name: "Spülmaschinen Tabs" },
    { id: 23, name: "Tonic Water" },
    { id: 24, name: "Weißwein" },
    { id: 25, name: "Williams Birne" },
];

export const ItemInput: React.FC<Props> = ({ name, disabled, className, ariaLabel }) => {
    return (
        <>
            <Input
                type="text"
                id={name}
                name={name}
                list={`${name}-suggestions`}
                placeholder="Artikel eingeben..."
                className={`w-full p-2 border ${className} border-gray-300 rounded`}
                disabled={disabled}
                aria-label={ariaLabel}
            />
            <datalist id={`${name}-suggestions`}>
                {items.map((item) => (
                    <option key={item.id} value={item.name} />
                ))}
            </datalist>
        </>
    );
};
