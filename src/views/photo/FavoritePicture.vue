
<template>
  <div class="container">
    <!-- Header -->
    <div
      class="image_background"
      style="
        background-image: url('https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_1280.jpg');
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      "
    >
      <!-- Background - @formatter:off -->
      <!-- @formatter:on -->
      <div class="text_background">
        <!-- <div class="mt-6 sm:text-2xl text-center tracking-tight text-secondary"> -->
        <div>
          <span class="">Mes favoris</span>
        </div>
      </div>
    </div>
    <div class="content_images">
      <!-- Disposition des images -->
      <div class="grid">
        <div v-for="(image, index) in images" :key="index" class="flex">
          <div class="flex_1">
            <div class="flex_2">
              <a target="_blank" rel="noreferrer" class="flex_2_image">
                <div class="image">
                  <img class="w-ful object-cover border-b" :src="image.img" :class="'image'+index" />
                </div>
              </a>
            </div>
            <div class="flex_3">
              <div class="flex_3_left">
                <md-button>
                  <md-icon>add_shopping_cart</md-icon>
                </md-button>
              </div>
              <div class="flex_3_right">
                <md-button :class="{'md-primary': image.like}"  @click="like(index)">
                  <md-icon class="fa fa-thumbs-o-up"></md-icon>
                </md-button>
                <md-button :class="{'md-accent': image.like}"  @click="like(index)">
                  <md-icon>favorite</md-icon>
                </md-button>
                <md-button class="md-grey">
                  <md-icon>share</md-icon>
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const images = [
  { img: "babashot/yellow-macaw-6607739_640.jpg", like: true },
  { img: "babashot/coffee-beans-6603499_1280.jpg", like: true },
  { img: "babashot/bird-6602049_1280.jpg", like: true },
  { img: "babashot/yellow-macaw-6607739_640.jpg", like: true },
  { img: "babashot/waterfalls-6476336_1280.jpg", like: true },
  { img: "babashot/yellow-macaw-6607739_640.jpg", like: true },
  { img: "babashot/coffee-beans-6603499_1280.jpg", like: true },
];
export default {
  name: "FavoritePicture",
  data: () => ({
    images,
  }),
  methods: {
    updateValue() {
      console.log(this.colors);
    },
    downloadImage(numero) {
      let img = document.querySelector('.image'+numero);
      let imgPath = img.getAttribute("src");
      let filename = imgPath.substring(imgPath.lastIndexOf("/") + 1);
      saveAs(imgPath, filename);
      this.images[numero].download++
    },
    like(numero) {
      this.images[numero].like = !this.images[numero].like; 
    }
  },
};
</script>
<style scoped>
.container {
  margin: -16px -16px 0;
}
.image_background {
  padding: 20rem 4rem 12rem;
}
.text_background {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.25rem;
  /* z-index: 10; */
  position: relative;
}
.text_background span {
  font-size: 1.25rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}

.content_images {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
}

.flex_1 {
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 10%);
  min-width: 275px;
}
.flex_3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
}
.flex_3 .md-button {
  border-radius: 2rem;
  margin: 0;
  font-size: 12px;
  min-width: 30px;
}
.flex_3_left .md-button .md-icon {
  color: #000;
}
.md-grey .md-icon {
  color: #94A3B8;
  font-weight: 600;
}
@media (min-width: 600px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-gap: 0.75rem;
    gap: 0.75rem;
  }
}
@media (min-width: 960px) {
  .text_background span {
    font-size: 6rem;
  }
}
</style>