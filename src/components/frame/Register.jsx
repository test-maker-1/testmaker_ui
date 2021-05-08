import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { registerComponents } from "../../constants/loginModuleComponents";

const RegisterFrame = ({
    match: {
        params: { module },
    },
}) => {
    const history = useHistory();
    let components = module && registerComponents;

    if (!components.hasOwnProperty(module)) {
        history.push("/error");
        return null;
    }

    return components[module];
};

export default withRouter(RegisterFrame);
