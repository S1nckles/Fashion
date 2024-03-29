import './social.css';

const Social = ({icon}) => {
    return <div className="footer__social">
        <img src={icon} alt='icon' />
    </div>;
};

export default Social;