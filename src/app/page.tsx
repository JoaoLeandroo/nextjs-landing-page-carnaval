import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-[1216px] w-full mx-auto mt-[100px] text-white">
        <div className="w-full h-12 flex justify-between items-center mb-[41.5px] px-2">
          <h2 className="font-bold text-3xl">Blocos Recomendados</h2>

          <div className="p-3 border border-solid border-gray-500 rounded-lg text-center">
            <button className="uppercase w-[86px] text-sm font-semibold text-white bg-[#6246EA] p-2 rounded-md">
              Lista
            </button>
            <button className="uppercase w-[86px] text-sm font-semibold text-[#6246EA]">
              Mapa
            </button>
          </div>
        </div>
        <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center place-items-center gap-8">
          <Card>
            <div>
              <Image
                src="/images/foto1.png"
                alt="Bloco de carnaval Python do Vovo"
                width={400}
                height={100}
              />
            </div>

            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">
                O Python do vovô não sobe mais
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>

              <span>Recife-BR</span>
            </div>
          </Card>

          <Card>
            <div>
              <Image
                src="/images/foto2.png"
                alt="Bloco de carnaval Todo Mundo Null"
                width={400}
                height={100}
              />
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">Todo Mundo Null</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>
              <span>São Paulo-BR</span>
            </div>
          </Card>

          <Card>
            <div>
              <Image
                src="/images/foto3.png"
                alt="Bloco de carnaval Hoje dou Exception"
                width={400}
                height={100}
              />
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">Hoje dou exception</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>
              <span>Recife-BR</span>
            </div>
          </Card>

          <Card>
            <div>
              <Image
                src="/images/foto4.png"
                alt="Bloco de Carnaval Manda Node"
                width={400}
                height={100}
              />
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">Manda Node</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>
              <span>Rio de Janeiro-BR</span>
            </div>
          </Card>

          <Card>
            <div>
              <Image
                src="/images/foto5.png"
                alt="Bloco de carnaval so no back end"
                width={400}
                height={100}
              />
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">Só no Back End</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>
              <span>Rio de Janeiro-BR</span>
            </div>
          </Card>

          <Card>
            <div>
              <Image
                src="/images/foto6.png"
                alt="Bloco de carnaval Esse anel não é de Ruby"
                width={400}
                height={100}
              />
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">
                Esse anel não é de Ruby
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>
              <span>Salvador-BR</span>
            </div>
          </Card>

          <Card>
            <div>
              <Image
                src="/images/foto7.png"
                alt="Bloco de carnaval Pimenta no C# dos outros é refresco"
                width={400}
                height={100}
              />
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">
                Pimenta no C# dos outros é refresco
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>
              <span>Recife-BR</span>
            </div>
          </Card>

          <Card>
            <div>
              <Image
                src="/images/foto8.png"
                alt="Bloco de carnaval EnCache Aqui"
                width={400}
                height={100}
              />
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">EnCache Aqui</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>
              <span>Salvador-BR</span>
            </div>
          </Card>

          <Card>
            <div>
              <Image
                src="/images/foto9.png"
                alt="Bloco de carnaval Não valho nada mas JAVA li"
                width={400}
                height={100}
              />
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <h3 className="font-bold text-xl mt-4">
                Não valho nada mas JAVA li
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet
                velit iusto dolorem!
              </p>
              <span>Recife-BR</span>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
