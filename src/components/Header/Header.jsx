import './header.css'

const Header = () => {

    return (
        <div className='navBar'>
            <img className='argentina-bandera' src="public/argentina-bandera.png" alt="" />
            <h1 className='title'>MATE ARGENTINO</h1>
            <img className='mate-png' src='mate.png' alt="" />
        </div>
    )
}

export default Header
