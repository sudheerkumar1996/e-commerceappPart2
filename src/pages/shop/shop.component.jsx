import React from 'react';
import {Route} from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/with-spinner.components';
import {connect} from 'react-redux';
//import {createStructuredSelector} from 'reselect';
//import {selectCollections} from '../../redux/shop/shop.selectors';

import CollectionOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner= WithSpinner(CollectionOverview);
const CollectionPageWithSpinner= WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections}=this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapshot =>{
           const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionsMap);
           this.setState({loading: false});
        });
    };
    render(){
        const {loading}=this.state;
        const {match}=this.props;
        return(
            <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props)=>
              <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}/>
            <Route path={`${match.path}/:collectionId`} render={(props) =>
             <CollectionPageWithSpinner isLoading={loading}{...props}/>}/>
            </div>
        );

    }
};
// const mapStateToProps = createStructuredSelector(
//     {
//         collections: selectCollections
//     }
// );
// export default connect(mapStateToProps) (ShopPage);

//match gets the same path , so we can matches the path

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
});
export default connect(null,mapDispatchToProps) (ShopPage);