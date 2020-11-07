const Product = require('../models/product');
const mongodb = require('mongodb')

const objectid = mongodb.ObjectID


exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title : title ,
    imageUrl : imageUrl ,
    price : price ,
    description : description ,
    userId : req.user
  })
  product.save().then(result =>{
    console.log('product created')
    res.redirect('/admin/products')
  }).catch(err => console.log(err))}



// exports.getProducts =(req,res,next)=>{
//   Product.find().then((products)=>{
//     res.render('admin/products', {
//       pageTitle: 'Products',
//       path: '/admin/products',
//       editing: false ,
//       prods : products
//     });
//   }).catch((err)=>{
//     console.log(err)
//   })
// }

exports.getEditProduct = (req, res, next)=>{
  const prodId = req.params.productId;
  const editing = req.query.edit
  
 Product.findById(prodId).then((product)=>{
   
    
 res.render('admin/edit-product', {
    product: product,
   pageTitle: product.title,
    path: '/products' , 
    editing :  editing
  });
}).catch((err)=>{
  console.log(err)
})}

exports.postEditProduct = (req, res,next)=>{
  const id = req.body.productId ;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.findById(id).then(product =>{
    product.title = title ;
    product.imageUrl = imageUrl 
    product.price = price
    product.description = description 

    product.save()
  })
 .then((result)=>{
    res.redirect('/admin/products')
  }).catch(err=>{
    console.log(err)
  })

}
exports.postDeleteProduct = (req,res,next)=>{
    const id = req.body.productId;
    
    Product.findByIdAndRemove(id).then(result=>{
      res.redirect('/admin/products')
    }).catch(err=>{
      console.log(err)
    })
  }
