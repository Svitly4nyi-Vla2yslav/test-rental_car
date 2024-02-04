import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import Favorites from '../../components/Favorites/Favorites';
import Footer from '../../components/Footer/Footer';

const FavoritesPage: React.FC = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div style={{marginTop: "100px"}}>
      {favorites.length === 0 ? (
        <div>List of your favorite cars</div>
      ) : (
        <Favorites favorites={favorites} />
      )}
      <Footer/>
    </div>
  );
};

export default FavoritesPage;
