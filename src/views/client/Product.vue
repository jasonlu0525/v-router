<template>
  <section class="container">
    <ul class="mb-0">
      <li>
        <a href="#" class="d-block" data-bs-toggle="offcanvas" data-bs-target="#shpping-cart"
          >購物車 <i class="bi bi-cart-fill"></i>
        </a>
      </li>
    </ul>
    <h2>產品</h2>

    <offfanvas-shopping-cart :prop-shopping-cart="cartData"></offfanvas-shopping-cart>
    <div class="row justify-content-end">
      <div class="col-lg-10 mb-3">
        <ul class="row list-unstyled">
          <li
            class="col-md-6 col-lg-4 mb-3 p-3"
            v-for="item in productData.products"
            :key="item.id"
          >
            <div class="card">
              <div class="card-hover">
                <img :src="item.imageUrl" class="card-img card-img-top" :alt="item.description" />

                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <p>
                    原價 :<del> {{ item.origin_price.toLocaleString() }}元</del>/{{ item.unit }}
                  </p>
                  <p>特價 : {{ item.price.toLocaleString() }}元/{{ item.unit }}</p>
                  <div class="row">
                    <div class="col-6">
                      <a
                        href="#"
                        class="w-100 btn btn-primary stretcked-link"
                        @click.prevent="addToCart({ product_id: item.id, qty: 1, item })"
                        >加入購物車</a
                      >
                    </div>
                    <div class="col-6">
                      <a
                        href="#"
                        class="w-100 btn btn-secondary stretcked-link"
                        @click.prevent="createModal(item)"
                        >了解更多</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <detail-modal ref="detailModalDom"></detail-modal>

        <pagination
          :prop-pagination="productData.pagination"
          @emit-change-page="onChangePage"
        ></pagination>
      </div>
    </div>

    <!-- <shopping-cart
      :prop-shopping-cart="cartsList"
      @emit-change-qty="on_changeQty"
      @emit-delete-cart="on_deleteCart"
    ></shopping-cart> -->
  </section>
</template>

<script>
// inject
import { ref } from 'vue';
// import { Modal } from 'bootstrap';
import commonPackage from '@/components/utils/commonPackage';
import pagination from '@/components/Pagination.vue';
import offfanvasShoppingCart from '@/components/CartOffcanvas.vue';
import detailModal from '@/components/DetailModal.vue';

export default {
  components: {
    pagination,
    detailModal,
    offfanvasShoppingCart,
  },
  setup() {
    const { getProduct, postCart, getCart } = commonPackage();
    const productData = ref({});
    const cartData = ref({});
    const detailModalDom = ref(null);

    getProduct().then((result) => {
      console.log(result, 'product 0k');
      productData.value = result.data;
    });
    getCart().then((result) => {
      console.log(result, 'cart 0k');
      cartData.value = result.data.data;
    });

    const onChangePage = (page) => {
      console.log(page);

      getProduct(page).then((result) => {
        console.log(result);
        productData.value = result.data;
      });
    };

    const addToCart = function (prodcutInfo) {
      console.log(prodcutInfo);

      postCart(prodcutInfo);
    };

    const createModal = (singleProductObj) => {
      // detailModalDom.value.detailModal =
      // new Modal(document.querySelector('#detailModal')).show();
      detailModalDom.value.detailModal.show();
      detailModalDom.value.singleProductData = singleProductObj;
    };

    return {
      productData,
      cartData,
      detailModalDom,
      onChangePage,
      addToCart,
      createModal,
    };
  },
};
</script>
