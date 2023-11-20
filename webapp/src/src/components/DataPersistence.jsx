import * as React from 'react';

export default function DataPersistence(data ={data}, key={key}) {
    const saveData = () => {
        console.log(key, data);
    }
    const [local, setLocal] = React.useState(saveData);
}