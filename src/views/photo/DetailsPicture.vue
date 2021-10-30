<template>
  <div class="container">
    <!-- Header -->
    <div class="content_top">
      <div>
        <md-button @click="retour">
          <img
            src="../../assets/icons/arrow_circle_left_black_24dp.svg"
            alt=""
          />
          <span>Back</span>
        </md-button>
      </div>
    </div>

    <div class="content_bottom">
      <div class="content_item details_image">
        <div class="image">
          <md-card>
            <img
              class="image_background"
              src="../../assets/cards/06-320x200.jpg"
              alt="Card cover image"
            />
          </md-card>
        </div>
        <!-- ... -->
        <div class="description_info">
          <div>
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolorum quae temporibus sapiente velit omnis deserunt error veniam
              accusantium odit vero voluptas, cupiditate odio voluptates sint
              cum magnam consectetur asperiores.</span
            >
          </div>
          <div class="mt-5">
            <span> Auteur: </span>
            <span class="text-blue-400">Cyril Pereira</span>
          </div>
          <div class="mt-5">
            <span> ID: </span>
            <span class="text-gray-400"
              >ff5105d-ebb1-431f-b487-Oec41fbb2bb2</span
            >
          </div>
          <div class="mt-5 buttons">
            <md-button class="button" @click="downloadImage">
              <img
                src="../../assets/icons/arrow_circle_down_black_24dp.svg"
                alt=""
              />
              <span>Télécharger l'échantillon</span>
            </md-button>
            <md-button class="button" @click="favorite = !favorite">
              <img
                src="../../assets/icons/favorite_red_24dp.svg"
                alt=""
                v-if="favorite"
              />
              <img
                src="../../assets/icons/favorite_black_24dp.svg"
                alt=""
                v-if="!favorite"
              />
              <span>Favoris</span>
            </md-button>
            <md-button class="button button-blue">
              <md-icon>delete</md-icon>
              <span class="">Retirer</span>
            </md-button>
          </div>
          <div class="mt-5">
            <div class="title">Description</div>
            <div class="texte">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              deserunt doloribus perspiciatis unde sequi temporibus vero. Neque
              numquam quod aperiam officia, fugiat porro dolorem perspiciatis
              quis blanditiis cum deserunt rem? Deserunt rerum soluta et commodi
              quo earum accusamus autem ipsam.
            </div>
          </div>
          <div class="mt-5">
            <table class="table-auto">
              <thead>
                <tr>
                  <th>Orientation</th>
                  <th>Dimension</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>vertical</td>
                  <td>1280x1024</td>
                  <td>678,00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="tags">
          <div class="tags_title">Mots clefs</div>
          <div class="tag mot_clef">
            <span>Cable</span>
            <span>Police</span>
            <span>Metal</span>
          </div>
        </div>
        <div class="tags categories">
          <div class="tags_title">Catégories:</div>
          <div class="tag text-blue-400">
            <span>Ville</span> /
            <span>Cité</span>
          </div>
        </div>
        <div class="tags border-t border-b">
          <div class="tags_title">De la même catégories</div>
          <div class="tag">
            <!-- <span>Ville </span>
                   <span>Cité</span> -->
          </div>
        </div>
        <div class="tags border-t border-b">
          <div class="tags_title">Du même auteur</div>
          <div clas="tags_content">
            <div class="tags_images">
              <div class="image">
                <img
                  src="../../assets/cards/01-320x200.jpg"
                  alt="Card cover image"
                />
              </div>
              <div class="image">
                <img
                  src="../../assets/cards/16-640x480.jpg"
                  alt="Card cover image"
                />
              </div>
              <div class="image">
                <img
                  src="../../assets/cards/02-320x200.jpg"
                  alt="Card cover image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// var FileSaver = require("file-saver");
// var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
// FileSaver.saveAs(blob, "hello world.txt");

export default {
  name: "DetailsPicture",
  data: () => ({
    favorite: false,
  }),
  methods: {
    downloadImage() {
      let img = document.querySelector(".image_background");
      let imgPath = img.getAttribute("src");
      let filename = imgPath.substring(imgPath.lastIndexOf("/") + 1);
      saveAs(imgPath, filename);
    },
    retour() {
      this.$router.go(-1)
    },
  },
};
</script>

<style>
.container {
  margin: -16px -16px 0;
  padding: 1.25rem;
  padding-top: 0.75rem;
  background-color: #fff;
  color: #1e293b;
}
.content_top .md-button {
  color: inherit;
  height: 40px;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  display: flex;
  align-items: center;
  height: fit-content;
  border-radius: 0.25rem;
  border: none;
  background: #f1f5f9;
  padding: 0.5rem;
  min-width: fit-content;
}
.md-button .md-ripple {
  padding: 0;
}
.md-button .md-ripple:hover {
  background-color: transparent !important;
}
.md-ripple .md-button-content {
  display: flex;
  align-items: center;
}
.content_top .md-button img {
  width: 20px;
  height: 20px;
}
.content_top .md-button span {
  color: #1e293b;
  background-color: transparent !important;
  font-size: 14px;
  margin-left: 8px;
  text-transform: capitalize;
}

.details_image {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.image .md-card {
  margin: 0;
  border-radius: 1rem;
  overflow: hidden;
}
.image .md-card img {
  width: 100%;
}
.content_bottom .content_item {
  padding-top: 1.25em;
}
.description_info {
  display: flex;
  flex-direction: column;
  font-size: 15px;
}
.buttons {
  display: flex;
}
.buttons .md-button {
  color: inherit;
  height: 40px;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  display: flex;
  align-items: center;
  height: fit-content;
  border-radius: 0.25rem;
  border: none;
  background: #f1f5f9;
  padding: 0.5rem;
  min-width: fit-content;
  text-transform: capitalize;
  font-weight: 400;
}
.content_item {
  display: grid;
  grid-auto-flow: row;
  font-size: 15px;
}
.content_item .tag {
  display: flex;
}
.content_item .tags:not(:first-child) {
  margin-top: 1.25em;
}
.content_item .tags .tag span:not(:first-child) {
  margin-left: 1.25rem;
}
.tags .mot_clef span {
  color: #94a3b8;
  cursor: pointer;
}
.tags .tags_images {
  display: flex;
}
.tags_images .image:not(:first-child) {
  margin-left: 0.5rem;
}
.tags_images .image img {
  height: 10rem !important;
  object-fit: cover !important;
  border-radius: 0.25rem !important;
}
.content_item .categories {
  display: flex;
}
.categories .tag {
  margin-left: 1rem;
}
.categories span {
  margin-right: 0.5rem;
  cursor: pointer;
}

.mt-5 {
  margin-top: 1.25rem;
}
.mt-5 > :not(:first-child) {
  margin-left: 1.25rem;
  /* margin-right: 1.25rem; */
}
.mt-5 .title {
  font-weight: 600;
}

.button-blue {
  border: 2px solid #60a5fa !important;
  padding: 6px !important;
}
.button-blue .md-ripple {
  color: #60a5fa;
}
.button-blue .md-icon {
  color: #60a5fa !important;
}
.text-blue-400 {
  color: #60a5fa;
}
.border-b {
  border-bottom: 1px solid #e2e8f0;
}
.border-t {
  border-top: 1px solid #e2e8f0;
}
.texte {
  margin: 0 !important;
}
.text-gray-400 {
  color: #94a3b8;
}

/**
// MEDIA QUERY
*/
@media (max-width: 960px) {
  .details_image {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 430px) {
  .description_info,
  .content_item {
    font-size: 13px;
  }
  .description_info .md-button .md-ripple span {
    display: none;
  }
}
</style>