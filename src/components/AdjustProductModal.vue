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
        <div class="modal-body" v-if="adjustProductModalData.copiedData">
          <Form v-slot="{ errors }" @submit="onSubmit">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-1">
                  <div class="form-group">
                    <label for="imageUrl-main">新增主圖網址</label>
                    <field
                      id="imageUrl-main"
                      type="text"
                      class="form-control"
                      placeholder="請輸入主圖連結"
                      v-model="adjustProductModalData.copiedData.email"
                      :class="{ 'is-invalid': errors['主圖網址'] }"
                      rules="required"
                      name="主圖網址"
                    >
                    </field>
                    <error-message name="主圖網址" class="invalid-feedback"></error-message>
                    <img class="img-fluid" alt="" />
                  </div>
                </div>
                <div>
                  <button type="button" class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
                <div class="mb-3">
                  <button type="button" class="btn btn-outline-danger btn-sm d-block w-100">
                    刪除圖片
                  </button>
                </div>

                <div class="mb-1">
                  <div class="form-group">
                    <label for="imageUrl-sub">新增副圖網址</label>
                    <input
                      id="imageUrl-sub"
                      type="text"
                      class="form-control"
                      placeholder="請輸入副圖連結"
                    />
                  </div>
                  <img class="img-fluid" alt="" />
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="addSubImg"
                  >
                    新增圖片
                  </button>
                </div>
                <div>
                  <ol class="overflow-auto">
                    <!-- <li
                    v-for="(item, index) in subProductUrl.collection"
                    :key="index"
                    @click="selectSubImage(item)"
                  >
                    {{ item }}
                  </li> -->
                  </ol>

                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="removeSubImg"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <field
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    v-model="adjustProductModalData.copiedData.title"
                    :class="{
                      'is-invalid': errors['標題'],
                    }"
                    rules="required"
                    name="標題"
                  ></field>
                  <error-message class="invalid-feedback" name="標題"> </error-message>

                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="category">分類</label>
                      <field
                        id="category"
                        type="text"
                        class="form-control"
                        placeholder="請輸入分類"
                        v-model="adjustProductModalData.copiedData.category"
                        :class="{ 'is-invalid': errors['分類'] }"
                        rules="required"
                        name="分類"
                      ></field>
                      <error-message class="invalid-feedback" name="分類"> </error-message>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="unit">單位</label>
                      <field
                        id="unit"
                        type="text"
                        class="form-control"
                        placeholder="請輸入單位"
                        v-model="adjustProductModalData.copiedData.unit"
                        :class="{ 'is-invalid': errors['單位'] }"
                        rules="required"
                        name="單位"
                      ></field>
                      <error-message class="invalid-feedback" name="單位"> </error-message>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">原價</label>
                      <field
                        id="origin_price"
                        type="number"
                        min="0"
                        class="form-control"
                        placeholder="請輸入原價"
                        v-model="adjustProductModalData.copiedData.origin_price"
                        :class="{
                          'is-invalid':
                            errors['原價'] && !adjustProductModalData.copiedData.origin_price,
                        }"
                        rules="required"
                        name="原價"
                      ></field>
                      <error-message class="invalid-feedback" name="原價"> </error-message>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">售價</label>
                      <field
                        id="price"
                        type="number"
                        min="0"
                        class="form-control"
                        placeholder="請輸入售價"
                        v-model="adjustProductModalData.copiedData.price"
                        :class="{ 'is-invalid': errors['售價'] }"
                        rules="required"
                        name="售價"
                      ></field>
                      <error-message class="invalid-feedback" name="售價"> </error-message>
                    </div>
                  </div>
                  <hr />

                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <field
                      id="description"
                      type="text"
                      class="form-control"
                      placeholder="請輸入產品描述"
                      v-model="adjustProductModalData.copiedData.description"
                      :class="{ 'is-invalid': errors['產品描述'] }"
                      rules="required"
                      as="textarea"
                      name="產品描述"
                    >
                    </field>
                    <error-message class="invalid-feedback" name="產品描述"> </error-message>
                  </div>
                  <div class="form-group">
                    <label for="content">說明內容</label>
                    <field
                      id="content"
                      type="text"
                      class="form-control"
                      placeholder="請輸入說明內容"
                      v-model="adjustProductModalData.copiedData.content"
                      :class="{ 'is-invalid': errors['說明內容'] }"
                      rules="required"
                      as="textarea"
                      name="說明內容"
                    >
                    </field>
                    <error-message class="invalid-feedback" name="說明內容"> </error-message>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input
                        id="is_enabled"
                        class="form-check-input"
                        type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        v-model="adjustProductModalData.copiedData.is_enabled"
                        name="is_enabled"
                      />
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                @click="resetForm()"
              >
                取消
              </button>

              <!-- 資料無誤 -->
              <button type="submit" class="btn btn-primary">確認</button>

              {{ adjustProductModalData }}
            </div></Form
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 新增 、 編輯 共用操作的 Modal

import { ref, onUpdated, onBeforeUnmount } from 'vue';
import { Modal } from 'bootstrap';
import { useForm } from 'vee-validate';

export default {
  setup() {
    const adjustProductModal = ref(null); // Modal 的 DOM
    const adjustProductModalData = ref({
      // modal 要用到的資料
      action: '',
      copiedData: {
        id: '',
      },
      id: '',
      page: 1,
    });

    const { resetForm, errors } = useForm();
    // const { handleSubmit } = useForm();
    const onSubmit = () => {
      console.log('success', errors);
    };

    const genertaeModal = ({
      id, page, coipedData, action,
    }) => {
      new Modal(adjustProductModal.value).show();

      console.log(id, page, coipedData, action);

      adjustProductModalData.value.copiedData = coipedData;
      adjustProductModalData.value.id = id;
      adjustProductModalData.value.page = page;
      adjustProductModalData.value.action = action;
    };
    onBeforeUnmount(() => {
      // resetForm();
    });
    onUpdated(() => {
      resetForm();
    });

    return {
      adjustProductModal,
      genertaeModal,
      adjustProductModalData,
      onSubmit,
      resetForm,
    };
  },
};
</script>
