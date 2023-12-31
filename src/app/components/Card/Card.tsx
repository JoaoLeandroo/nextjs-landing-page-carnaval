interface CardsProps {
    children: React.ReactNode;
}
const Card: React.FC<CardsProps> = ({children}) => {
    return(
        <section className="w-[384px] h-[323px] rounded-xl bg-[#FFFFFF] border border-solid border-gray-500">
            {children}
        </section>
    )
}

export default Card;