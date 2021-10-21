import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../../routers/PrivateRoute';

describe('Pruebas en <PrivateRoute/>', () => {
    const props = { location: { pathname: '/marvel' } };

    Storage.prototype.setItem = jest.fn();

    test('Debe mostrar el componente si esta autentiado y guardar localStorage.', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>

        );
        console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('Debe mostrar el componente no esta autentiado.', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>

        );
        console.log(wrapper.html());
        // El <Redirect /> siempre devuelve vacio en las pruebas
        expect(wrapper.html()).toBe('');
    });

});
