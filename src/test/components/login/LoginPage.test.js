import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginPage } from '../../../components/login/LoginPage';
import { types } from '../../../types/types';

describe('Pruebas en <Login/>', () => {
    const history = {
        replace: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginPage history={history} />
        </AuthContext.Provider>
    );

    test('Debe mostrarse correctamente.', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegacion.', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith(
            {
                type: types.login,
                payload:{
                    name: 'Cristhian'
                }
            }
        );
        expect(history.replace).toHaveBeenCalled();
    });

});
