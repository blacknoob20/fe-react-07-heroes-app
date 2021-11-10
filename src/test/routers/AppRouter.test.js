import { mount, shallow } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
    const contextValue = {
        dispach: jest.fn(),
        user: {
            logged: false
        }
    }

    test('Debe de mostrar el login si no esta autenticado.', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el componente marvel si esta autenticado.', () => {
        const contextValue = {
            dispach: jest.fn(),
            user: {
                logged: true,
                name: 'Cristhian'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);

    });


});
