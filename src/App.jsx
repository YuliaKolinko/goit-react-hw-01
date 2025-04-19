import userData from "./userData.json";
import "./App.css";
import friends from "./friends.json";
import Profile from "./components/Profile/Profile/Profile.jsx";
import FriendList from "./components/Profile/FriendList/FriendList.jsx";
import TransactionHistory from "./components/Profile/TransactionHistory/TransactionHistory.jsx";
import transactions from "./transactions.json";
// import clsx from "clsx";

function App() {
  return (
    <>
      <div className="spacing">
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          followers={userData.stats.followers}
          views={userData.stats.views}
          likes={userData.stats.likes}
        />
      </div>
      <div className="spacing">
        <FriendList friends={friends} />{" "}
      </div>
      <div className="spacing">
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}
export default App;
