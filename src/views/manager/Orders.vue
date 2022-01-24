<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orderData" :key="index">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>

  qqq
</template>

<script>
import { ref } from 'vue';

// import swal from 'sweetalert';
import commonPackage from '@/components/utils/commonPackage';

export default {
  setup() {
    const { getAdminOrder } = commonPackage();

    const orderData = ref({});
    //   const token = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, '$1');

    getAdminOrder({})
      .then((result) => {
        console.log(36, result);
        orderData.value = result.data;

        console.log(orderData.value);
      })
      .catch((err) => {
        console.dir(err);
      });

    return { orderData };
  },
};
</script>
