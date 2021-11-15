import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchPage } from '../../../components/search/SearchPage';

describe('Pruebas en <SearchPage/>', () => {
    test('Debe mostrarse correctamente, con valores por defecto.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Route path="/search" component={SearchPage} />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchPage} />
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
    });
    test('Debe de mostrar un error si no se encuentra el Hero.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=1321313456465']}>
                <Route path="/search" component={SearchPage} />
            </MemoryRouter>
        );
        expect(wrapper.find('p').text()).toBe('No hay resultados');
    });
    test('Debe de llamar el push del history.', () => {
        const history = {
            push: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route
                    path="/search"
                    component={() => <SearchPage history={history} />}
                />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', {
            target: {
                nanme: 'searchtext',
                value: 'batman'
            }
        });
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect(history.push).toHaveBeenCalledWith(`?q=batman`);
    });

});
