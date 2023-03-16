import NavBar from './Components/NavBar';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import MainContainer from './Components/MainContainer'
import { Provider } from 'react-redux';
import store from './utils/store';
import WatchPage from './Components/WatchPage';
import SearchedVideos from './Components/SearchedVideos';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
    element: <MainContainer/>,
      },
      {
        path: "watch",
        element: <WatchPage/>,
      },
      {
        path:"results",
        element: <SearchedVideos/>
      }
    ]
  }
  
])


function App() {
  return (
    <Provider store = {store}>
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
