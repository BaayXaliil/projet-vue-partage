<template>
  <div class="container">
    <div class="content_search">
      <div class="search">
        <input type="text" placeholder="Recherche" />
        <md-icon>search</md-icon>
      </div>
    </div>
    <div class="content_body">
      <div class="drawer" :class="{ hidden: drawerVisible }">
        <div class="header">
          <div>
            <img src="../../assets/babashot/filter.png" alt="" />
            <span>Filtre</span>
          </div>
          <button class="button" @click="drawerVisible = true">
            <md-icon>close</md-icon>
          </button>
        </div>
        <div class="drawer_body">
          <div class="trier_par">
            <span>
              <img src="../../assets/icons/unfold_more_black_24dp.svg" alt="" />
              Trier par
            </span>
            <div class="select-style">
              <select
                name="trie"
                id="trie"
                placeholder="Trier par"
                v-model="trie"
              >
                <option value="image">Image</option>
                <option value="select13">Selcct 1-3</option>
              </select>
            </div>
          </div>
          <div class="drawer_item palette_couleur">
            <div class="choix">
              <div class="content_left">
                <img
                  src="../../assets/icons/format_paint_black_24dp.svg"
                  alt=""
                />
                <div class="texte">Couleur dominante</div>
              </div>
              <md-switch v-model="switchColor" class="md-primary"></md-switch>
            </div>
            <div class="choix_couleur">
              <!-- <sketch-picker :value="colors" @input="updateValue"></sketch-picker> -->
              <chrome-picker v-model="colors" @input="updateValue" />
            </div>
          </div>
          <div class="drawer_item">
            <span>
              <img src="../../assets/icons/open_with_black_24dp.svg" alt="" />
              <span> Orientation </span>
            </span>
            <div class="select-style">
              <select
                name="trie"
                id="trie"
                placeholder="Trier par"
                v-model="trie"
              >
                <option value="image">Tous</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </div>
          <div class="drawer_item">
            <div class="choix">
              <div class="content_left">
                <img src="../../assets/icons/groups_black_24dp.svg" alt="" />
                <div class="texte">Personne</div>
              </div>
              <md-switch v-model="switchPerson" class="md-primary"></md-switch>
            </div>
          </div>
          <div class="drawer_item">
            <div class="choix">
              <div class="content_left">
                <img
                  src="../../assets/icons/my_location_black_24dp.svg"
                  alt=""
                />
                <div class="texte">Contenu centrè</div>
              </div>
              <md-switch v-model="switchContenu" class="md-primary"></md-switch>
            </div>
          </div>
        </div>
      </div>
      <div class="drawer_content">
        <div class="flex h-full">
          <div class="grid">
            <div v-for="(image, index) in images" :key="index" class="flex">
              <div class="flex_1">
                <!-- Bloc a montrer lors la souris survole l'image -->
                <div class="flex_2">
                  <a class="flex_2_image" target="_blank" rel="noreferrer">
                    <div class="image">
                      <img
                        :src="image.img"
                        :class="'image'+index"
                      />
                    </div>
                  </a>
                </div>
                <div class="flex_3 rounded">
                  <div class="buttons">
                    <div>
                      <md-button class="md-icon-button" :class="{'md-primary': image.like}"  @click="like(index)">
                        <md-icon>favorite</md-icon>
                      </md-button>
                      <md-tooltip md-direction="left">aimer</md-tooltip>
                    </div>
                    <div>
                      <md-button class="md-icon-button md-succes">
                        <md-icon>share</md-icon>
                      </md-button>
                      <md-tooltip md-direction="left">partager</md-tooltip>
                    </div>
                  </div>
                </div>
                <!-- Bloc infos au bas des images -->
                <div class="flex_4">
                  <div class="flex">
                    <md-button class="button_primary">
                      <md-icon>add_shopping_cart</md-icon>
                      <span>Ajouter au panier</span>
                    </md-button>
                  </div>
                  <div class="flex">
                    <md-button @click="downloadImage(index)">
                      <md-icon>download</md-icon>
                      <span>{{ image.download }}</span>
                    </md-button>
                    <md-button class="like">
                      <md-icon>favorite</md-icon>
                      <span>{{ image.likes }}</span>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chrome } from "vue-color";
import { Sketch } from "vue-color";
let FileSaver = require("file-saver");


const images = [
  { img: "babashot/coffee-beans-6603499_1280.jpg", download: 1215, likes: 2500, like: true },
  { img: "babashot/rabbits-4890861_1280.jpg", download: 615, likes: 2133, like: true },
  { img: "babashot/coffee-beans-6603499_1280.jpg", download: 435, likes: 1243, like: true },
  { img: "babashot/street-6099209_1920.jpg", download: 123, likes: 8000, like: true },
  { img: "babashot/yellow-macaw-6607739_640.jpg", download: 897, likes: 867, like: true },
  { img: "babashot/waterfalls-6476336_1280.jpg", download: 15, likes: 55, like: true },
  { img: "babashot/rabbits-4890861_1280.jpg", download: 125, likes: 213, like: true },
  { img: "babashot/bird-6602049_1280.jpg", download: 150, likes: 233, like: true },
  { img: "babashot/waterfalls-6476336_1280.jpg", download: 1655, likes: 433, like: true },
  { img: "babashot/yellow-macaw-6607739_640.jpg", download: 15, likes: 765, like: true },
  { img: "babashot/street-6099209_1920.jpg", download: 45, likes: 765, like: true },
  { img: "babashot/street-6099209_1920.jpg", download: 15, likes: 934, like: true },
  { img: "babashot/waterfalls-6476336_1280.jpg", download: 15, likes: 321, like: true },
  { img: "babashot/yellow-macaw-6607739_640.jpg", download: 8500, likes: 10000, like: true },
  { img: "babashot/street-6099209_1920.jpg", download: 435, likes: 653, like: true },
  { img: "babashot/yellow-macaw-6607739_640.jpg", download: 678, likes: 764, like: true },
];
export default {
  name: "SearchPhoto",
  components: {
    "sketch-picker": Sketch,
    "chrome-picker": Chrome,
  },
  data: () => ({
    images,
    drawerVisible: false,
    trie: "",
    isInfinity: false,
    switchColor: false,
    switchPerson: false,
    switchContenu: false,
    colors: "#194d33",
  }),
  created: {

  },
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
      if (this.images[numero].like) {
        this.images[numero].likes--;
      } else
        this.images[numero].likes++;
      this.images[numero].like = !this.images[numero].like; 
    }
  },
};
</script>
<style scoped>
.container {
  margin: 0;
  min-height: calc(100vh - 416px) !important;
}
.content_search .search {
  position: relative;
}
.content_search .search input {
  width: 100%;
  border: 1px solid #cbd5e1;
  padding: 14px 16px;
  padding-right: 50px;
  border-radius: 23px;
  font-size: 20px;
  outline: none;
  font-weight: 500;
}
input::placeholder {
  color: #cbd5e1;
}
.content_search .search input:focus {
  border: 1px solid #4f46e5;
}
.search .md-icon {
  position: absolute;
  top: 15px;
  right: 16px;
  height: 1.75rem;
  width: 1.75rem;
  font-size: 30px !important;
  color: #94a3b8 !important;
}

.content_body {
  margin: 16px -16px;
  position: relative;
  display: flex;
  flex-direction: row;
}
.drawer {
  width: 35rem !important;
  background: white !important;
  min-width: 20rem;
}
.drawer {
  display: block;
  position: relative !important;
  /* top: 0; */
  height: fit-content !important;
  /* bottom: 0; */
  z-index: 2;
  overflow: hidden;
  outline: 0;
  box-sizing: border-box;
  background-color: white;
  color: #1e293b;
  border-right: solid 1px #e2e8f0;
  height: auto !important;
}
.drawer .header {
  padding: 12px;
  background: #dbeafe;
  display: flex;
  justify-content: space-between;
}
.header div {
  width: 2rem;
  display: flex;
}
.header span {
  font-weight: 700;
  color: #1e293b;
  padding: 0.5rem 0 0 0.5rem;
  font-size: 1rem;
}
.drawer .button {
  border: none;
  border-radius: 50%;
  background: inherit;
  padding: 0;
  cursor: pointer;
}

.content_body .drawer.hidden {
  display: none !important;
  min-width: 0;
  width: 0 !important;
  transition: width 0.1s;
}

.drawer .drawer_body {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.drawer_body .trier_par {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  display: flex;
  flex-direction: column;
}
.trier_par span,
.drawer_item span {
  display: inline-flex;
  padding-left: 0.25rem;
  font-weight: 600;
  font-size: 1rem;
}

.select-style {
  position: relative;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  background-color: #fff;
  background: #fff;
  position: relative;
  display: inline-block;
}

.select-style select {
  padding: 5px 8px;
  width: 100%;
  border: none;
  box-shadow: none;
  background-color: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-height: 48px;
  outline: none;
  padding: 16px;
  cursor: pointer;
  font-size: 16px;
  color: #94a3b8;
  min-height: 48px;
}

.select-style:after {
  top: 50%;
  left: 90%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: transparent;
  border-top-color: #64748b;
  border-width: 5px;
  margin-top: -2px;
  z-index: 100;
}
/* #F2F4F6 */

.select-style .selector-options {
  list-style: none;
  padding: 15px 0 !important;
  margin: 0;
  background: #fff;
  color: #1e293b;
  border-radius: 4px;
  z-index: 1;
  width: 96%;
  position: absolute;
  left: 2%;
  top: 35%;
}

.select-style .selector-options li {
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.select-style .selector-options li:hover {
  background: #f2f4f6 !important;
}
.drawer_item {
  margin: 24px 0 0;
  padding: 16px 24px 0;
  border-top: 2px solid #e2e8f0;
  text-align: start;
}
.choix {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.choix_couleur .vc-chrome {
  width: 100%;
  margin: 1rem 0 0;
}
.choix .content_left {
  display: flex;
  align-items: end;
}
.content_left .texte {
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  padding-left: 12px;
}

.drawer_content {
  width: fit-content;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 0.75rem;
  gap: 0.75rem;
}

.flex {
  position: relative;
  display: flex;
}
.flex_1 {
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 10%);
  min-width: 275px;
}

.flex_3 {
  position: absolute;
  top: 18%;
  left: 92%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  opacity: 0;
}
.buttons {
  width: 40px !important;
}
.buttons .md-icon-button {
  margin: 0;
}
.md-succes .md-icon {
  color: #4ade80;
}
.like .md-icon {
  color: #60a5fa;
}
.flex_4 .md-button {
  border-radius: 2rem;
  margin: 0;
  font-size: 12px;
  min-width: 30px;
}
.button_primary {
  color: #4f46e5;
  text-transform: capitalize;
}
.button_primary .md-icon {
  color: #4f46e5;
}
.rounded {
  border-radius: 0.25rem !important;
}
.flex_1:hover .flex_3 {
  opacity: 1 !important;
}
.flex_4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
}
.md-switch {
  margin: 0;
}

.drawer_item span span {
  padding-left: 8px;
  font-weight: 700;
}
@media  (min-width: 1155px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 700px) {
  .drawer {
    width: 35rem !important;
    min-width: 25rem;
  }
}
@media (max-width: 610px) {
  .content_body {
    flex-direction: column;
  }
  .drawer {
    width: 100% !important;
  }
  .drawer_content {
    margin-top: 16px;
  }
}
</style>