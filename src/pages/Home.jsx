import Header from "../components/Header"
import PhotoCard from "../components/PhotoCard"
//import "../css/Home.css"

function Home(){
    return(

        <div className="home-container">
            <Header />
            <PhotoCard />
            <br />
           {/* <Footer />*/}
        </div>

    )
}

export default Home