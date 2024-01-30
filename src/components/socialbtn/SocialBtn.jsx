import "./socialbtn.css"
import PropTypes from 'prop-types';

const SocialBtn = ({ faIcon, faSize, link, displayText, showText }) => {

  const iconClassName = `fa-brands fa-${faIcon} fa-${faSize}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="social-btn">
      <i className={iconClassName}></i>
      {showText && <span className="btn-text">{displayText}</span>}
    </a>
  );
};

SocialBtn.propTypes = {
  showText: PropTypes.bool.isRequired,
};

export default SocialBtn;
