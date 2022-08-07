import FriendList from './FriendList';
import friends from './data/friends.json';
import Profile from './Profile';
import user from './data/user.json';
import Statistics from './Statistics';
import data from './data/data.json';
import TransactionHistory from './TransactionHistory';
import transactions from './data/transactions';

export const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
