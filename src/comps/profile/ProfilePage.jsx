import React from 'react';
import './ProfilePage.css';

export function ProfilePage() {
  // Mock data - in a real application, this would come from an API or state
  const userData = {
    name: "Ola Nordmann",
    company: "Nordmann Bygg AS",
    reliability: 4.8,
    profileImage: "https://ui-avatars.com/api/?name=Ola+Nordmann&background=05885c&color=fff&size=128",
    dailyChallenge: {
      title: "Fullfør et baderom renoveringsprosjekt",
      description: "Fullfør en baderom renovering innen 7 dager",
      bonusXP: 50
    },
    availableProjects: [
      { id: 1, title: "Kontor Renovering", location: "Oslo", budget: "50,000 kr" },
      { id: 2, title: "Hus Utvidelse", location: "Bergen", budget: "120,000 kr" },
      { id: 3, title: "Terrasse Bygging", location: "Trondheim", budget: "35,000 kr" }
    ],
    level: {
      current: 3,
      pointsToNextLevel: 150,
      totalPoints: 350
    },
    statistics: {
      totalIncome: "450,000 kr",
      projectsCompleted: 24,
      averageRating: 4.7
    },
    latestReviews: [
      { id: 1, author: "Maria S.", rating: 5, comment: "Utmerket arbeid, veldig profesjonell!" },
      { id: 2, author: "Anders L.", rating: 4, comment: "Bra kvalitet på arbeidet, ferdig til avtalt tid." }
    ],
    achievements: [
      { id: 1, title: "Top Rated Professional", description: "Maintained 4.5+ rating for 6 months" },
      { id: 2, title: "Quick Responder", description: "Responds to inquiries within 2 hours" }
    ]
  };

  // Progress bar calculation for level
  const progressPercentage = (userData.level.totalPoints % 500) / 5;

  return (
    <div className="profile-page">
      <h1>Min Profil</h1>

      <div className="profile-cards-container">
        {/* Left Column: User Info, Level, Statistics, Achievements */}
        <div className="left-column">
          {/* Card 1: User Info with Profile Picture */}
          <div className="profile-card user-info-card">
            <div className="card-content">
              <div className="profile-image-container">
                <img src={userData.profileImage} alt="Profile" className="profile-image" />
              </div>
              <div className="user-info">
                <p><strong>{userData.name}</strong></p>
                <p>{userData.company}</p>
                <p>Pålitelighet: {userData.reliability} / 5</p>
              </div>
            </div>
          </div>

          {/* Card 2: User Level */}
          <div className="profile-card user-level-card">
            <h2>Brukernivå</h2>
            <div className="card-content">
              <p><strong>Nivå {userData.level.current}</strong></p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
              </div>
              <p>{userData.level.pointsToNextLevel} poeng til neste nivå</p>
            </div>
          </div>

          {/* Card 3: Statistics */}
          <div className="profile-card statistics-card">
            <h2>Statistikk</h2>
            <div className="card-content">
              <p><strong>{userData.statistics.totalIncome}</strong> total inntekt</p>
              <p><strong>{userData.statistics.projectsCompleted}</strong> fullførte prosjekter</p>
              <p><strong>{userData.statistics.averageRating}/5</strong> gjennomsnitt</p>
            </div>
          </div>

          {/* Card 4: Achievements */}
          <div className="profile-card achievements-card">
            <h2>Utmerkelser</h2>
            <div className="card-content">
              {userData.achievements.map(achievement => (
                <div key={achievement.id} className="achievement">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Featured Cards */}
        <div className="right-column">
          {/* Card 5: Daily Challenge */}
          <div className="profile-card featured-card daily-challenge-card">
            <h2>Dagens Utfordring</h2>
            <div className="card-content">
              <div className="challenge">
                <h3>{userData.dailyChallenge.title}</h3>
                <p>{userData.dailyChallenge.description}</p>
                <div className="bonus-xp">
                  <span className="xp-icon">⭐</span>
                  <span>Fullfør for å få <strong>{userData.dailyChallenge.bonusXP} bonus XP</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: New Projects */}
          <div className="profile-card featured-card new-projects-card">
            <h2>Nye oppdrag for deg</h2>
            <div className="card-content">
              {userData.availableProjects.map(project => (
                <div key={project.id} className="available-project">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>Sted: {project.location}</p>
                  </div>
                  <div className="project-price">
                    <p>{project.budget}</p>
                  </div>
                  <button className="project-details-btn">Se detaljer</button>
                </div>
              ))}
            </div>
          </div>

          {/* Card 7: Latest Reviews */}
          <div className="profile-card featured-card reviews-card">
            <h2>Siste tilbakemeldinger</h2>
            <div className="card-content">
              {userData.latestReviews.map(review => (
                <div key={review.id} className="review">
                  <div className="review-header">
                    <span>{review.author}</span>
                    <span className="rating">{review.rating}/5</span>
                  </div>
                  <p>"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
