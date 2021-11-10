import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { HeroPage } from "../../../components/heroes/HeroPage";

describe('Pruebas en el componente <HeroPage/>', () => {
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

    test('Debe mostrarse correctamente el redirect si no hay argumentos en la URL.', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

});
