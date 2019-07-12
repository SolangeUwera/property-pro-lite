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
    
    static Add(req, res) {
      const newId = parseInt(properties.length) + 1;
      const {  
             id=newId,
            owner,
            status,
            price,
            state,city,type, body } = req.body;
      const newPost = {
        id: newId,
            owner,
            status,
            price,
            city,state,type, body,
      };
      properties.push(newPost);
      return res.status(200).json({
        message: "created a new post"
      });
}
static updatePost(req, res) {
      const { id } = req.params;
      const post = properties.find(updatePost => updatePost.id == id);
      if (post) {
        (post.owner = req.body.owner), (post.status = req.body.status), (post.state = req.body.state), (post.price = req.body.price), (post.type = req.body.type), (post.adress = req.body.adress),(post.body = req.body.body);
        return res.status(201).json({
          message: "successfully updated",
          updatePost: post
        });
      } else {
        res.status(400).json({
          error: "post cannot be updated"
        });
      }
    }
}
export default propertiesController;
