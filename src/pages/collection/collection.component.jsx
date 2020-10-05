import React from 'react';
import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {connect} from 'react-redux';
import {selectCollection}from '../../redux/shop/shop.selectors';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles';

const CollectionPage = ({collection}) => {
    const {title,items} = collection;
    return(
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
            {
                items.map(item =>(
                    <CollectionItem key={item.id} item={item}/>
                ) )
            }
        </CollectionItemsContainer>
    </CollectionPageContainer>
);
};
const mapStateToProps = (state,ownProps) => (
    {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
)
//above: this is neccessary because unlike other selectors, 
//this selector needs a part of the state depending on the URL parameter
export default connect(mapStateToProps)(CollectionPage);