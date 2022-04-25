<template>
  <!-- <div v-if="category" class="col-full push-top">

  </div>

  <div class="col-full push-top"> -->
    <h1>{{ category.name }}</h1>
    <ForumList
      :title="category.name"
      :forums="getForumsForCategory(category)" />
  <!-- </div> -->
</template>

<script>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'
export default {
  components: { ForumList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return sourceData.categories.find(category => category.id === this.id) // also available under this.$route.params.id
    }
  },
  methods: {
    getForumsForCategory (category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>
