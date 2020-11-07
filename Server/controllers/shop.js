const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order')
const User = require('../models/user')



exports.getProducts = (req, res, next) => {
  console.log("here")
  Product.find().then((products)=>{
    console.log(products)
    res.send(products)}).catch(err => console.log(err))

  
 
};
exports.postOrder = (req,res,next)=>{
  req.user.populate('cart.items.productId').execPopulate()
  .then(users=>{
    const products = users.cart.items.map(i =>{
      return {quantity : i.quantity , product : {...i.productId._doc}}

    }) ;
    const order = new Order({
      user : {
        userId : req.user ,
        name : req.user.name
      },
      product : products
    })
    order.save();
      
   
 
}).then(result =>{
  return req.user.clearCart()
  
}).then(result => res.redirect('/orders'))
.catch(err=>console.log(err))}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  
 Product.findById(prodId).then((product)=>{
    
 res.render('shop/product-details', {
    product: product,
   pageTitle: product.title,
    path: '/products'
  });
})
.catch(err=> console.log(err))



 
  
};
exports.getIndex = (req, res, next) => {
  Product.find().then((products)=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Home page',
      path: '/'
  })}).catch(err => console.log(err))
}



exports.getCart = async (req, res, next) => {
  try {
    const products = await req.user.populate('cart.items.productId').execPopulate();
    console.log(products);
    res.send(products)
   }
  catch {
    res.send("no cart")
  }
  
};

exports.postCart = async (req, res, next) => {
  try {
    const prodId = req.body.productId;
    const quantity = req.body.quantity;
    const product = await Product.findById(prodId);
    // const user = await User.findById(userId);
    console.log({product , quantity})
    const cart = req.user.addToCart(product, quantity);
    console.log({ req : req.user})
    res.send(req.user.cart)
  }
  catch {
    res.send('error');
  }  
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  console.log({prodId , user : req.user.cart})
  req.user.DeleteCartitems(prodId).then((result)=>res.send(result))

};

exports.getOrders = (req, res, next) => {
  Order.find({'user.userId' : req.user._id})
  .then((order)=>{
    console.log(order)
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders' ,
      orders : order
    });
  }).catch(err=>console.log(err))
  
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
