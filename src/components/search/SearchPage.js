import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchPage = ({ history }) => {
    const location = useLocation();
    // const parsed = queryString.parse(location.search);
    const { q = '' } = queryString.parse(location.search);
    const [{ search }, handleInputChange] = useForm({ search: q });
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
    }

    return (
        <div>
            <h1>Search Page</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input type="text" name="search" onChange={handleInputChange} value={search} placeholder="Find your hero" className="form-control" autoComplete="off" />
                        <button type="submit" className="btn btn-outline-primary m-1">Search...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
