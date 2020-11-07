const mongoose = require('mongoose')

const Schema = mongoose.Schema ;

const userSchema = new Schema({
    firstName : {
        type : String ,
        required : true
    },
    lastName : {
        type : String ,
        required : true
    },
    address : {
        type : String ,
        required : true
    },
    email : {
        type: String ,
        required : true
    },
    password : {
        type: String ,
        required : true
    },
    cart : {
        items : [{
            productId : {type :Schema.Types.ObjectId ,ref : 'Product' ,  required : true},
             quantity :{ type : Number , required : true}
            }]
    }

})




userSchema.methods.addToCart = function (product , quantity) {
    const productIndex = this.cart.items.findIndex(item => {
        return item.productId.toString() === product._id.toString()
    })
    let newQuantity = quantity;
    const updateCartItems = [...this.cart.items]
    if (productIndex >= 0) {
        newQuantity = this.cart.items[productIndex].quantity + quantity;
        updateCartItems[productIndex].quantity = newQuantity;                        
    }
    else {
        updateCartItems.push({
            productId: product._id
            , quantity: newQuantity
        })
    }
    this.cart = { items: updateCartItems }
                
    return this.save();
        
};
userSchema.methods.DeleteCartitems = function (prodId)  {
    console.log(this , prodId)
    const updatedCartItems = this.cart.items.filter(item => {
        return item.productId.toString() !== prodId.toString();
                    
    });
    this.cart = { items: updatedCartItems }
    return this.save()
};

userSchema.methods.clearCart = function () {
    this.cart = { items: [] }
    return this.save()
};

module.exports = mongoose.model('User' , userSchema)

