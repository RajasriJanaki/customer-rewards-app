import React from "react";

export default function TableHeader(props) {
    return (
        <thead>
            <tr>
                {props.columns ? props.columns.map(column => <th key={column}>{column}</th>) : null}
            </tr>
        </thead>
    );
}
