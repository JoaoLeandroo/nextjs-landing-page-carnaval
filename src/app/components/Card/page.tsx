import Image from "next/image"

interface infosCardProps {
    href: string;
    alt: string;
    title: string;
    text: string;
    localization: string;
}

export const Card = ({ href, alt, title, text, localization }: infosCardProps) => {
    return(
        <section className="w-[384px] h-[323px] rounded-xl bg-[#FFFFFF] border border-solid border-gray-500">
            <div>
                <Image
                    className="rounded-t-xl"
                    src={`/images/${href}`}
                    width={384}
                    height={100}
                    alt={alt}
                />
            </div>

            <div className="pl-4 flex flex-col gap-4">
                <h3 className="font-bold text-xl mt-4">{title}</h3>
                <p className="">
                    {text}
                </p>

                <span>
                    {localization}
                </span>
            </div>
        </section>
    )
}