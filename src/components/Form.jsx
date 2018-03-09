import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addArticle} from "../redux/actions";
import uuid from "uuid";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article)),
    }
};

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        const {title} = this.state;
        const id = uuid();
        this.props.addArticle({title, id});
        this.setState({title: ''})
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button>SAVE</button>
            </form>
        );
    }
}

Form.propTypes = {};

export default connect(null, mapDispatchToProps)(Form);
