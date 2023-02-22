import './Button.css';
const Button = ({bodyText, onClick}) => {

    return(
        <button onClick={onClick}>{bodyText}</button>
    )
}
export default Button;