import { toRefs } from 'vue';
import commonPackage from '@/components/utils/commonPackage';

const CartDataModel = {
  props: ['propShoppingCart'],
  emits: ['emit-put-cart', 'emit-delete-cart'],
  setup(props, { emit }) {
    console.log(props);
    const { propShoppingCart } = toRefs(props);
    console.log(props, propShoppingCart);
    const { putCart, deleteCart, getCart } = commonPackage();

    const changeQty = function (productInfo) {
      console.log('productInfo', productInfo.product_id);
      console.log(productInfo);
      putCart(productInfo)
        .then(() => getCart(false))
        .then((result) => {
          emit('emit-put-cart', result.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const emitDeleteCart = (id) => {
      deleteCart(id)
        .then(() => getCart(false))
        .catch((err) => {
          console.log(err);
        })
        .then((result) => {
          emit('emit-delete-cart', result.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // 更新購物車品項數量與總金額
    return {
      changeQty,

      emitDeleteCart,
    };
  },
};

export default CartDataModel;
