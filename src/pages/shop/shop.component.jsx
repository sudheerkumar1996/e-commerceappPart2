import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';

import CollectionOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';


const  ShopPage = ({match}) => (
            <div className='shop-page'>
              <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                
            </div>
        );
const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollections
    }
);
export default connect(mapStateToProps) (ShopPage);

//match gets the same path , so we can matches the path