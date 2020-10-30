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
    const productindex = this.cart.items.findIndex(item => {
        return item.productId.toString() === product._id.toString()
    })
    let newquantity = quantity;
    const updatedCartitems = [...this.cart.items]
    if (productindex >= 0) {
        newquantity = this.cart.items[productindex].quantity + quantity;
        updatedCartitems[productindex].quantity = newquantity;                        
    }
    else {
        updatedCartitems.push({
            productId: product._id
            , quantity: newquantity
        })
    }
    this.cart = { items: updatedCartitems }
                
    return this.save();
        
};
userSchema.methods.DeleteCartitems = function (Id) {
    const updatedCartItems = this.cart.items.filter(item => {
        return item.productId.toString() !== Id.toString();
                    
    });
    this.cart = { items: updatedCartItems }
    return this.save()
};
userSchema.methods.clearCart = function () {
    this.cart = { items: [] }
    return this.save()
};

module.exports = mongoose.model('User' , userSchema)

