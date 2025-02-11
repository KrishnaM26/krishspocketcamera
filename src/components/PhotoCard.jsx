import "../css/PhotoCard.css"
import photos  from "../photos.json"


function PhotoCard(){
    

    return(
    <div>
        {
        photos && photos.map(photo => (
        <div className="photo-container" key={photo.id}>
            <img src={photo.url} alt={photo.name}></img>
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