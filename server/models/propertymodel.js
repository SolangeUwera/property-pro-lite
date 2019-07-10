class prop{
    constructor(){
        this.property=[];
    
    }
    addadvert(propertydata){
const addproperty={
    id:this.property.length +1,
    status:'available',
    type:propertydata.type,
    state:propertydata.state,
    city:propertydata.city,
    adress:propertydata.adress,
    data:propertydata.data,
    status:propertydata.status
}
this.property.push(addproperty);
return addproperty;
    }

}
export default new prop();

