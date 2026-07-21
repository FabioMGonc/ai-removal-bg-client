import { assets } from "../assets/assets";

const Steps = () => {
    return (
        <div className="mx-4 lg:mx-44 py-20 xl:py-40">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
                Siga passo a passo para remover <br /> o fundo em segundos
            </h1>
            <div className="flex flex-wrap gap-4 mt-16 xl:mt-24">
                <div className="flex flex-1 min-w-75 items-start gap-4 bg-white shadow-md p-7 pb-10 rounded-2xl hover:scale-105 transition-all duration-500">
                    <img className="max-w-9" src={assets.upload_icon} alt="" />
                    <div>
                        <p className="text-xl font-medium">Faça Upload de sua imagem</p>
                        <p className="text-sm text-neutral-500 mt-1">Carregue sua imagem clicando no icone</p>
                    </div>
                </div>
                <div className="flex flex-1 min-w-75 items-start gap-4 bg-white shadow-md p-7 pb-10 rounded-2xl hover:scale-105 transition-all duration-500">
                    <img className="max-w-9" src={assets.remove_bg_icon} alt="" />
                    <div>
                        <p className="text-xl font-medium">Remova o fundo</p>
                        <p className="text-sm text-neutral-500 mt-1">Será removido o fundo da imagem</p>
                    </div>
                </div>
                <div className="flex flex-1 min-w-75 items-start gap-4 bg-white shadow-md p-7 pb-10 rounded-2xl hover:scale-105 transition-all duration-500">
                    <img className="max-w-9" src={assets.download_icon} alt="" />
                    <div>
                        <p className="text-xl font-medium">Faça Download de sua imagem</p>
                        <p className="text-sm text-neutral-500 mt-1">Baixe sua imagem rapidamente após a conversão</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Steps;
