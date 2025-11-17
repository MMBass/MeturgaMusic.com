
import T from "./BuyMeCoffeeBtnI18n";

const BuyMeCoffeeBtn = ({ className }) => {
  const handleClick = () => {
    window.open('https://www.buymeacoffee.com/meturgmusic', '_blank', 'noopener,noreferrer');
  };

  return (
    <span className={className} onClick={handleClick} >
       {T.SupportSite}
      <svg className="support-btn-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#EAB308" />
        <path d="M12 7V17M14.5 9.5H10.5C10.1022 9.5 9.72064 9.65804 9.43934 9.93934C9.15804 10.2206 9 10.6022 9 11C9 11.3978 9.15804 11.7794 9.43934 12.0607C9.72064 12.342 10.1022 12.5 10.5 12.5H13.5C13.8978 12.5 14.2794 12.658 14.5607 12.9393C14.842 13.2206 15 13.6022 15 14C15 14.3978 14.842 14.7794 14.5607 15.0607C14.2794 15.342 13.8978 15.5 13.5 15.5H9.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
};

export default BuyMeCoffeeBtn;