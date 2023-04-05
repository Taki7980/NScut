import React from 'react'

export default function Alert(props) {
    const capitalise =(word) => {
        const word1 = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word1.slice(1) ;
    }
    return (
        props.alert &&
        <>
            <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
                {props.alert.msg} || <strong>{capitalise(props.alert.ty)}</strong>
                <button type="button" className={`btn-close`} data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}
