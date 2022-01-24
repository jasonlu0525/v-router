<template>
  <table class="table table-hover">
    <thead>
      <tr class="">
        <th scope="col">訂單編號</th>
        <th scope="col">聯絡人</th>
        <th scope="col">聯絡地址</th>
        <th scope="col">電子郵件</th>
        <th scope="col">訂單品項</th>
        <th scope="col">訂單日期</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">操作</th>
      </tr>
    </thead>

    <template v-if="orderData.hasOwnProperty('orders') && orderData.orders.length > 0">
      <tbody>
        <tr v-for="(item, index) in orderData.orders" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.address }}</td>
          <td>{{ item.user.email }}</td>

          <td>
            <ul class="ps-0 mb-0">
              <li v-for="(item, index) in Object.values(item.products)" :key="index" class="mb-3">
                {{ item.product.title }}-{{ item.product.price }} 元 * {{ item.qty }}
                {{ item.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ new Date(item.create_at * 1000).toLocaleDateString() }}</td>
          <td :class="{ 'text-success': item.is_paid, 'text-danger': !item.is_paid }">
            {{ item.is_paid ? '已付款' : '未付款' }}
          </td>
          <td :class="{ 'text-success': item.is_paid, 'text-danger': !item.is_paid }">
            <button class="btn btn-info d-block w-100 mb-3 text-white" type="button">
              詳細資訊
            </button>
            <button
              class="btn btn-danger d-block w-100 text-white"
              type="button"
              @click="deleteSingleOrder({ id: item.id, index })"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </template>
    <tbody v-else-if="orderData.hasOwnProperty('orders') && orderData.orders.length === 0">
      <tr>
        <td colspan="8"><h2 class="text-danger text-center">目前還沒有訂單</h2></td>
      </tr>
    </tbody>
  </table>

  <button
    class="btn btn-danger bg-danger"
    type="button"
    @click="deleteAllOrders()"
    :disabled="orderData.hasOwnProperty('orders') && orderData.orders.length === 0"
  >
    刪除全部訂單
    {{
      orderData.hasOwnProperty('orders') && orderData.orders.length === 0
        ? '(目前沒有訂單，因此不能刪除訂單 )'
        : ''
    }}
  </button>
</template>

<script>
import { ref } from 'vue';

// import swal from 'sweetalert';
import commonPackage from '@/components/utils/commonPackage';

// [
//   {
//     create_at: 1642951164,
//     id: '-Mu6WJFgl6i6oFE3wd19',
//     is_paid: false,
//     message: '1',
//     products: {
//       '-Mu6WJH1cncCs3vB1b71': {
//         final_total: 8888888,
//         id: '-Mu6WJH1cncCs3vB1b71',
//         product: {
//           category: '888888',
//           content: '',
//           description: '',
//           id: '-MtcsQnnrgA63Sp2ZvQu',
//           imageUrl: '',
//           is_enabled: 1,
//           num: 2,
//           origin_price: 88888888,
//           price: 8888888,
//           title: '88886',
//           unit: '88888',
//         },
//         product_id: '-MtcsQnnrgA63Sp2ZvQu',
//         qty: 1,
//         total: 8888888,
//       },
//     },
//     total: 8888888,
//     user: {
//       address: 'q',
//       email: 's099113302@gmail.com',
//       name: '1',
//       tel: '0912345678',
//     },
//     num: 1,
//   },
// ];

export default {
  setup() {
    const { getAdminOrder, deleteOrder, deleteOrders } = commonPackage();

    const orderData = ref({});

    getAdminOrder({})
      .then((result) => {
        console.log(36, result);
        orderData.value = result.data;

        console.log(orderData.value);
      })
      .catch((err) => {
        console.dir(err);
      });

    const deleteSingleOrder = (deleteMessage) => {
      deleteOrder({ id: deleteMessage.id })
        .then(() => {
          orderData.value.orders.splice(deleteMessage.index, 1);
        })
        .catch(() => {});
    };

    const deleteAllOrders = () => {
      // if (orderData.value.orders.length === 0) {
      //   return;
      // }

      deleteOrders({})
        .then(() => {
          orderData.value.orders = [];
        })
        .catch(() => {});
    };

    return {
      orderData,
      deleteSingleOrder,
      deleteOrders,
      deleteAllOrders,
    };
  },
};
</script>
