const formatDate = (date: Date = new Date()): string => { //on ajoute une date par def avc "new Date" comme param de fct°
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}
 
export default formatDate;