import "../../App.css"
import "./InputComp.css"
export const InputComp =(prop) =>{
    return(
        <div className="input-box">
            <input value={prop.name} className="input-value"/>
            <span className="floating-text">{"<Full Name>"}</span>
        </div>
    )
}