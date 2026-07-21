import { assets } from "../assets/assets";


const Header = () => {
    return (
        <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 ">
            {/* Lado Esquerdo */}
            <div >
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
                    Remova o <br className="max-md:hidden" /> <span className="bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent" >fundo</span> de suas <br className="max-md:hidden" />fotos gratuitamente
                </h1>

                <p className="my-6 text-[15px] text-gray-500">Simples, rápido e sem complicação, com remoção <br className="max-sm:hidden" /> automática e instantânea para qualquer tipo de imagem.</p>
                
                <div>
                    <input type="file" name="upload" id="upload1" hidden />
                    <label className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-linear-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700" htmlFor="upload1">
                        <img width={20} src={assets.upload_btn_icon} alt="" />
                        <p className="text-white text-sm">Envie sua imagem</p>
                    </label>
                </div>
            </div>

            {/* Lado Direito */}
            <div className="w-full max-w-md">
                <img src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header;
