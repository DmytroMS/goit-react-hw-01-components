import f from "./FriendList.module.css"

function FriendListItem({avatar, name, isOnline}) {
    return (
        <>
            <span className={f.status}>{isOnline ? <div style={{ height: "20px", width: "20px", backgroundColor: "green", borderRadius: "50%" }}></div>
         : <div style={{height: "20px", width: "20px", backgroundColor: "red", borderRadius: "50%"}}></div>   }</span>
         <img className={f.avatar} src={avatar} alt="" width="48" />
         <p className={f.name}>{name}</p>
        </>
    )
}

export default FriendListItem