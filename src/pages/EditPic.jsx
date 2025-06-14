import React from "react";
import useAdminCheck from "../useAdminCheck";

function EditPic({admin}){
    useAdminCheck(admin)
    return <></>;
}

export default EditPic