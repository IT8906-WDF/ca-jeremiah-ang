import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './storage';

export default function RootPage(props) {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'update'}>Update</Link>
                    </li>
                    <li>
                        <Link to={'pinned'}>Pinned</Link>
                    </li>
                </ul>
            </div>
            <div>
                {/* Content will go here later */}
                <Provider store={store}>
                    <Outlet />
                </Provider>
            </div>
        </div>
    );
}
