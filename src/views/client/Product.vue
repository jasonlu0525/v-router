<template>
  <section class="container">
    <h2>產品</h2>

    <div class="row justify-content-end">
      <div class="col-lg-10 mb-3">
        <ul class="row list-unstyled">
          <li
            class="col-md-6 col-lg-4 mb-3 p-3"
            v-for="item in data.products"
            :key="item.id"
          >
            <div class="card">
              <div class="card-hover">
                <img
                  :src="item.imageUrl"
                  class="card-img card-img-top"
                  :alt="item.description"
                />

                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <p>
                    原價 :<del> {{ item.origin_price.toLocaleString() }}元</del>/{{
                      item.unit
                    }}
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
                        @click.prevent="
                          $refs.detailModal.detailModal.show(),
                            ($refs.detailModal.singleProductData = item)
                        "
                        >了解更多</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <!--   <detail-modal ref="detailModal" ></detail-modal> -->

        <pagination
          :prop-pagination="data.pagination"
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
// import { useLoading } from 'vue-loading-overlay';
import commonPackage from '@/components/utils/commonPackage';
import pagination from '@/components/Pagination.vue';

export default {
  components: {
    pagination,
  },
  setup() {
    const { getProduct } = commonPackage();
    const data = ref({});

    console.log(getProduct());

    getProduct().then((result) => {
      console.log(result);
      data.value = result.data;
    });

    console.log(data.value);
    // const axios = inject('axios');
    // 常用套件包

    // const $loading = loader();

    // 初始化 get 第一頁
    // axios
    //   .get(`${process.env.VUE_APP_APIPATH}/products?page=1`)
    //   .then((result) => {
    //     $loading.hide();
    //     data.value = result.data;
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.dir(err);
    //   });
    const onChangePage = (page) => {
      console.log(page);

      getProduct(page).then((result) => {
        console.log(result);
        data.value = result.data;
      });
    };
    return { data, onChangePage };
  },
};
</script>
