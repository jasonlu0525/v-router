<template>
  <div
    class="modal fade"
    id="detailModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">{{ singleProductData.title }}</h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6">
              <img :src="singleProductData.imageUrl" />
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-between">
              <div>
                <span class="badge bg-primary mb-3">
                  {{ singleProductData.category }}
                </span>
                <p class="mb-3">{{ singleProductData.description }}</p>
                <p>
                  NT$ {{ singleProductData.price }}
                  <del>{{ singleProductData.origin_price }}</del>
                </p>
              </div>

              <button
                type="button"
                class="btn btn-primary"
                @click="
                  postCart({
                    product_id: singleProductData.id,
                    qty: 1,
                    singleProductData,
                  })
                "
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// onMounted
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import commonPackage from '@/components/utils/commonPackage';
// ;

export default {
  setup() {
    const { postCart, getCart } = commonPackage();
    const singleProductData = ref({});
    // const detailModal = new Modal(document.querySelector('#detailModal'));
    let detailModal = null;

    onMounted(() => {
      detailModal = new Modal(document.querySelector('#detailModal'));
    });

    return {
      singleProductData,
      detailModal,
      postCart,
      getCart,
    };
  },
};
</script>
