import image from "../assets/investment-calculator-logo.png"

function Header(){
    return(
        <>
        <div id="header">
        <img src={image} alt="Bag of money" />
        <h1>React Investment Calculator</h1>
        </div>
        </>
    )
};

export default Header;