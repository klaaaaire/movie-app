import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageSearch from '../pages/PageSearch';
import ScrollToTop from '../components/ScrollToTop';
import BackToTopButton from '../components/BackToTop';

function AppRouter() {
  return (
    <Router>
    <ScrollToTop />
      <div className="wrapper">
        <Header />
          <main>
            <Switch>
              <Route path="/" exact><PageHome sort='popular' /></Route>
              <Route path="/sort/popular"><PageHome sort='popular' /></Route>
              <Route path="/sort/top-rated"><PageHome sort='top_rated' /></Route>
              <Route path="/sort/now-playing"><PageHome sort='now_playing' /></Route>
              <Route path="/sort/upcoming"><PageHome sort='upcoming' /></Route>
              <Route path="/about"><PageAbout /></Route>
              <Route path="/favorites"><PageFavorites /></Route>
              <Route path="/search"><PageSearch /></Route>
              <Route path="/movie/:id" children="/movie/:id/credits"><PageSingleMovie /></Route>
            </Switch>
          </main>
          <BackToTopButton />
          <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
