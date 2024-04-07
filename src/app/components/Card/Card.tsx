interface CardsProps {
    children: React.ReactNode;
}
const Card: React.FC<CardsProps> = ({children}) => {
    return(
        <section className="w-[384px] h-[323px] rounded-lg bg-purple-700">
            {children}
        </section>
    )
}

export default Card;