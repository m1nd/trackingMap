import React from 'react';
import uniqueId from 'lodash/uniqueId';

const ListItem = (props) => {

return (
    <li key={uniqueId()} data-id={ props.value } >{ props.value }
        <a className="btn" href="#" onClick={() => props.changeList(props.index)}>
            <i className="fa fa-window-close" aria-hidden="true"></i>
        </a>
    </li>
    )
};

export default ListItem;