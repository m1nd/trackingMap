import React from 'react';
import uniqueId from 'lodash/uniqueId';

const ListItem = (props) => (
    <li key={uniqueId()} data-id={props.value} >{ props.value }</li>
);

export default ListItem;