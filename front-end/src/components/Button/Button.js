
function Button({text, btnStatus, clickHandler}){
    return(
        <button onClick={clickHandler} className={btnStatus ? `btn btn-${btnStatus}` : `btn btn-primary` } type="submit">{text}</button>
    )
}

export default Button;