import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export function Header() {

const { cancelCookie } = useContext(AuthContext);

    return (
        <div>
            <div>
                <button
                    type="submit"
                    onClick={cancelCookie}>
                    <span> logout </span>
                </button>
            </div>

            <div>
                <img src="https://github.com/devAlexSilva.png" alt="alex dev" />
            </div>
        </div>
    )
}