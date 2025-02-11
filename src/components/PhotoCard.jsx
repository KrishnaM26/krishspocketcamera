import "../css/PhotoCard.css"
import data from "../photos.json"

function PhotoCard(){
    

    return(
    <div>
        {data.map((photo) => (
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