import Post from './components/post/Post';
import StudentCard from './components/studentCard/StudentCard';
import ProductCard from './components/productCard/ProductCard';
import TemperatureConverter from './components/temperature/TemperatureConverter';


function App() {
  return (
    <>
      <header>
        <h1>REACT - Props e condicionais</h1>
      </header>
      <section>
        <StudentCard name="Zirlane Fiuza" grade={9} average={8.5} />
        <StudentCard name="Gustavo Fiuza" grade={5} average={4.0} />
      </section>
      <section>
        <ProductCard
          name="Ps5 Slim "
          unitPrice={4399}
          discount={14}
        />
        <ProductCard name="Controle" unitPrice={150} discount={0} />
      </section>
      <section>
        <Post />
      </section>
      <section>
      <TemperatureConverter />
      </section>
    </>
  );
}

export default App;
