import React from "react";

export default function TableHeader(props) {
    return (
        <thead>
            {props.columns ? props.columns.map(column => <th>{column}</th>) : null}
        </thead>
    );
}
