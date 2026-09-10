// import { ArrowUpRight } from 'lucide-react';

// export default function SocialCard({ link }) {
//   const { name, username, description, url, icon: Icon, featured } = link;

//   return (
//     <a 
//       href={url} 
//       target="_blank" 
//       rel="noopener noreferrer" 
//       className={`social-card ${featured ? 'featured' : ''}`}
//     >
//       <div className="social-card-header">
//         <div className="social-card-icon">
//           <Icon size={20} strokeWidth={1.5} />
//         </div>
//         {!featured && <ArrowUpRight className="social-card-arrow" size={16} />}
//       </div>
      
//       <div className="social-card-content">
//         <span className="social-card-title">{name}</span>
//         {username && <span className="social-card-subtitle">{username}</span>}
//         {description && <span className="social-card-subtitle">{description}</span>}
//       </div>

//       {featured && <ArrowUpRight className="social-card-arrow" size={20} />}
//     </a>
//   );
// }

import { ArrowUpRight } from 'lucide-react';

export default function SocialCard({ link }) {
  const { name, username, description, url, icon, featured } = link;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`social-card ${featured ? 'featured' : ''}`}
    >
      <div className="social-card-header">
        <div className="social-card-icon">
          <img
            src={icon}
            alt={`${name} icon`}
          />
        </div>

        {!featured && (
          <ArrowUpRight 
            className="social-card-arrow" 
            size={16} 
          />
        )}
      </div>
      
      <div className="social-card-content">
        <span className="social-card-title">{name}</span>

        {username && (
          <span className="social-card-subtitle">
            {username}
          </span>
        )}

        {description && (
          <span className="social-card-subtitle">
            {description}
          </span>
        )}
      </div>

      {featured && (
        <ArrowUpRight 
          className="social-card-arrow" 
          size={20} 
        />
      )}
    </a>
  );
}