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
          <h5 class="modal-title"></h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ singleData }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import detailModalModel from '@/components/utils/DetailModalModel';

export default {
  ...detailModalModel,
};

/*
export default {
  setup() {
    const singletData = ref({});
    console.log(singletData);
    // const detailModal = new Modal(document.querySelector('#detailModal'));
    const detailModal = null;
    //  const test = ref({});
    // onMounted(() => {
    //   detailModal = new Modal(document.querySelector('#detailModal'));
    // });

    return {
      singleProductData,
      detailModal,
    };
  },
};

 */
</script>
