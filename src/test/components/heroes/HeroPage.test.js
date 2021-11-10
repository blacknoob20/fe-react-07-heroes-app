import { mount } from 'enzyme';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { HeroPage } from "../../../components/heroes/HeroPage";

describe('Pruebas en el componente <HeroPage/>', () => {

    test('Debe mostrarse correctamente el redirect si no hay argumentos en la URL.', () => {
        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroPage history={history} />
            </MemoryRouter>
        );
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('Debe de mostrar un heroe si el parametro existe y se encuentra.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={HeroPage} />
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={() => <HeroPage history={history} />} />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();

    });

});
