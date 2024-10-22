import spotifyHeader from '../../assets/images/spotify-header-lg.webp'; // Importe a imagem diretamente

const Section: React.FC = () => {
  const estiloBG: React.CSSProperties = {
    backgroundImage: `url(${spotifyHeader})`,
    backgroundSize: 'cover', // Ajusta a imagem para cobrir o contêiner
    backgroundRepeat: 'no-repeat', // Evita que a imagem se repita
    backgroundPosition: 'center', // Centraliza a imagem    
  };

  return (
    <section
      className='container mx-auto max-w-screen-xl min-h-screen box-border'  >

      <div className='max-w-screen-xl min-h-screen' style={estiloBG}>dadada</div>
    </section>
  );
};

export default Section;
