export const NumerFormat = (numero) => {
  if(numero <= 9){
    return "N°00"+numero
  }
  if(numero <= 99){
    return "N°0"+numero
  }
  if(numero > 99){
    return "N°"+numero
  }

}
