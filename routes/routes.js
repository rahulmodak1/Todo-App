const express = require ('express') ;
const router = express.Router() ;
const Schema = require('../model/schema')
let arr = [] ;

router.get('/' , async(req , res) =>{
   const result = await Schema.find() ;
   res.send(result) ;
})
router.post('/' , async(req , res) =>{
  const result = await Schema.create(req.body) ;
    // res.send({message: 'data added successfully' , data : result})
    res.status(200).json(result)
})
router.put('/:id' , async(req , res) =>{
const {item }= req.params;
const result = await Schema.findByIdAndUpdate(req.params.id, {$set: req.body})
res.send({message : 'data updated successfully' , data :result})


})
router.delete('/:id' , async(req , res) => {
    const result = await Schema.findByIdAndDelete(req.params.id)
res.send({message: 'data deleted' , data : result}) ;
})

module.exports = router ;
