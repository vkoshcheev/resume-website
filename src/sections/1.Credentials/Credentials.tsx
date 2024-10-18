import images from '../../utils/images';
import './Credentials.scss';

const Credentials = () => {
  
  
  return (
    <div className="section-container section-container-row">
      <img src={images.profileImage} className="credentials-avatar" />

      <div className="credentials__main-info-block">
        <div className="credentials__main-info-block__caption">Name Surname</div>
        <div className="credentials__main-info-block__text">Frontend разработчик React / React Native</div>
      </div>
    </div>
  );
};

export default Credentials;