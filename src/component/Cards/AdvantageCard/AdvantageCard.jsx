import './ui/AdvantageCard.scss'

export default function AdvantageCard({image, name, description, key}) {
    return (
        <div key={key} className="AdvantageCard">
            <img src={image} alt={name} />
            <p className="AdvantageCard_title">
                {name}
            </p>
            <p className="AdvantageCard_description">
                {description}
            </p>
        </div>
    )
}