import { Header } from "./components/Header/page"
import { Card } from "./components/Card/page"

export default function Home() {
  return (
    <>
      <Header/>
      <main className="max-w-[1216px] w-full m-auto mb-28 mt-[100px]">
        <div className="w-full h-12 flex justify-between items-center mb-[41.5px]">
          <h2 className="font-bold text-3xl">Blocos Recomendados</h2>

          <div className="p-2 border border-solid border-gray-500 rounded-lg">
            <button className="uppercase w-[86px] text-sm font-semibold text-white bg-[#6246EA] p-2 rounded-md">Lista</button>
            <button className="uppercase w-[86px] text-sm font-semibold text-[#6246EA]">Mapa</button>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-8">
          <Card
            href="foto1.png"
            alt="Bloco de carnaval Python do Vovo"
            title="O Python do vovô não sobe mais"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="Recife-BR"
          />
          
          <Card
            href="foto2.png"
            alt="Bloco de carnaval Todo Mundo Null"
            title="Todo Mundo Null"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="São Paulo-BR"
          />
          
          <Card
            href="foto3.png"
            alt="Bloco de carnaval Hoje dou Exception"
            title="Hoje dou exception"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="Recife-BR"
          />
          
          <Card
            href="foto4.png"
            alt="Bloco de Carnaval Manda Node"
            title="Manda Node"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="Rio de Janeiro-BR"
          />
          
          <Card
            href="foto5.png"
            alt="Bloco de carnaval so no back end"
            title="Só no Back End"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="São Paulo-BR"
          />
          
          <Card
            href="foto6.png"
            alt="Bloco de carnaval Esse anel não é de Ruby"
            title="Esse anel não é de Ruby"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="Salvador-BR"
          />
          
          <Card
            href="foto7.png"
            alt="Bloco de carnaval Pimenta no C# dos outros é refresco"
            title="Pimenta no C# dos outros é refresco"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="Recife-BR"
          />

          <Card
            href="foto8.png"
            alt="Bloco de carnaval EnCache Aqui"
            title="EnCache Aqui"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="Salvador-BR"
          />

          <Card
            href="foto9.png"
            alt="Bloco de carnaval Não valho nada mas JAVA li"
            title="Não valho nada mas JAVA li"
            text="Lorem ipsum dolor sit amet consectetur elit. Cumque eveniet velit iusto dolorem!"
            localization="Recife-BR"
          />
        </div>

        
      </main>
    </>
  )
}
