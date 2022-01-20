import { useLoading } from 'vue-loading-overlay';

// import swal from 'sweetalert';

import axios from 'axios';

export default function () {
  // API route
  const apiPath = process.env.VUE_APP_APIPATH;

  // 啟用 loader 的 方法
  const loader = () => useLoading().show();

  // const swalTrigger = (title, text, status) => {
  //   console.log(title, text, status);
  //   swal(title, text, status);
  // };

  // 將非同步處理成 同步，並且將參數以物件解構的方式帶入，切換 requets 的方法
  async function taskQueue(
    // 解構
    {
      method, path, config = '', generateLoader = true,
    },
  ) {
    const $loader = generateLoader ? loader() : null;
    const response = await axios[method](`${apiPath}/${path}`, config);
    const { data } = response;
    console.log(data);
    // 系統推播訊息
    if (method !== 'get') {
      // swalTrigger(
      //   data.message,
      //   `目前購物車內已有 ${data.data.qty}件 ${data.data.product ? data.data.product.title : ''} `,
      //   data.success ? 'success' : 'error',
      // );
    }
    if (generateLoader) {
      $loader.hide();
    }
    // $loader === true ? $loader.hide() : '';
    return response;
  }

  const getProduct = (page = 1, generateLoader) => taskQueue({
    method: 'get',
    path: `products?page=${page}`,
    generateLoader,
  });

  const postCart = (productInfo, generateLoader) => taskQueue({
    method: 'post',
    path: 'cart',
    config: {
      data: productInfo,
    },
    generateLoader,
  });
  const getCart = (generateLoader) => taskQueue({
    method: 'get',
    path: 'cart',
    generateLoader,
  });

  const putCart = (productInfo, generateLoader) => taskQueue({
    method: 'put',
    path: `cart/${productInfo.id}`,
    config: {
      data: productInfo.config,
    },
    generateLoader,
  });

  const deleteCart = (id, generateLoader) => taskQueue({
    method: 'delete',
    path: `cart/${id}`,
    generateLoader,
  });

  return {
    loader,
    getProduct,

    postCart,
    getCart,
    putCart,
    deleteCart,
  };
}
