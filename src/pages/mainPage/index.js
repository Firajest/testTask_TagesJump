import SortingOpts from '../../components/sorting';
import Items from '../../components/items/items.js';

function MainPage() {

  return (
    <div className="mainPage">
      <div className="mainPage__path"><a href='/'>Главная</a> / <a href='/'>Системы хранения</a> / <a href='/'>Комплекты стелажных систем</a></div>
      <h1 className="mainPage__title">Комплекты стелажных систем</h1>

      <div className="mainPage__sorting-lists"><SortingOpts /></div>
      <div className="mainPage__items"><Items /></div>
    </div>
  );
}

export default MainPage;
