import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      cartItem = await Cart.create({
        userId,
        productId,
        quantity: 1
      });
    }
    return res.status(200).json({
      message: "Product added to cart successfully",
      cartItem
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error adding to cart",
      error: error.message
    });
  }
};



export const getCartProducts = async (req, res) => {
  try {
    const {userId} = req.params
    const cart = await Cart.find({userId}).populate('productId')
    return res.status(200).json({cart})
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting cart products!",
      error: error.message,
    });
  }
};


export const deleteCartProducts = async (req, res) => {
  try {
    const {id} = req.params
    const cart = await Cart.findByIdAndDelete(id)
    return res.status(200).json({
      message:"Cart deleted successfully!"
    })
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while deleting cart products!",
      error: error.message,
    });
  }
};
