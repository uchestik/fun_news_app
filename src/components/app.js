import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//containers
import Home from '../containers/Home';
import News from '../containers/News';
import GalleryItem from '../containers/GalleryItem';

//components
import Header from './Header';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/news/:id' component={News}/>
                        <Route path='/galleries/:id' component={GalleryItem} />
                        <Route exact path='/' component={Home}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;