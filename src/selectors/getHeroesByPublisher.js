import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto.`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
    // return heroes.filter(hero => {
    //     console.log(hero.publisher,'===' ,publisher,hero.publisher === publisher);
    //     return hero.publisher === publisher
    // });
}