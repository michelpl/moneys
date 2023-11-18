import * as React from 'react';

export default function DataPersistence({data, key}) {
    const saveData = () => {
        console.log(data, key);
        localStorage.setItem(key, JSON.stringify(data));
    }
    const [local, setLocal] = React.useState(saveData);


}