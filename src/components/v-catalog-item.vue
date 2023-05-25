<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="('../assets/images/'+product_data.image)" alt="picture">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <button class="v-catalog-item__add_to_cart_btn" @click="sendDataToPerant">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    sendDataToPerant () {
      this.$emit('sendDataToPerant', this.product_data.article)
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px grey;
    padding: 20px;
    margin: 20px;
}
</style>
