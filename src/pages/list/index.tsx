import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/UseApi';
import { Photo as PhotoType } from '../../types/photo';

export const List = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [photoInfo, setPhotoInfo] = useState<PhotoType>();

    useEffect(() => {
        if(params.breed) {
            loadPhoto(params.breed);
        }
    }, [useApi]);

    const loadPhoto = async (token: string) => {
        setLoading(true);
        const photo = await useApi.validateToken(token);
        setPhotoInfo( photo );
        setLoading(false);
    }

    const handleBackButton = () => {
        navigate(-1);
    }
    return(
        <div>
            <h2>Pets </h2>
            <hr />
            <nav>
                <Link to="/private">chihuahua</Link>
                 <Link to="/private">husky</Link>
                <Link to="/private">labrador</Link>
                <Link to="/private">pug</Link>
            </nav>
            <hr />
            {loading && "Carregando..."}
            
            {photoInfo &&
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <p>{photoInfo.breed}</p>
                    <img src={photoInfo.url} alt={photoInfo.breed} />
                </>
            }
        </div>
    )
}