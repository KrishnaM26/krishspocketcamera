import Header from "../components/Header"
import PhotoCard from "../components/PhotoCard"
import Footer from "../components/Footer"
//import "../css/Home.css"

function Home(){
    return(

        <div className="home-container">
            <Header />
            <PhotoCard />
            <Footer />
        </div>

    )
}

export default Home