import React from "react";
import BasicInfo from "./Medium";

const Info = () => {
    const peoplesInfo = [

        {name: "Micah",
        number: "000-000-0000",
        birthday: "7/19/2022",
        occupation: "Software Developer"},

        {name: "Luffy",
        number: "000-000-0000",
        birthday: "7/19/2022",
        occupation: "Pirate Captain"},

        {name: "Zoro",
        number: "000-000-0000",
        birthday: "7/19/2022",
        occupation: "Pirate"},

    ]

    return (
        <div className="peopleList">
            {peoplesInfo.map((info) => (
               <BasicInfo
                name={info.name} 
                number={info.number}
                birthday={info.birthday}
                occupation={info.occupation} />
            ))}
        </div>
    );

};

export default Info