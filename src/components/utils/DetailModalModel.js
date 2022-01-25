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

    const editor = ref({
      canEdit: false,
      temp: {},
    });

    const isPhone = (value) => {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    };

    return {
      singleData,
      detailModal,
      editor,
      isPhone,
    };
  },
};
