import gioProfile from '../assets/newpfp.jpg';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-avatar">
        <img src={gioProfile} alt="Gio" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">Gio</h1>
      </div>
      <p className="profile-bio">
        - Well, my life just got 12% more interesting. -
      </p>
    </div>
  );
}
