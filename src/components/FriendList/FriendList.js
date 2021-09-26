import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import f from "./FriendList.module.css"

export default function FriendList({ friends }) {
   return (
       <ul className={f.friendlist}>
           {friends.map(friend => (
            <li className={f.item} key={friend.id}>
                   <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            </li>))}       
        </ul>
   )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}
