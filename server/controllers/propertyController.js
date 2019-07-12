import properties  from '../models/propertiesmodel.js';
class propertiesController {
    // Get all all properties
    static getAll(req, res) {
          return res.status(200).json({
                properties,
                message: "All the properties",
          });
    }
    // Get a single property
    static getSingle(req, res) {
           const findproperty = properties.find(property => property.id === parseInt(req.params.id, 10));
           if (findproperty) {
               return res.status(200).json({
                     property: findproperty,
                     message: "A single property record record",
               });
           }
           return res.status(404).json({
                 message: "property record not found",
           });
    }
}
export default propertiesController;