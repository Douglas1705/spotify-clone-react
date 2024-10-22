import SpotifyLogo from '../../assets/images/Black_Spotify_logo_with_text.svg';
import MenuButton from '../common/MenuButton';

const ulMobile ='hidden absolute text-center mt-2 left-0 flex flex-col gap-2 w-auto py-4 w-[40%] bg-white rounded-lg ';

const ulTablet = 'sm:flex sm:flex-row sm:gap-4 sm:relative sm:left-0 sm:justify-center sm:mt-0 sm:h-10 sm:w-auto'

const liMobile = 'hover:border-l-4 hover:border-l-blue-500 p-1'

const liTablet = 'sm:hover:border-0 sm:px-2 sm:items-center sm:flex sm:jutify-center sm:px-4'

const aTablet = 'sm:hover:border-b-4 sm:hover:border-blue-500'

const barra = 'sm:border-l-2 sm:border-l-black sm:mb-2 sm:py-3 '

function Header() {
  return (
    <header className='container mx-auto max-w-screen-xl flex justify-between items-center border border-zinc-900 px-4 py-2 fixed bg-white box-border left-1/2 e transform -translate-x-1/2'>
      <img src={SpotifyLogo} className='w-40' alt="" />
      <nav>
        <MenuButton />
        <ul id='menu' className={`${ulMobile} ${ulTablet}`}>
          <li className={`${liMobile} ${liTablet}`}>
            <a href="#" className={aTablet}>Premium</a>
          </li>
          <li className={`${liMobile} ${liTablet}`}>
            <a href="#" className={aTablet}>Ajuda</a>
          </li>
          <li className={`${liMobile} ${liTablet}`}>
            <a href="#" className={aTablet}>Baixar</a>
          </li>
          <li className={`${liTablet}`}>
            <span className={`${barra} `}></span>
          </li>
          <li className={`${liMobile} ${liTablet}`}>
            <a href="#" className={aTablet}>Inscrever-se</a>
          </li>
          <li className={`${liMobile} ${liTablet}`}>
            <a href="#" className={aTablet}>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
