import Card from '../card/Card';
import './Gallery.css';

const places = [
  {
    image: '/src/assets/img/dubai.png',
    title: 'Fontes De Dubai',
    label: 'Emirados Árabes',
    rating: 4.8,
    description: 'Fonte Enorme Com Apresentação De Jatos D\'água De Até 140 M E Espetáculos De Música E Luzes. Localizada no Burj Khalifa Lake, ao lado do maior edifício do mundo, a Fonte de Dubai é uma das principais atrações turísticas da cidade. Os shows de água são sincronizados com música clássica e contemporânea, oferecendo uma experiência inesquecível.',
  },
  {
    image: '/src/assets/img/paris.png',
    title: 'Torre Eiffel',
    label: 'França',
    rating: 4.7,
    description: 'Famosa Torre De Ferro Forjado De Gustave Eiffel De 1889, Com Escadas E Elevadores Para Os Observatórios. A Torre Eiffel é um dos monumentos mais icônicos do mundo, oferecendo vistas deslumbrantes da cidade de Paris. À noite, a torre se ilumina com milhares de luzes, criando uma atmosfera mágica e romântica.',
  },
  {
    image: '/src/assets/img/sicilia.png',
    title: 'Sicília, Itália',
    label: 'Itália',
    rating: 4.5,
    description: 'Sicília, A Maior Ilha Do Mediterrâneo, Fica Perto Do "Dedo" Da "Bota" Da Itália. Sua História Se Reflete Em Lugares Como O Vale Dos Templos, As Ruínas. A ilha é famosa por suas paisagens deslumbrantes, gastronomia rica e patrimônio histórico. A cidade de Palermo, o vulcão Etna e as praias de areia branca são apenas algumas das muitas atrações que a Sicília tem a oferecer.',
  },
  {
    image: '/src/assets/img/maralhao.png',
    title: 'Parque Nacional Dos Lençóis Maranhenses',
    label: 'Brasil',
    rating: 4.9,
    description: 'Extensa E Protegida Área Costeira De Dunas De Areia E Pântano Salgado Com Muitos Lagos E Lagoas. Este parque único no mundo é conhecido por suas vastas dunas de areia branca intercaladas por lagoas de água doce cristalina, que se formam durante a estação chuvosa. É um destino imperdível para os amantes da natureza e da aventura.',
  },
];

function Gallery() {
  return (
    <section className="Gallery">
      <h2 className="Gallery-title">LUGARES MAIS PROCURADOS</h2>
      <div className="Gallery-grid">
        {places.map((place, index) => (
          <Card
            key={index}
            image={place.image}
            title={place.title}
            label={place.label}
            rating={place.rating}
            description={place.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
