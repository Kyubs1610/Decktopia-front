import "./profile.css"
import React, { useState } from "react";

function ProfilePage() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [favoriteCards, setFavoriteCards] = useState([]);

  const handleAvatarChange = (event) => {
    const newAvatar = event.target.files[0];
    setAvatar(newAvatar);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFavoriteCardsChange = (event) => {
    const newFavoriteCards = event.target.value.split(",");
    setFavoriteCards(newFavoriteCards);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <label htmlFor="avatar-input">Upload Profile Picture</label>
        <input
          id="avatar-input"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        {avatar && <img src={URL.createObjectURL(avatar)} alt="Avatar" />}
      </div>
      <div>
        <label htmlFor="name-input">Name/Pseudo</label>
        <input id="name-input" type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="favorite-cards-input">Top 3 Favorite Cards</label>
        <input
          id="favorite-cards-input"
          type="text"
          value={favoriteCards.join(",")}
          onChange={handleFavoriteCardsChange}
        />
      </div>
      <div>
        <h2>Favorite Cards</h2>
        <ul>
          {favoriteCards.map((card) => (
            <li key={card}>{card}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
