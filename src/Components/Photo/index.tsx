import './styles.css';
import { Photo } from '../../types/photo';

type Props = {
    data: Photo
}

export const PhotoItem = ({ data }: Props) => {
    return (
        
            <img src={data.url} alt={data.breed} />
        
    );
}