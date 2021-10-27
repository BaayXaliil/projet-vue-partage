<template>
  <div class="content">
    <div class="header">
      <div class="content_left">
        <h2>Upload Photo</h2>
        <div class="text_secondaire">
          Ajouter du contenu dans votre espace privé
        </div>
      </div>
      <div class="content_right">
        <md-button>
          <img src="../../assets/icons/description_black_24dp.svg" alt="" />
          <span>Aide</span>
        </md-button>
        <md-button class="ml-12" @click="removeImage">
          <img src="../../assets/icons/highlight_off_black_24dp.svg" alt="" />
          <span>Annuler</span>
        </md-button>
        <md-button class="ml-12 valide" @click="valider">
          <img src="../../assets/icons/save_alt_black_24dp.svg" alt="" />
          <span>valide</span>
        </md-button>
      </div>
    </div>
    <div class="body">
      <div class="content_top">
        <div class="content_left">
          <div class="content_input" @dragover="dragover" @dragleave="dragleave" @drop="drop">
            <div class="input">
              <span>Faire un glisser déposer pour ajouter vos fichiers ou</span>
              <input
                type="file"
                name="upload"
                id="upload"
                @change="onFileChange"
                ref="file"
                multiple
              />
              <label for="upload" class="button">
                <span> Selection multiple </span>
                <!-- <button class="button">Selection multiple</button> -->
              </label>
            </div>
            <div class="indication">
              Les images doivent être au format (.eps ou .jpg) et les vidéos au
              format (.mov ou .mp4)
            </div>
          </div>
        </div>
        <div class="content_right" :class="{ 'no-media': images.length == 0 }">
          <div
            :class="{
              'no-media': images.length == 0,
              media: images.length != 0,
            }"
          >
            <div v-for="(image, index) in images" :key="index" class="image">
              <div v-if="image">
                <img :src="image" />
              </div>
            </div>
            <div v-if="images.length == []">
              <span>AUCUN MEDIA AJOUTE</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content_bottom">
        <div class="content_bottom_body">
          <div class="content_bottom_text">
            <textarea name="tag" id="tag" rows="1">Ajouter un tag</textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UploadPicture",
  data: () => {
    return { images: [], files: [] };
  },
  methods: {
    onFileChange() {
      let vm = this;
      vm.files = this.$refs.file.files
      console.log(vm.files);
      if (!vm.files.length) return;
      for (let i = 0; i < vm.files.length; i++) {
        this.createImage(vm.files[i]);
      }
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        if (e.target?.result) vm.images.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.images = [];
    },
    valider() {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append(file.name, file);
      }
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;      
      this.onFileChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    }
  },
};
</script>

<style>
.content {
  padding: 2rem;
  margin: -16px -16px 0;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.media {
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.75rem;
  flex-direction: row;
}
@media (min-width: 600px) {
  .media {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .content_top {
    grid-auto-flow: column;
  }

  /* .media .image {
    grid-column: span 4 / span 4;
    flex: 1 1 auto;
    display: flex;
  } */
}

@media (max-width: 440px) {
}
@media (max-width: 660px) {
  .header {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 600px) {
  .header .content_right {
    width: 100%;
    margin: 1rem 0 0 !important;
    justify-content: space-between;
  }
  .content_top .content_right.no-media {
    overflow: hidden;
    height: fit-content;
  }
}
@media (max-width: 380px) {
  .md-button .md-ripple span {
    display: none;
  }
}
@media screen and (min-width: 960px) {
  .media {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .media .image {
    grid-column: span 4 / span 4;
    flex: 1 1 auto;
    display: flex;
  }
}
.header .content_left {
  text-align: start;
}
.content_left h2 {
  letter-spacing: -0.025em !important;
  line-height: 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  color: #1e293b;
}
.text_secondaire {
  letter-spacing: -0.025em !important;
  font-weight: 500;
  font-size: 14px;
  color: #64748b;
}
.header .content_right {
  margin-left: 1.5rem;
  display: flex;
}
.body .content_right {
  display: flex;
  height: 80%;
  flex-direction: column;
  overflow: auto;
  padding: 1.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.75rem;
}
.content_right .md-button {
  color: inherit;
  background: transparent;
  border: 1px solid #64748b;
  min-width: 64px;
  padding: 8px 12px;
  height: 40px;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  min-width: 64px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.md-button .md-ripple {
  padding: 0;
}
.md-button .md-ripple:hover {
  background-color: transparent !important;
}
.content_right .md-button img {
  width: 20px;
  height: 20px;
}
.content_right .md-button span {
  color: #1e293b;
  background-color: transparent !important;
  font-size: 14px;
  margin-left: 8px;
  text-transform: capitalize;
}
.valide {
  background: #4f46e5 !important;
  color: #fff !important;
}
.valide span {
  color: #fff !important;
}
.ml-12 {
  margin-left: 12px !important;
}

.bg-gray-100 {
  background-color: #f3f4f6 !important;
}

.bg-green-300 {
  background-color: #60a5fa !important;
}
.body {
  margin: 32px 0 0;
  display: grid;
  grid-gap: 2rem !important;
  gap: 2rem !important;
}
.content_top {
  display: grid;
  gap: 2rem;
}
.content_top .content_left {
  padding: 1.5rem;
  background-color: #fff;
}
.content_left .content_input {
  text-align: start;
  padding: 1.25rem;
  border: 0.5px solid #60a5fa;
  width: fit-content;
  margin: 1.5 rem auto auto;
}
.content_input input {
  display: none;
}

.content_input .input {
  margin-left: 12px;
}
.content_input .input .button {
  border-radius: 0.25rem;
  background: #e2e8f0;
  padding: 0.5rem;
  border: none;
  font-size: 14px;
  color: #1e293b;
  cursor: pointer;
  display: inline-block;
  margin-left: 5px;
}

.content_top .content_right {
  background-color: #fff;
  padding: 1.5rem;
  padding-bottom: 0.75rem;
  padding-right: 0.75rem;
  text-align: start;
}
.content_input .indication {
  margin-left: 12px;
  font-size: 10px;
  font-weight: 600;
}
.content_bottom {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  padding: 1.5rem;
  background: white;
}
.content_bottom_body {
  padding: 24px 24px 16px;
}
.content_bottom_body textarea {
  font-size: 1rem;
  line-height: 1.5rem;
  width: 100%;
  font-weight: 500;
  outline: none;
  border: none;
}
</style>