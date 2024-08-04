import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vikram2101:Emzx_ZpBNq2Sm6@tomatocluster.xgpmpc3.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("DB Connected...");
    });
};
