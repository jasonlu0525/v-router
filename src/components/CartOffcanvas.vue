<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="shpping-cart"
    aria-labelledby="offcanvasTopLabel"
  >
    <div class="offcanvas-header align-items-center bg-dark text-white">
      <h3 class="mb-0" id="offcanvasTopLabel ">購物車</h3>
      <button
        type="button"
        class="btn-close text-reset bg-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between off-canvas-scrollbar">
      <ul class="list-unstyled mb-0">
        <li
          v-for="(item, index) in propShoppingCart.carts"
          :key="index"
          class="row mb-3 align-items-center text-dark"
        >
          <div class="col-5"><img :src="item.product.imageUrl" alt="" /></div>
          <div class="col-5 d-flex flex-column justify-content-between">
            <h4>{{ item.product.title }}</h4>

            <div class="fs-1 d-flex justify-content-center align-items-center">
              <span
                class="d-block pe-2 | cursor-pointer"
                :class="{ 'cursor-not-allowed': item.qty - 1 == 0 }"
                @click="
                  changeQty({
                    config: { qty: item.qty - 1, product_id: item.product_id },
                    id: item.id,
                  })
                "
              >
                <i class="bi bi-dash"></i>
              </span>
              <span class="px-2"> {{ item.qty }}</span>
              <span
                class="d-block ps-2 | cursor-pointer"
                @click="
                  changeQty({
                    config: { qty: item.qty + 1, product_id: item.product_id },
                    id: item.id,
                  })
                "
              >
                <i class="bi bi-plus"></i>
              </span>
            </div>
          </div>
          <a
            href="#"
            class="col-2 text-center"
            @click="emitDeleteCart(item.id)"
            title="確定要刪掉嗎 QQ"
            ><i class="bi bi-trash-fill fs-4 link"></i
          ></a>
        </li>
      </ul>

      <section class="position-absolute start-0 end-0 bottom-0 mb-0 bg-white px-3 py-4">
        <h3 class="fw-bold mb-3">總計: {{ propShoppingCart.final_total }}元</h3>

        <router-link class="btn btn-dark w-100" to="/cart">前往購物車</router-link>
      </section>
    </div>
  </div>
</template>
<script>
// import { toRefs } from 'vue';
// import commonPackage from '@/components/utils/commonPackage';
// import LoginVue from '../views/manager/Login.vue';
import CartDataModel from '@/components/utils/CartModel';

export default { ...CartDataModel };

// export default {
//   props: ['propShoppingCart'],
//   setup(props, { emit }) {
//     console.log(props);
//     const { propShoppingCart } = toRefs(props);
//     console.log(props, propShoppingCart);
//     const { putCart, deleteCart, getCart } = commonPackage();

//     const changeQty = function (productInfo) {
//       console.log('productInfo', productInfo.product_id);
//       console.log(productInfo);
//       putCart(productInfo)
//         .then(() => getCart(false))
//         .then((result) => {
//           emit('emit-put-cart', result.data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     const emitDeleteCart = (id) => {
//       deleteCart(id)
//         .then(() => getCart(false))
//         .catch((err) => {
//           console.log(err);
//         })
//         .then((result) => {
//           emit('emit-delete-cart', result.data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     // 更新購物車品項數量與總金額
//     return {
//       changeQty,

//       emitDeleteCart,
//     };
//   },
// };
</script>
