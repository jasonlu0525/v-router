import { ref } from 'vue';

export default {
  setup() {
    const singleData = ref({});
    // const detailModal = new Modal(document.querySelector('#detailModal'));
    const detailModal = null;
    //  const test = ref({});
    // onMounted(() => {
    //   detailModal = new Modal(document.querySelector('#detailModal'));
    // });

    return {
      singleData,
      detailModal,
    };
  },
};
