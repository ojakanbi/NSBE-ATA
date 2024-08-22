export default function UserDetails({ name, role }) {
    return (
        <div>
            <h3>Welcome {name}</h3>
            {role && <p>Your role: {role}</p>}
        </div>
    );
}
