
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DataCard from '../data';

export interface ItemProps {
    name: string;
    className?: string;
};

export const ItemCard: React.FC<ItemProps> = ({
    name,
    className = '',
}) => {
    return (
        <Card className={`data-card ${className} `} >
            <CardHeader>
                <CardTitle className={`text-lg font-thin`}>{name}</CardTitle>
            </CardHeader>
            <CardContent className={`flex gap-4 justify-center`}>
                <DataCard name="Flaschen" className="mb-4" type='bottles' />
                <DataCard name="Kisten" className="mb-4" type='cases' />
                <DataCard name="Angebrochen" className="mb-4" type='opened' />
            </CardContent>
        </Card>
    );
};

export default ItemCard;
