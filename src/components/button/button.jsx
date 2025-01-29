import "./button.css";

export const Button = (props) => {
    const {children, className, onClick} = props;
    return <button className= {className} onClick={onClick}>{children}</button>
}