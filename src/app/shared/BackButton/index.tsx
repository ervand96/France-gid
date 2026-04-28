import { ArrowLeft } from "lucide-react";
import Button from "../Button";
import { BackButtonType } from "./type";

export default function BackButton({ text, styles, onClick, arrowStyles, textStyles }: BackButtonType) {
    return <Button
        onClick={onClick}
        styles={styles}
    >
        <ArrowLeft className={arrowStyles} />
        <span className={textStyles}>{text}</span>
    </Button>
}