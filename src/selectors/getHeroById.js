import { heroes } from '../data/heroes';

export const getHeroesById = (id) => heroes.filter(hero => hero.id === id);