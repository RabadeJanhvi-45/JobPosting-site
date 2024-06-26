import Home from "./components/pages/home";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CreatePost from "./components/pages/CreatePost";
import { routePath } from "./Routes/routes";
import AllPosts from "./components/pages/AllPosts";
function App() {

  return (
   <Router>
    <Routes>
      <Route path={routePath.home} element={<Home/>}/>
      <Route path={routePath.create} element={<CreatePost/>}/>
      <Route path={routePath.posts}element={<AllPosts/>}/>
    </Routes>
   </Router>
  );
}

export default App;
