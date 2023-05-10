import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';


class UserFinder extends Component {
    static contextType = UsersContext;
    constructor() {
        super();

        this.state = {
            filteredUsers: this.context.users, // почему-то не работает, Cannot read properties of undefined (reading 'users')
            searchTerm: '',
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)),
            })
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value })
    }
    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}

export default UserFinder;
