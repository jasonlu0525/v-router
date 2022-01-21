<template>
  <div class="container" id="vue-shpopping-cart">
    <div class="row justify-content-center">
      <h1 class="text-center mb-3">我的購物車</h1>
      <div class="col-lg-8 mb-4">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="row g-0 d-none d-md-flex">
                <th scope="col" class="col-5">品項</th>
                <th scope="col" class="col-2">單價</th>
                <th scope="col" class="col-2">數量</th>
                <th scope="col" class="col-2">金額</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-is="'cart-table'" :prop-shopping-cart="cartsList"
              @emit-change-qty="on_changeQty"
                @emit-delete-cart="on_deleteCart">

              </tr> -->

              <CartTable
                :propShoppingCart="cartData"
                @emit-delete-cart="refreshCart"
                @emit-put-cart="refreshCart"
              ></CartTable>
            </tbody>
          </table>
        </div>

        <!-- <div id="totalPrice" class="">總計 -
            {{cartsList.final_total}} </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { Modal } from 'bootstrap';
import commonPackage from '@/components/utils/commonPackage';
import CartTable from '@/components/CartTable.vue';

export default {
  components: {
    CartTable,
  },
  setup() {
    const cartData = ref({});
    const { getCart } = commonPackage();
    getCart().then((result) => {
      console.log(result, 'cart 0k');
      cartData.value = result.data.data;
    });
    const refreshCart = (newCartdata) => {
      // 刪除之後 新的 cartData
      cartData.value = newCartdata;
    };

    return {
      cartData,
      refreshCart,
    };
  },
};
</script>
