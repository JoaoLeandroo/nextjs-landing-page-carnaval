import Image from "next/image"
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Header = () => {
    return(
        <header className="max-w-[1920px] w-full h-[532px] m-auto bg-[#F8F8FF] relative flex items-center justify-center">
            <div className="absolute w-full h-full">
                <Image
                    className="absolute top-0 left-0"
                    src={'/images/ilustra-01.svg'}
                    width={407}
                    height={500}
                    alt="Imagem 1"
                />
                <Image
                    className="absolute bottom-0 right-0"
                    src={'images/ilustra-02.svg'}
                    width={414}
                    height={500}
                    alt="Imagem 2"
                />
            </div>

            <div className="relative w-[993px] h-[332px]">
                <div className="text-center">
                    <p className="text-[#E45858] mb-[18px] font-medium">Find Your Block</p>
                    <h1 className="text-[#121214] font-bold text-4xl mb-10">
                        Encontre os <span className="text-[#6246EA]">melhores blocos</span>  
                        <br />
                        de carnaval de 2023
                    </h1>
                </div>

                <div className="w-full h-32 bg-[#FFFFFE] rounded-[10px] border border-solid border-gray-500 flex items-center justify-center gap-6">
                    <div className="relative">
                        <div className="absolute top-3 left-3">
                            <FaSearch size={20} color={'red'}/>
                        </div>
                        <input type="text" placeholder="Pesquise por nome" className="bg-[#F4F4FF] w-[348px] h-12 rounded-md placeholder:text-[#7C7C8A] placeholder:text-base pl-12 outline-none focus:border border-solid border-gray-500"/>
                    </div>

                    <div className="relative">
                        <div className="absolute top-3 left-3">
                            <FaLocationDot size={20} color={'red'}/>
                        </div>
                            <select placeholder="Selecione uma cidade" className="bg-[#F4F4FF] w-[348px] h-12 rounded-md placeholder:text-[#7C7C8A] placeholder:text-base pl-12 outline-none focus:border border-solid border-gray-500">
                                <option value="1">Recife - PE</option>
                                <option value="2">Salvador - BA</option>
                                <option value="3">Rio De Janeiro - RJ</option>
                                <option value="4">Curitiba - PA</option>
                            </select>
                    </div>
                    <button className="uppercase bg-[#6246EA] w-[169px] h-12 rounded-md text-white font-bold">Buscar Agora</button>
                </div>

            </div>

        </header>
    )
}