import { heroes } from '../data/heroes';

// export const getHeroesById = (name) => heroes.filter(hero => (hero.superhero.indexOf(name) > -1));
export const getHeroesByName = (name = '') => {
    if (name === '') return heroes;

    return heroes.filter(hero => {
        // console.log(
        //     hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
        //     name.toLocaleLowerCase(),
        //     hero.superhero.toLocaleLowerCase()
        // );

        return hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    })
    // return heroes.filter(hero => (hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase)));
}