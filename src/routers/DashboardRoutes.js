import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcPage } from '../components/dc/DcPage';
import { HeroPage } from '../components/heroes/HeroPage';
import { MarvelPage } from '../components/marvel/MarvelPage';
import { Navbar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/marvel" component={MarvelPage} />
                    <Route exact path="/heroe/:heroeId" component={HeroPage} />
                    <Route exact path="/dc" component={DcPage} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
