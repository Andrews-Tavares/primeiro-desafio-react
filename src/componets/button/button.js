
const Button = ({label, message}) => {
    return (
        <button onClick={() => message(label)}>{label}</button>
    )
}

export default Button;