import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {articles: state.articles}
};

const BareList = ({articles}) => (<ul>
    {articles.map(item => (
        <li key={item.id}>{item.title}</li>
    ))}
</ul>);

const List = connect(mapStateToProps)(BareList);

export default List;
