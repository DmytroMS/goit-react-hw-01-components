import Profile from "./components/Profile/Profile"
import Stats from "./components/Statistics/Statistics"
import FriendList from "./components/FriendList/FriendList"
import Transctions from "./components/TransactionHistory/TransactionHistory"

import user from "./data/user.json"
import statisticalData from "./data/statistical-data.json"
import friends from "./data/friends.json"
import transactionData from "./data/transactions.json"




export default function App() {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />


            <Stats
                title="UPLOAD STATS"
                stats={statisticalData}
            />

            <FriendList friends={friends}/>
            
            <Transctions items={transactionData}/>

        </div>
    )
}