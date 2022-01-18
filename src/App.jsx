import CurrentUserLoader from "./02-Container Components/CurrentUserLoader";
import UserInfo from "./02-Container Components/UserInfo";

const App = () => {
  return (
     <CurrentUserLoader>
       <UserInfo />
     </CurrentUserLoader>
  );
};

export default App;