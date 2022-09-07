import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { getMedia, IMedia } from "../../services/tmdb"
import ModalComponent from "../Modal"
import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { TMediaType } from "../../services/tmdb/utils"
import { IGetMediaResponse } from "../../services/tmdb/getMedia"
import { toast } from "react-toastify"



const ModalDashboard = () => {

    const navigate = useNavigate()
    const {setIdMovie} = useAuth()
    const { id, mediaType } = useParams()
    const [movie, setMovie] = useState<IGetMediaResponse>({} as IGetMediaResponse)
    const { error, setAssistidos, setAssistir, setFavoritos, assistidos, assistir, favoritos } = useAuth() 

    useEffect(() => {
        async function teste() {
            const data = await getMedia(mediaType as TMediaType, id as string)
            setMovie(data)
        }
        teste()
    }, [])

    const addAssistidos= (e:IGetMediaResponse) => {
        if(assistidos.find(elem => elem.id === e.id)) {
            toast.error('Ofilme já existe na sua lista!')
        } else {
            setAssistidos([...assistidos, movie])
            toast.success('Filme adicionado na lista de Assistidos!')
        }
    }
    const addAssistir= (e:IGetMediaResponse) => {
        if(assistir.find(elem => elem.id === e.id)) {
            toast.error('Ofilme já existe na sua lista!')
        } else {
            setAssistir([...assistir, movie])
            toast.success('Filme adicionado na lista de Assistidos!')
        }
    }
    const addFavoritos= (e:IGetMediaResponse) => {
        if(favoritos.find(elem => elem.id === e.id)) {
            toast.error('Ofilme já existe na sua lista!')
        } else {
            setFavoritos([...favoritos, movie])
            toast.success('Filme adicionado na lista de Assistidos!')
        }
    }

    return (
        <ModalComponent navigate='/dashboard' title={movie.title}>
            <div className="contentModalChildren">
            <img src={movie.poster_path} alt={movie.title}  className='imgModal' onError={error} />
            <div className="infoMovie">
                <p>Data de lançamento: {movie.release_date}</p>
                <p>Nota: {movie.vote_average?.toFixed(1)}</p>
                <p className="descricaoModal">Descrição: {movie.overview}</p>
            </div>
            </div>
            <div className="buttonsModal">
                <button onClick={() => addAssistidos(movie)}><BsCheckLg/>Assistidos</button>
                <button onClick={() => addAssistir(movie)}><AiOutlineEye />Assistir</button>
                <button onClick={() => addFavoritos(movie)}><MdFavoriteBorder/>Favoritos</button>
            <button onClick={() => {
                setIdMovie(id as string)
                navigate('/movie')
            }}>Saber Mais...</button>
            </div>
        </ModalComponent>
    )
}

export default ModalDashboard