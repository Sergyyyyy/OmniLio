import SocialCard from './SocialCard';
import { socialLinks } from '../data/socials';

export default function SocialGrid() {
  return (
    <div className="social-grid">
      {socialLinks.map((link) => (
        <SocialCard key={link.id} link={link} />
      ))}
    </div>
  );
}
