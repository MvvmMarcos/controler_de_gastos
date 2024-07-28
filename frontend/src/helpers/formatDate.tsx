
export function formatDate(date:string){
    let data = new Date(date);
    return data.toLocaleDateString('pt-BR',{timeZone:"UTC"});
}