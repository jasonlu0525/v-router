<template>
  <div
    ref="adjustProductModal"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span> {{ adjustProductModalData.action === 'put' ? '編輯產品' : '新增產品' }} </span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              @click="resetDataAnderrorMessage"
            >
              取消
            </button>

            <!-- 資料無誤 -->
            <button
              type="button"
              class="btn btn-primary"
              @click="confirmEditData"
              data-bs-dismiss="modal"
            >
              確認
            </button>
            {{ adjustProductModalData }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 新增 、 編輯 共用操作的 Modal

import { ref } from 'vue';
import { Modal } from 'bootstrap';

// import commonPackage from '@/components/utils/commonPackage';

export default {
  setup() {
    // const {} = commonPackage();
    const adjustProductModal = ref(null); // Modal 的 DOM
    const adjustProductModalData = ref({
      // modal 要用到的資料
      action: '',
      copiedData: {},
      id: '',
      page: 1,
    });

    const genertaeModal = ({
      id, page, coipedData, action,
    }) => {
      new Modal(adjustProductModal.value).show();

      console.log(id, page, coipedData, action);
      adjustProductModalData.value.id = id;
      adjustProductModalData.value.page = page;
      adjustProductModalData.value.copiedData = coipedData;
      adjustProductModalData.value.action = action;
    };

    return { adjustProductModal, genertaeModal, adjustProductModalData };
  },
};
</script>
