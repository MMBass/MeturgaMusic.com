
import T from "./BuyMeCoffeeBtnI18n";

const BuyMeCoffeeBtn = ({className}) => {
  const handleClick = () => {
    window.open('https://www.buymeacoffee.com/meturgmusic', '_blank', 'noopener,noreferrer');
  };

  return (
    <span className={className} onClick={handleClick} >
      ☕ Buy me a coffee
    </span>
  );
};

export default BuyMeCoffeeBtn;