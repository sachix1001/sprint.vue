<template>
  <div>
    <button @click="getInput">Photo Upload</button>
    <input id="input-file" type="file" class="file-upload" @change="saveFile($event)" />
  </div>
</template>

<script>
export default {
  name: "Upload",
  methods: {
    saveFile(event) {
      const file = event.target.files[0];
      this.$emit("upload-photo", file);
    },
    getInput() {
      return document.getElementById("input-file").click();
    }
  }
};
</script>

<style>
#input-file {
  position: absolute;
  left: -9999999999px;
}
</style>
