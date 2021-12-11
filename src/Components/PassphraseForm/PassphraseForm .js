import { useState, useContext } from "react";
import { PassContext } from '../../Context/context'

const PassphraseForm = () => {
    const passphrase = 'myPassword';
    const [ inpValue, setInpValue ] = useState('');
    const { setIsAuthenticated } = useContext(PassContext);


    const inputValueHandler = (e) => {
        const password = e.target.value;
        setInpValue(password);
    }

    const passSubHandler = (event) => {
        event.preventDefault();
        if (inpValue === passphrase)
            setIsAuthenticated(true)
    }
    return (
        <div>
            <form>
                <p>Enter passphrase:</p>
                <input
                    type="text"
                    className="passInput"
                    placeholder="password"
                    onChange={inputValueHandler}
                />
                <button
                    type="submit"
                    className="passSubmit"
                    onClick={passSubHandler}
                >
                submit
                </button>
            </form>
            <p>password = myPassword</p>
        </div>
    )
}

export default PassphraseForm ;