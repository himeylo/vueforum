<template>
    <div class="col-full">
      <form @submit.prevent="save">
        <div class="form-group">
          <textarea v-model="text" class="form-input" />
        </div>
        <div class="form-actions">
          <button class="form-input">Submit post</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = 'gggg' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
      }
      this.$emit('save', { post }) // access under eventData.post
      // this.posts.push(post)
      // this.thread.posts.push(postId)

      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>
