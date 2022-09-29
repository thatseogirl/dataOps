import React, { useState } from "react";
import {
    GoSearch,
    StyledForm,
    StyledClickedForm
} from "../index";

const Input = () => {
    const [scale, setScale] = useState(false);
    return (
        <div onClick={() => setScale(!scale)}>
            {scale ? (
                <StyledClickedForm style={{ width: "100%", marginRight: "40em" }}>
                    <GoSearch color='#91A9BB' />
                    <input style={{ width: "100%" }}
                        type='text'
                        name='search'
                        placeholder='Search for Schema fields, schema subjects,topics, connectore and more...'
                    />
                </StyledClickedForm>
            ) : (
                <StyledForm>
                    <GoSearch color='#91A9BB' />
                    <input
                        type='text'
                        name='search'
                        placeholder='Stream Catalog'
                    />
                </StyledForm>
            )}
        </div>
    )
}

export default Input;
