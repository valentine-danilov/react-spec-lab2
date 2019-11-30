import ReactDOM from 'react-dom';

const Header = ({children}) => (
    ReactDOM.createPortal(
        children,
        document.getElementById('header')
    )
);

export default Header;