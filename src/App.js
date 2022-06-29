import './styles/categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'hats'
    },
    {
      id: 1,
      title: 'jackets'
    },
    {
      id: 1,
      title: 'shoes'
    },
    {
      id: 1,
      title: 'womens'
    },
    {
      id: 1,
      title: 'mens'
    }
  ];

  return (
    <div className='categories-container'>
    {categories.map( ({title})=> {
      return (
        <div className='category-container'>
          <div className='background-img'></div>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )
    })}
    </div>
  );
}

export default App;
