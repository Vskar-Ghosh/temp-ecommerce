const categoryModel = require("../../models/categoryModel");
const productModel = require("../../models/productModel");
const queryProducts = require("../../utiles/queryProducts");
const { responseReturn } = require("../../utiles/response");
class homeController {
  formateProduct = (products) => {
    const productArray = [];
    let i = 0;
    while (i < products.length) {
      let temp = [];
      let j = i;
      while (j < i + 3) {
        if (products[j]) {
          temp.push(products[j]);
        }
        j++;
      }
      productArray.push([...temp]);
      i = j;
    }
    return productArray;
  };

  get_categorys = async (req, res) => {
    try {
      const categorys = await categoryModel.find({});
      responseReturn(res, 200, { categorys });
    } catch (error) {
      console.log(error.message);
    }
  };

  get_products = async (req, res) => {
    try {
      const products = await productModel
        .find({})
        .limit(16)
        .sort({ createAt: -1 });
      const allProduct1 = await productModel
        .find({})
        .limit(9)
        .sort({ createAt: -1 });
      const latest_product = this.formateProduct(allProduct1);
      const allProduct2 = await productModel
        .find({})
        .limit(9)
        .sort({ rating: -1 });
      const topRated_product = this.formateProduct(allProduct2);
      const allProduct3 = await productModel
        .find({})
        .limit(9)
        .sort({ discount: -1 });
      const discount_product = this.formateProduct(allProduct3);

      responseReturn(res, 200, {
        products,
        latest_product,
        topRated_product,
        discount_product,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  get_product = async (req, res) => {
    const { slug } = req.params;

    try {
      const product = await productModel.findOne({ slug });
      const relatedProducts = await productModel
        .find({
          $and: [
            {
              _id: {
                $ne: product.id,
              },
            },
            {
              category: {
                $eq: product.category,
              },
            },
          ],
        })
        .limit(20);

      const moreProducts = await productModel
        .find({
          $and: [
            {
              _id: {
                $ne: product.id,
              },
            },
            {
              SellerId: {
                $eq: product.SellerId,
              },
            },
          ],
        })
        .limit(3);
      responseReturn(res, 200, { product, relatedProducts, moreProducts });
    } catch (error) {
      console.log(error.message);
    }
  };

  price_range_product = async (req, res) => {
    try {
      const priceRange = {
        low: 0,
        high: 0,
      };
      const products = await productModel
        .find({})
        .limit(9)
        .sort({ createAt: -1 });
      const latest_product = this.formateProduct(products);
      const getForPrice = await productModel.find({}).sort({ price: 1 });
      if (getForPrice.length > 0) {
        priceRange.high = getForPrice[getForPrice.length - 1].price;
        priceRange.low = getForPrice[0].price;
      }
      responseReturn(res, 200, { latest_product, priceRange });
    } catch (error) {
      console.log(error.message);
    }
  };

  query_products = async (req, res) => {
    const parPage = 12;
    req.query.parPage = parPage;

    try {
      const products = await productModel.find({}).sort({ createAt: -1 });

      const totalProduct = new queryProducts(products, req.query)
        .categoryQuery()
        .searchQuery()
        .priceQuery()
        .rateingQuery()
        .sortByPrice()
        .countProducts();

      const result = new queryProducts(products, req.query)
        .categoryQuery()
        .searchQuery()
        .rateingQuery()
        .priceQuery()
        .sortByPrice()
        .skip()
        .limit()
        .getProducts();
      responseReturn(res, 200, { products: result, totalProduct, parPage });
    } catch (error) {
      console.log(error.message);
    }
  };

  customer_review = async (req, res) => {
    console.log(req.body);
  };
}

module.exports = new homeController();
