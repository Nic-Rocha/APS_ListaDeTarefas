import './style.css'

function AuthLayout(props) {

    const {illustration, children, iconUser} = props

    return (
        <div className='auth-wrapper'>
            <div className="auth-illustrations">{illustration}</div>
            <div className="auth-content">
                {iconUser}
                {children}
                </div>
        </div>
    )
}

export default AuthLayout