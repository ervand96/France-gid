import Image from "next/image"
import { CardType } from "./type"

export default function Card({ primaryText, primaryTextStyles, secondaryText, secondaryTextStyles, description, descriptionStyles, textBlockStyles, stylesOfCard, img, imageAltText, imgStyles, onClick, children }: CardType) {
    return <div className={`${stylesOfCard}`} onClick={onClick}>
        {img && <Image src={img} alt={`${imageAltText}`} className={`${imgStyles}`} />}
        <h3 className={`${primaryTextStyles}`}>{primaryText}</h3>
        <div className={`${textBlockStyles}`}>
            <p className={`${secondaryTextStyles}`}>{secondaryText}</p>
            <p className={`${descriptionStyles}`}>{description}</p>
        </div>
        {children && <div>
            {children}
        </div>}
    </div>
}