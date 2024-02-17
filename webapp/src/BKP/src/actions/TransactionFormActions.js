//const apiUrl = 'http://3.88.14.53:8000/api/v1';
const apiUrl = 'http://localhost:8000/api/v1';

export const deleteTransaction = async (transactionId) => {
    let uri = apiUrl + '/transaction/' + transactionId;
    fetch(uri, {
        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json())
        .catch((err) => {
            console.log('Não foi possível deletar a transação | ', err.message);
        });
}