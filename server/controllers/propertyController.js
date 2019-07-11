import Property from "../models/propertymodel";
import  propertymodel from "../models/propertymodel";
class propertyController {
  static getproperty(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: Property
    });
  }
static createProperty(req, res) {
    const newId = parseInt(Property.length) + 1;
 
    const newProperty=propertymodel.addadvert(req.body);

    return res.status(200).json({
      message: "created a new property",
      newProperty
    });

  }

}
export default propertyController;