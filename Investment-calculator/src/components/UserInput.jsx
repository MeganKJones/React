
export default function UserInput({title}) {
    return (
        <p>
            <label>{title}</label>
            <input type="number" required/>
        </p>
    )
}