import StarLogo from "../images/star.png";


export default function Card({ info }) {
    let badgeText
    if (info.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (info.location === "Online") { badgeText = "ONLINE" }

    return (
        <div className="card-container">
            {badgeText && <div className="sold-out-box">{badgeText}</div>}
            <img className="katie-pic" src={info.coverImg} alt="katie"></img>
            <div className="card-info-container">
                <div className="ratings-container">
                    <img className="star" src={StarLogo} alt="star"></img>
                    <p className="star-info"><span className="rating">{info.stats.rating}</span><span className="rating-two">({info.stats.reviewCount}) </span><span className="elipse">*</span><span className="usa">{info.location}</span></p></div>
                <p className="card-title">{info.title}</p>
                <p className="card-info"><span className="price">From ${info.price} /</span>person</p>
            </div>
        </div>
    )
}