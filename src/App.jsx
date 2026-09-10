import Profile from './components/Profile';
import SocialGrid from './components/SocialGrid';

function App() {
  return (
    <>
      <div className="ambient-glow" />
      <div className="app-container">
        <Profile />
        <SocialGrid />
        
        <footer className="footer">
          Made by Gio <br />
          &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}

export default App;
