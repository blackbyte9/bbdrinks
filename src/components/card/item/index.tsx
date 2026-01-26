
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DataCard from '../data';
import EditItem from '@/components/item/edit';
import { Item } from '@/lib/prisma/client';

export interface ItemProps {
    item: Item;
    className?: string;
};

export const ItemCard: React.FC<ItemProps> = ({
    item,
    className = '',
}) => {
    return (
        <Card className={`data-card ${className} `} >
            <CardHeader>
                <CardTitle className={`text-lg font-thin`}>{item.name}</CardTitle>
            </CardHeader>
            <CardContent className={`flex gap-4 justify-center`}>
                <DataCard name="Flaschen" className="mb-4" type='bottles' />
                <DataCard name="Kisten" className="mb-4" type='cases' />
                <DataCard name="Angebrochen" className="mb-4" type='opened' />
                <EditItem className="self-center" item={item} />
            </CardContent>
        </Card>
    );
};

export default ItemCard;
