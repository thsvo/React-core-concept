export default function Friend({friend}){
    const {name, username, email} = friend;
return (
    <div>
        <h2>Name: {name}</h2>
        <p>Age: {username}</p>
        <p>Email: {email}</p>
    </div>

)
}