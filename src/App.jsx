
import "./App.css"
import Itemcard from "./component/item-card/itemcard";
import Navbar from "./component/nav/navbar"
import Bestseller from "./pages/bestseller/bestseller";
import Heropage from "./pages/hero-page/heropage";
import Recommend from "./pages/recommended/recommend";
import King from "./pages/king/king";
import Load from "./pages/load/load";
import Team from "./pages/team/team" 
import Blog from "./pages/blog/blog";
import Detail from "./pages/detail/detail";
import Footer from "./pages/footer/footer";
import Vng from "./pages/vng/vng";
// import VideoIntro from './component/video/VideoIntro';


const App =() => {
//   const [count, setCount] = useState(0)

  return (
    <>
    {/* <VideoIntro/> */}
     <Navbar/>
     <Heropage/>
     <Itemcard/>
     <Recommend/>
     <Bestseller/>
     <King/>
     <Load/>
     <Team/>
     <Blog/>
     <Detail/>
     <Footer/>
     <Vng/>
    </>
  );
};

export default App;
