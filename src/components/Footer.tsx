import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <footer className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
           <img width={150} src={assets.logo} alt="" />
           <p className="flex-1 border border-gray-100 pl-4 text-sm text-gray-600 max-sm:hidden">Criado por <a target="blank" href="https://www.linkedin.com/in/fabio-m-gonc/">Fabio Gonçalves</a> | Todos direitos reservados</p>

           <div className="flex gap-1">
            <img width={40} src={assets.facebook_icon} alt="" />
            <img width={40} src={assets.twitter_icon} alt="" />
            <img width={40} src={assets.google_plus_icon} alt="" />
           </div>
        </footer>
    )
}

export default Footer;
