 const API_KEY='AIzaSyBbakp9x1N2LL364H6A70jWhqiK3xO2Je4';
 
export default API_KEY;
 export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"   
    }
    else{
        return value;
    }
 }