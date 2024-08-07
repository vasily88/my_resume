import { Link } from 'react-router-dom'

import './socialButton.css'

const SocialButton = () => {
    return(
        <>
            <Link to="/">
                <button className="social-btn">
                    <div className="hover">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </Link>
        </>
    )
}

export default SocialButton