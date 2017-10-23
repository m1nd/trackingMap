import React from 'react';
import uniqueId from 'lodash/uniqueId';

const ListItem = (props) => (
    <li key={uniqueId()} data-id={props.value} >{ props.value } <i className="fa fa-window-close" aria-hidden="true"></i></li>
);

export default ListItem;