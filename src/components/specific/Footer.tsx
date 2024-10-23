import SpotifyLogo from '../../assets/images/Black_Spotify_logo_with_text.svg';
import InstagramLogo from '../../assets/images/icons8-instagram.svg';
import TwitterLogo from '../../assets/images/icons8-twitter.svg';
import FacebookLogo from '../../assets/images/icons8-facebook.svg';

function Footer() {
  const logoSocial =
    'w-16 hover:outline hover:outline-2 hover:outline-blue-500 ';
  const containerLInksMobile =
    'flex flex-col gap-4 xl:text-left xl:text-2xl xl:mt-8';

  const aLinks = 'sm:text-3xl';

  return (
    <footer className="container mx-auto max-w-screen-2xl flex flex-col justify-center text-center items-center gap-14 py-8 px-4 xl:flex-row xl:px-8 xl:py-24 xl:h-auto xl:items-start">
      <img src={SpotifyLogo} className="w-40 xl:mr-8 " alt="" />

      <aside className="flex gap-6 p-4 xl:order-last xl:mt-12">
        <a href="" className={logoSocial}>
          <img src={InstagramLogo} alt="" />
        </a>
        <a href="" className={logoSocial}>
          <img src={TwitterLogo} alt="" />
        </a>
        <a href="" className={logoSocial}>
          <img src={FacebookLogo} alt="" />
        </a>
      </aside>

      <aside className={`${containerLInksMobile} ${aLinks}`}>
        <h2 className="font-bold">Empresa</h2>
        <div className="flex flex-wrap gap-8 xl:text-left xl:gap-y-4 xl:justify-start xl:p-0 xl:flex-col xl:border-1 xl:border-black">
          <a href="">Sobre</a>
          <a href="">Empregos</a>
          <a href="">For the record</a>
        </div>
      </aside>

      <aside className={`${containerLInksMobile} ${aLinks}`}>
        <h2 className="font-bold">Comunidades</h2>
        <div className="flex flex-wrap text-center justify-center px-4 gap-x-8 gap-y-4xl:text-left xl:gap-y-4 xl:justify-start xl:p-0 xl:flex-col">
          <a href="">Para Artista</a>
          <a href="">Desenvolvedores</a>
          <a href="">Pubilicidade</a>
          <a href="">Investidores</a>
          <a href="">Fornecedores</a>
        </div>
      </aside>

      <aside className={`${containerLInksMobile} ${aLinks} xl:mr-11`}>
        <h2 className="font-bold">Links Úteis</h2>
        <div className="flex justify-center flex-wrap gap-8 xl:text-left xl:gap-y-4 xl:justify-start xl:p-0 xl:flex-col">
          <a href="">Ajuda</a>
          <a href="">Player da Web</a>
          <a href="">Aplicativo móvel grátis</a>
        </div>
      </aside>
    </footer>
  );
}
export default Footer;
