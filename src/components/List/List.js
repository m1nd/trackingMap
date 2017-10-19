import React from 'react';

import ListItem from "./ListItem/ListItem";

const List = (props) => (
    props.store.map((item, key) => <ListItem key={key} value={item} /> ) 
);

export default List;