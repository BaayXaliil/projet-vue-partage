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
              <md-switch v-model="isInfinity"></md-switch>
            </div>
            <div class="choix_couleur"></div>
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
              <md-switch v-model="isInfinity"></md-switch>
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
              <md-switch v-model="isInfinity"></md-switch>
            </div>
          </div>
        </div>
      </div>
      <div class="drawer_content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPhoto",
  data: () => ({
    drawerVisible: false,
    trie: "",
    isInfinity: false,
  }),
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
}
.content_body .drawer {
  width: 230px;
  background: white !important;
  height: 100px;
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
  /* display: none !important; */
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

.md-switch {
  margin: 0;
}

.drawer_item span span {
  padding-left: 8px;
  font-weight: 700;
}
@media (min-width: 600px) {
  .drawer {
    width: 25rem !important;
  }
}
</style>