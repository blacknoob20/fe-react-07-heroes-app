import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { DashboardRoutes } from '../../../routers/DashboardRoutes';

describe('Pruebas en <DashboardRoutes />', () => {
    const contextValue = {
        dispach: jest.fn(),
        user: {
            logged: true,
            name: 'Cristhian'
        }
    }

    test('Debe mostrarse correctamente.', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        console.log(wrapper.find('.text-info').text().trim());
    });


});
