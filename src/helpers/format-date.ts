const formatDate = (date: Date): string => { //on ajoute une date par def avc "new Date" comme fct°
return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}
 
export default formatDate;