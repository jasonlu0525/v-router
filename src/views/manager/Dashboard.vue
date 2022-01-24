<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <router-link to="/dashboard">orders</router-link> |
      <router-link to="/dashboard/product">product</router-link> |
    </div>
    <router-view />
  </div>
</template>
<script>
// import { ref } from 'vue';
import { useRouter } from 'vue-router';

// import swal from 'sweetalert';
import commonPackage from '@/components/utils/commonPackage';

export default {
  setup() {
    const { postLoginCheck } = commonPackage();
    const router = useRouter();

    postLoginCheck({})
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        router.push('/login');
        console.dir(err);
      });

    return {};
  },
};
</script>
