import "../css/PhotoCard.css"
import photos  from "../photos"


function PhotoCard(){
    

    return(
    <div>
        {photos.map((photo) => (
        <div className="photo-container" key={photo.id}>
            <img src={process.env.PUBLIC_URL + photo.url} alt={photo.name}></img>
            <div className="photo-label-container">
                <p className="photo-name"><strong>{photo.name}</strong></p>
                <p className="photo-year"><em>{photo.year}</em></p>
            </div>
        </div>
        ))};

    </div>
    )
}

export default PhotoCard