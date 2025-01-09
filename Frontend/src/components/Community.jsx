import React from "react";
import "../styles/Community.css";

const Community = () => {
  const communities = [
    {
      name: "Wellness and Wellbeing",
      members: "1.2K",
      posts: "1.3K",
      description: "A community for all things wellness, both mental and physical. Together we can build a healthier world.",
      image: "https://via.placeholder.com/150", // Replace with your actual image URL
    },
    {
      name: "The Productivity Club",
      members: "11.2K",
      posts: "3.3K",
      description: "Join the club and get more done. Share your tips and tricks, ask questions, and stay accountable.",
      image: "https://via.placeholder.com/150", // Replace with your actual image URL
    },
    {
      name: "Healthy Habits",
      members: "2.3K",
      posts: "2.3K",
      description: "Develop and share your healthy habits with the community. From drinking water to meditation, what's your daily routine?",
      image: "https://via.placeholder.com/150", // Replace with your actual image URL
    },
  ];

  return (
    <div className="community">
      <h1>Community</h1>
      <div className="tabs">
        <span className="active-tab">All</span>
        <span>Following</span>
        <span>Trending</span>
        <span>New</span>
      </div>

      <div className="community-list">
        {communities.map((community, index) => (
          <div className="community-item" key={index}>
            <img src={community.image} alt={community.name} className="community-image" />
            <div className="community-details">
              <h2>{community.name}</h2>
              <p className="community-info">
                {community.members} members • {community.posts} posts
              </p>
              <p className="community-description">{community.description}</p>
              <button className="join-button">Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
