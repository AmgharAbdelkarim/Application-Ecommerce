const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order')
const User = require('../models/user')



exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.send(products);
  }
  catch {
    res.send("retrieve product failed")
  };

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
    const cart = await req.user.populate('cart.items.productId').execPopulate();
    res.send(cart);
   }
  catch {
    res.send("no cart")
  }
  
};

exports.postCart = async (req, res, next) => {
  const prodId = req.body.productId;
  const quantity = req.body.quantity;
  try {
    const product = await Product.findById(prodId);
    const userInfo = await req.user.addToCart(product, quantity);
    res.send(userInfo)
  }
  catch {
    res.send('error');
  }  
};

exports.postCartDeleteProduct = async (req, res, next) => {
  try {
    const prodId = req.body.productId;
    await req.user.DeleteCartitems(prodId);
    const cart = await req.user.populate('cart.items.productId').execPopulate();
    res.send(cart);
  }
  catch {
    res.send("error")
  }

};

exports.updateCartItemQuantity = async (req, res, next) => {
  try {
    const prodId = req.body.productId;
    const quantity = req.body.quantity;
    const product = await Product.findById(prodId);
    await req.user.updateCartItemQuantity(product, quantity);
    const cart = await req.user.populate('cart.items.productId').execPopulate();
    res.send(cart);
  }
  catch {
    res.send('error');
  }  

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
