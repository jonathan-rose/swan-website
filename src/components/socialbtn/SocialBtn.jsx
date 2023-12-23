import "./socialbtn.css"


const SocialBtn = ({ faIcon, faSize, link, displayText }) => {
  const iconClassName = `fa-brands fa-${faIcon} fa-${faSize}`;

    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="social-btn">
        <i className={iconClassName}></i>
        {displayText}
      </a>
    );
  };

export default SocialBtn;
