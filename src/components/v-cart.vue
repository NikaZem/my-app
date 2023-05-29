<template>
  <div class="v-cart">
    <h2>Its Cart</h2>
    <vCartItem v-for="(item, index) in cart_data" :key="item.article" :cart_item_data="item" @deleteFromCart="deleteFromCart(index)"/>
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>
.v-cart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: grey;
  font-size: 20px;
  margin-bottom: 150px;
}
p {
  text-align: center;
  font-size: 26px;
}
</style>
