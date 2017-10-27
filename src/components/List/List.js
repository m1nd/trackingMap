import React from 'react';

import ListItem from "./ListItem/ListItem";

const List = (props) => (
    props.store.map((item, key) => <ListItem key={key} index={key} value={item} changeList={props.changeList}/> ) 
);

export default List;