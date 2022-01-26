<template>
  <table class="table table-hbver">
    <thead>
      <tr>
        <th scope="row">分類</th>
        <td>產品名稱</td>
        <td>原價</td>
        <td>售價</td>
        <td>是否啟用</td>
        <td>編輯</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in adminProductsData.products" :key="index">
        <th scope="row">{{ item.category }}</th>
        <td>{{ item.title }}</td>
        <td>{{ item.origin_price }}</td>
        <td>{{ item.price }}</td>
        <td :class="{ 'text-success': item.is_enabled, 'text-danger': !item.is_enabled }">
          {{ item.is_enabled ? '已啟用' : '未啟用' }}
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary btn-sm">編輯</button
            ><button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="generateModal({ id: item.id, page: item.num - 1 })"
            >
              刪除
            </button>

            <!-- deleteSingleProduct({ id: item.id }) -->
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination
    v-if="adminProductsData.pagination"
    :propPagination="adminProductsData.pagination"
    @emit-change-page="productChangePage"
  ></pagination>
  <deleteModal ref="deleteModalDom" @emit-delete-order="deleteSingleProduct"></deleteModal>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import pagination from '@/components/Pagination.vue';
import deleteModal from '@/components/DeleteModal.vue';
import commonPackage from '@/components/utils/commonPackage';
// import detailOrderModal from '@/components/DetailOrderModal.vue';

export default {
  components: {
    pagination,
    deleteModal,
  },
  setup() {
    const adminProductsData = ref({});
    const deleteModalDom = ref(null);
    const { getAdminProducts, deleteAdminProduct } = commonPackage();

    getAdminProducts({})
      .then((result) => {
        adminProductsData.value = result.data;
        console.log(result);
      })
      .catch((err) => {
        console.dir(err);
      });

    const productChangePage = (page) => {
      getAdminProducts({ page })
        .then((result) => {
          adminProductsData.value = result.data;
          console.log(result);
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    const deleteSingleProduct = ({
      id,
      page = adminProductsData.value.pagination.current_page,
    }) => {
      deleteAdminProduct({ id })
        .then(() => getAdminProducts({ page }))
        .catch((err) => {
          console.dir(err);
        })
        .then((result) => {
          adminProductsData.value = result.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    const generateModal = (delteParameter) => {
      //
      // deleteModalDom.value.delteParameter.genertaeModal(delteParameter);
      const test = new Modal(deleteModalDom.value);
      deleteModalDom.value.delteParameter = delteParameter;

      console.log(deleteModalDom, delteParameter);
      test.show();
    };
    onMounted(() => {
      console.log(deleteModalDom);
      // deleteModalDom.value.a = new Modal(document.querySelector('#delProductModal')).show();
    });

    return {
      adminProductsData,
      productChangePage,
      deleteSingleProduct,
      generateModal,
    };
  },
};
</script>
