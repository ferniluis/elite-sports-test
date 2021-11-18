import "./Card.css";

function Card({ character: { name, gender, species, status, image, origin, created }, dark }) {
    return <div>
        <div className={dark ? "card-container-dark" : "card-container"}>
            <div className="img-wrapper">
                <img src={image} alt="Character"/>
            </div>
            <div className="info-wrapper">
                <div className="section">
                    <h2>{name}</h2>
                    <span className="status">
                        {status} - {species}
                    </span>
                    <p>Gender: {gender}</p>
                    <p>Create Date: {created.substring(0,10)}</p>
                </div>
                <div className="section">
                    <span>Last known location:</span>
                    <span>{origin.name}</span>
                </div>
            </div>
        </div>
    </div>;
}

export default Card;