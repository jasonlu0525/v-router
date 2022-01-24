<template>
  <router-link to="/dashboard">orders</router-link> |
  <router-link to="/dashboard/product">product</router-link> |
  <router-view />
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

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, '$1');

    console.log(token);
    // IIFE
    (() => {
      postLoginCheck({ token })
        .then((result) => {
          // console.log(swal.getState());
          // if (swal.getState().isOpen) {
          //   swal.close();
          // }
          console.log(result);
        })
        .catch((err) => {
          router.push('/login');
          console.dir(err);
        });
    })(token);
    return {};
  },
};
</script>
