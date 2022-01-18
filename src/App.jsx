import UserInfo from "./02-Container Components/UserInfo";
import UserLoader from "./02-Container Components/UserLoader";

const App = () => {
  return (
    <>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="345">
        <UserInfo />
      </UserLoader>
    </>
  );
};

export default App;
