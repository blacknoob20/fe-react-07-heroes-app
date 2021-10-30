import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { Navbar } from '../../components/ui/NavBar';
import { types } from '../../types/types';

describe('Pruebas en <Navbar />', () => {
    const historyMock = {
        createHref: jest.fn(),
        listen: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
        location: {}
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Evelin'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    // Siempre es bueno limpiar el Mock
    afterEach(()=>{
        jest.clearAllMocks();
    });

    test('Debe mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
        console.log(wrapper.find('.text-info').text().trim());
    });

    test('Debe llamar el logout y usar el history.', () => {
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });

});
