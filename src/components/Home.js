import React from 'react';
import Search from './serch/PlaceSerch'
import {Container} from 'react-bootstrap'
import Place from './onsen/Place'
export default class Home extends React.Component{
    render() {
        return(
            <div>
                <Container>
                    <h1>Home</h1>
                    <Search />
                    <Place />
                </Container>
            </div>
        )
    }
}