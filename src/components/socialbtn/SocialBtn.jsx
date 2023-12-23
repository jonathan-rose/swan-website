import "./socialbtn.css"


const SocialBtn = ({ faIcon, link, displayText }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="social-btn">
        <i className={faIcon}></i>
        {displayText}
      </a>
    );
  };

export default SocialBtn;
