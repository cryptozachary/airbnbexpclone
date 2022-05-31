import GridLogo from "../images/grid.jpg"

export default function Hero() {

    return (
        <div className="hero-container">
            <img src={GridLogo} className="hero-pic" alt="grid"></img>
            <div className="hero-container2">
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-paragraph">Join unique interactive activites led by one-of-a-kind hosts all without leaving home.</p>
            </div>
        </div>
    )
}