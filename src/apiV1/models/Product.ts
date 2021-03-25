import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
      type: String,
       required: true
    },
    vendorId:{
        type: String,
        required: true
    },
    categoryId:{
      type: String,
      required: true
  }
  },
  
  {
    timestamps: true,
    useNestedStrict: true
  }
);

export default mongoose.model("Product", ProductSchema);
