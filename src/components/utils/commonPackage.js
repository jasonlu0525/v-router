import { useLoading } from 'vue-loading-overlay';

import axios from 'axios';

export default function () {
  const path = process.env.VUE_APP_APIPATH;

  const loader = () => useLoading().show();

  const getProduct = (page = 1) => {
    const $loader = loader();
    console.log('loader');

    async function API() {
      const response = await axios.get(`${path}/products?page=${page}`);

      $loader.hide();
      return response;
    }

    return API();
  };
  return {
    loader,
    getProduct,
  };
}
