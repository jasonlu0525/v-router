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
                    qty: item.qty - 1,
                    product_id: item.product_id,
                  }),
                    reCalculatePrice({ item, qty: item.qty - 1, prop: propShoppingCart })
                "
              >
                <i class="bi bi-dash"></i>
              </span>
              <span class="px-2"> {{ item.qty }}</span>
              <span
                class="d-block ps-2 | cursor-pointer"
                @click="
                  changeQty({
                    qty: item.qty + 1,
                    product_id: item.product_id,
                  }),
                    reCalculatePrice({ item, qty: item.qty + 1, prop: propShoppingCart })
                "
              >
                <i class="bi bi-plus"></i>
              </span>
            </div>
          </div>
          <a href="#" class="col-2 text-center" @click="deleteCart(item.id)" title="確定要刪掉嗎 QQ"
            ><i class="bi bi-trash-fill fs-4 link"></i
          ></a>
        </li>
      </ul>

      <section class="position-absolute start-0 end-0 bottom-0 mb-0 bg-white px-3 py-4">
        <h3 class="fw-bold mb-3">總計: {{ propShoppingCart.final_total }}元</h3>

        <a class="btn btn-dark w-100" href="./cart.html">前往購物車</a>
      </section>
    </div>
  </div>
</template>
<script>
import commonPackage from '@/components/utils/commonPackage';

export default {
  props: ['propShoppingCart'],
  setup() {
    const { putCart, deleteCart } = commonPackage();

    const changeQty = function (productInfo) {
      console.log(productInfo);
      putCart(productInfo)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.dir(err);
        });
    };
    const reCalculatePrice = (reCalculateObj) => {
      const { item, qty, prop } = reCalculateObj;

      // 變動的價錢
      const changeRange = qty * item.product.price - item.qty * item.product.price;
      item.qty = qty;
      item.total = item.qty * item.product.price;
      item.final_total = item.total;

      prop.total += changeRange;
      prop.final_total = prop.total;
      console.log(changeRange);
    };
    return {
      putCart,
      deleteCart,
      changeQty,
      reCalculatePrice,
    };
  },
};
</script>
