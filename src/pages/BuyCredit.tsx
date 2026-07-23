import { assets, plans } from "../assets/assets.ts";

const BuyCredit = () => {
    return (
        <div className="min-h-[80vh] text-center pt-14 mb-10">
            <button className="border border-gray-300 px-10 py-2 rounded-full mb-6">Planos de recarga</button>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">Escolha seu pacote de recarga</h1>
            <div className="flex flex-wrap justify-center gap-6 text-left">
                {plans.map((item, index) => {
                    return (
                        <div key={index} className="w-72 flex flex-col rounded-2xl bg-white p-8 shadow-lg hover:scale-105 transition-all duration-500">
                                <img src={assets.logo_icon} width={40} alt="" />

                                <p className="mt-4 font-semibold">{item.id}</p>

                                <p className="mt-2 flex-1 text-gray-600">
                                    {item.desc}
                                </p>

                                <p className="mt-6">
                                    <span className="font-bold">R$ {item.price}</span> / {item.credits} créditos
                                </p>

                                <button className="mt-6 rounded-3xl bg-gray-900 py-2 text-white cursor-pointer">
                                    Comprar
                                </button>
                            </div>
                    )
                })}
            </div>
    
        </div>
    )
}

export default BuyCredit;
