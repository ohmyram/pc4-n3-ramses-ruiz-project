import './UserCard.css';

export const UserCard = ({ name, username, email, image }) => {
    return (
        <div className='user-card-container'>
            <figure className='figure-card'>
                <img className='image-class'
                    src={image}
                    alt={name}
                />
            </figure>
            <ul className='user-card'>
                <li className='name'>{name}</li>
                <li className='username'>@{username}</li>
                <li className='email'>{email}</li>
            </ul>
        </div>
    );
};