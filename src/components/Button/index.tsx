type Props = {
    children: React.ReactNode;
    styles: string
    handleClick: () => void;
};

export default function Button({ children, styles, handleClick }: Props) {
    return <button className={`${styles}`} onClick={() => handleClick()}>{children}</button>
}
