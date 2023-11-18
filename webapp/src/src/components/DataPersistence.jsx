import * as React from 'react';

export default function DataPersistence(data ={data}, key={key}) {
    const saveData = () => {
        if (data.length > 0) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
    const [local, setLocal] = React.useState(saveData);
}