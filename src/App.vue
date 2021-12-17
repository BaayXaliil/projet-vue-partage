<template>
  <div class="page-container">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <md-app md-mode="reveal">
      <md-app-toolbar>
        <md-button
          class="md-icon-button menu"
          @click="menuVisible = !menuVisible"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <div class="md-title title_dashboard">BabaShop</div>
        <div class="navigation-orizontale">
          <div class="navigation_item">
            <!-- <div class="item_wrapper"> -->
            <md-menu md-size="medium" md-align-trigger>
              <md-button md-menu-trigger :md-ripple="false">
                <div class="item_wrapper">
                  <div class="item_icon">
                    <md-icon class="fa fa-pie-chart"></md-icon>
                  </div>
                  <div class="item_title">
                    <span>Tableau de bord</span>
                  </div>
                </div>
              </md-button>

              <md-menu-content>
                <md-menu-item>
                  <div class="item_wrapper">
                    <div class="item_icon">
                      <md-icon class="fa fa-area-chart"></md-icon>
                    </div>
                    <div class="item_title">
                      <span>Analytique</span>
                    </div>
                  </div>
                </md-menu-item>
                <md-menu-item>
                  <div class="item_wrapper">
                    <div class="item_icon">
                      <md-icon class="fa fa-money"></md-icon>
                    </div>
                    <div class="item_title">
                      <span>Finance</span>
                    </div>
                  </div>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>
          <div class="navigation_item">
            <router-link to="/upload-photo" class="link">
              <div class="item_wrapper">
                <div class="item_icon">
                  <md-icon class="fa fa-picture-o"></md-icon>
                </div>
                <div class="item_title">
                  <span>Photo</span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="navigation_item">
            <div class="item_wrapper">
              <div class="item_icon">
                <md-icon class="fa fa-film"></md-icon>
              </div>
              <div class="item_title">
                <span>Vidéo</span>
              </div>
            </div>
          </div>
          <div class="navigation_item">
            <div class="item_wrapper">
              <div class="item_icon">
                <md-icon class="fa fa-bars"></md-icon>
              </div>
              <div class="item_title">
                <span>Texture</span>
              </div>
            </div>
          </div>
        </div>
        <div class="options">
          <div class="option_item">
            <div class="option_icon">
              <md-menu md-size="medium" md-align-trigger>
                <md-button
                  class="md-icon-button"
                  md-menu-trigger
                  :md-ripple="false"
                >
                  <img src="./assets/flags/US.svg" alt="" />
                </md-button>

                <md-menu-content>
                  <md-menu-item>
                    <div class="item_wrapper">
                      <div class="item_icon">
                        <img src="./assets/flags/US.svg" alt="" />
                      </div>
                      <div class="item_title">
                        <span>Anglais</span>
                      </div>
                    </div>
                  </md-menu-item>
                  <md-menu-item>
                    <div class="item_wrapper">
                      <div class="item_icon">
                        <img src="./assets/flags/TR.svg" alt="" />
                      </div>
                      <div class="item_title">
                        <span>Turquie</span>
                      </div>
                    </div>
                  </md-menu-item>
                </md-menu-content>
              </md-menu>
            </div>
          </div>
          <div class="option_item">
            <div class="option_icon">
              <md-badge class="md-primary" md-content="5">
                <md-button class="md-icon-button">
                  <img src="./assets/icons/shopping_cart_black.svg" alt="" />
                </md-button>
              </md-badge>
            </div>
          </div>
          <div class="option_item">
            <div class="option_icon">
              <md-button class="md-icon-button">
                <img src="./assets/icons/zoom_out_map_black_24dp.svg" alt="" />
              </md-button>
            </div>
          </div>
          <div class="option_item">
            <div class="option_icon">
              <md-menu md-size="auto" :md-offset-x="-320" :md-offset-y="0">
                <md-button class="md-icon-button" md-menu-trigger>
                  <img src="./assets/icons/bookmark_border_black_24dp.svg" />
                </md-button>

                <md-menu-content>
                  <div class="header">
                    <div class="header_content_left">
                      <span>Shortcuts (12)</span>
                    </div>
                    <div class="header_content_right">
                      <span>
                        <md-button class="md-icon-button">
                          <md-icon class="fa fa-pencil-square-o"></md-icon>
                        </md-button>
                      </span>
                      <span>
                        <md-button class="md-icon-button">
                          <md-icon class="fa fa-plus-circle"></md-icon>
                        </md-button>
                      </span>
                    </div>
                  </div>
                  <div class="menu_items">
                    <md-menu-item class="border-b border-r">
                      <router-link to="/" class="item">
                        <div class="item_icon">
                          <md-button class="md-icon-button md-raised" disabled>
                            <md-icon class="fa fa-pie-chart"></md-icon>
                          </md-button>
                        </div>
                        <div class="item_title">Tableau de bord</div>
                        <div class="item_subtitle">Statistiques Globales</div>
                      </router-link>
                    </md-menu-item>
                    <md-menu-item class="border-b border-r">
                      <router-link to="/" class="item">
                        <div class="item_icon">
                          <md-button class="md-icon-button md-raised" disabled>
                            <md-icon>home</md-icon>
                          </md-button>
                        </div>
                        <div class="item_title">Home</div>
                        <div class="item_subtitle">Ecran d'accueil</div>
                      </router-link>
                    </md-menu-item>
                    <md-menu-item class="border-b border-r">
                      <router-link to="/" class="item">
                        <div class="item_icon">
                          <md-button class="md-icon-button md-raised" disabled>
                            <md-icon class="fa fa-user"></md-icon>
                          </md-button>
                        </div>
                        <div class="item_title">Contact Us</div>
                        <div class="item_subtitle">Contacter le service</div>
                      </router-link>
                    </md-menu-item>
                    <md-menu-item class="border-b border-r">
                      <router-link to="/about" class="item">
                        <div class="item_icon">
                          <md-button class="md-icon-button md-raised" disabled>
                            <md-icon class="fa fa-building"></md-icon>
                          </md-button>
                        </div>
                        <div class="item_title">À propos</div>
                        <div class="item_subtitle">Nos services</div>
                      </router-link>
                    </md-menu-item>
                    <md-menu-item class="border-b border-r">
                      <router-link to="/search-photo" class="item">
                        <div class="item_icon">
                          <md-button class="md-icon-button md-raised" disabled>
                            <md-icon>search</md-icon>
                          </md-button>
                        </div>
                        <div class="item_title">Rechercher des images</div>
                        <div class="item_subtitle">Espace de recherche</div>
                      </router-link>
                    </md-menu-item>
                    <md-menu-item class="border-b border-r">
                      <router-link to="/details-picture" class="item">
                        <div class="item_icon">
                          <md-button class="md-icon-button md-raised" disabled>
                            <md-icon class="fa fa-cog"></md-icon>
                          </md-button>
                        </div>
                        <div class="item_title">Détails image</div>
                        <div class="item_subtitle">Prévisualisation d'une image</div>
                      </router-link>
                    </md-menu-item>
                    <md-menu-item class="border-b border-r">
                      <router-link to="/" class="item">
                        <div class="item_icon">
                          <md-button class="md-icon-button md-raised" disabled>
                            <md-icon class="fa fa-pie-chart"></md-icon>
                          </md-button>
                        </div>
                        <div class="item_title">Tableau de bord</div>
                        <div class="item_subtitle">Statistiques Globales</div>
                      </router-link>
                    </md-menu-item>
                    <md-menu-item class="border-b border-r">
                      <router-link to="/" class="item">
                        <div class="item_icon">
                          <md-button class="md-icon-button md-raised" disabled>
                            <md-icon class="fa fa-pie-chart"></md-icon>
                          </md-button>
                        </div>
                        <div class="item_title">Tableau de bord</div>
                        <div class="item_subtitle">Statistiques Globales</div>
                      </router-link>
                    </md-menu-item>
                  </div>
                </md-menu-content>
              </md-menu>
            </div>
          </div>
          <div class="option_item">
            <div class="option_icon">
              <md-badge md-content="5">
                <md-button class="md-icon-button">
                  <img
                    src="./assets/icons/mail_outline_black_24dp.svg"
                    alt=""
                  />
                </md-button>
              </md-badge>
            </div>
          </div>
          <div class="option_item">
            <div class="option_icon">
              <md-badge md-content="5">
                <md-button class="md-icon-button">
                  <img
                    src="./assets/icons/notifications_none_black_36dp.svg"
                    alt=""
                  />
                </md-button>
              </md-badge>
            </div>
          </div>
          <div class="option_item">
            <div class="option_icon">
              <div class="active_user"></div>
              <md-avatar>
                <img src="./assets/avatars/brian-hughes.jpg" alt="Avatar" />
              </md-avatar>
            </div>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <!-- <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar> -->
        <div class="navigation_verticale">
          <div class="navigation_item">
            <div class="navigation_item_row">
              <div class="navigation_item_title">
                <div class="title">Tableau de bord</div>
              </div>
            </div>
            <div class="navigation_item_row mb-4">
              <div class="navigation_item_title navigation_item_wrapper">
                <div class="item_wrapper">
                  <div class="item_icon">
                    <md-icon class="fa fa-pie-chart"></md-icon>
                  </div>
                  <div class="item_title">
                    <span>Tableau de bord</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="navigation_item_row mb-4">
              <div class="navigation_item_title navigation_item_wrapper">
                <div class="item_wrapper">
                  <div class="item_icon">
                    <md-icon class="fa fa-money"></md-icon>
                  </div>
                  <div class="item_title">
                    <span>Finance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navigation_item">
            <div class="navigation_item_row">
              <div class="navigation_item_title">
                <div class="title">Parametrage</div>
              </div>
            </div>
            <div class="navigation_item_row mb-4">
              <div class="navigation_item_title navigation_item_wrapper">
                <div class="item_wrapper">
                  <div class="item_icon">
                    <md-icon class="fa fa-cog"></md-icon>
                  </div>
                  <div class="item_title">
                    <span>Données</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navigation_item">
            <div class="navigation_item_row">
              <div class="navigation_item_title">
                <div class="title">Photo</div>
              </div>
            </div>
          </div>
          <div class="navigation_item">
            <div class="navigation_item_row">
              <div class="navigation_item_title">
                <div class="title">Video</div>
              </div>
            </div>
          </div>
          <div class="navigation_item">
            <div class="navigation_item_row">
              <div class="navigation_item_title">
                <div class="title">Texture</div>
              </div>
            </div>
          </div>
        </div>
      </md-app-drawer>

      <md-app-content>
        <router-view />
        <Footer />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({
    menuVisible: false,
  }),
};
</script>

<style>
.page-container {
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  transition: 0.2s linear;
  box-sizing: border-box;
  text-align: start;
}
.navigation_item .link {
  text-decoration: none !important;
  text-align: center;
}
.md-title {
  font-size: 14px !important;
  margin: 0 8px !important;
}
.navigation-orizontale {
  display: flex;
  align-items: center;
}
.md-ripple:hover {
  background-color: #f2f4f6 !important;
}

.md-menu-content-bottom-start.md-menu-content {
  min-width: 22.5rem;
  border-radius: 1rem !important;
  width: 22.5rem;
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  min-height: 30rem;
}
.md-menu-content-container .md-list {
  padding: 0 !important;
  position: relative;
}

.md-menu-content-container .header {
  padding: 1rem 1rem 1rem 1.6rem !important;
  background: #4f46e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 10;
}
.header .header_content_left {
  line-height: 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.header .header_content_right {
  margin-left: auto;
}
.header_content_right .md-button {
  margin: 0;
}
.header_content_right .md-icon-button .md-icon {
  color: #fff !important;
}
.header_content_right .md-button .md-ripple:hover {
  background-color: transparent !important;
}

.md-menu-content-container .md-list .menu_items {
  display: grid !important;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 72px;
}
.menu_items .md-list-item-content {
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.menu_items .item {
  text-align: center;
  text-decoration: none;
}
.menu_items .item.router-link-active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.menu_items .item .item_icon .md-button {
  width: 3rem;
  height: 3rem;
  margin: 0 0 0.75rem;
}
.menu_items .item .item_title {
  font-weight: 500;
  font-size: 14px !important;
}
.menu_items .item .item_subtitle {
  font-size: 13px;
  color: #64748b;
}

.navigation-orizontale .navigation_item {
  padding: 0 16px;
  cursor: pointer;
  font-size: 13px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 5px;
  height: 48px;
  align-items: center;
  display: flex;
}

.navigation-orizontale .navigation_item:hover {
  background-color: #f2f4f6;
}
.item_wrapper {
  display: flex;
  align-items: center;
}
.item_wrapper .item_icon {
  margin-right: 12px;
  font-size: 20px;
}
.md-app-toolbar i {
  color: #64748b !important;
}
.item_title {
  color: #1e293b;
  font-size: 13px !important;
  text-transform: capitalize;
}
.options {
  flex: 1;
  text-align: end;
  display: flex;
  justify-content: flex-end;
}
.options .option_item {
  margin-left: 8px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
}

.option_item .option_icon .md-badge {
  width: 16px;
  height: 16px;
  font-size: 0.8em !important;
  font-weight: 500 !important;
  top: 2px !important;
  right: 10px !important;
}
.option_item .option_icon {
  position: relative;
}
.option_icon .active_user {
  position: absolute;
  width: 9px;
  height: 9px;
  background: #22c55e;
  right: 0px;
  bottom: 0;
  border-radius: 50%;
  z-index: 1;
}
.md-avatar {
  width: 28px !important;
  height: 28px !important;
  min-width: 20px !important;
}
.md-avatar img {
  width: 100% !important;
  height: 100% !important;
  border-radius: 50%;
}
.md-button-content img {
  width: 25px;
}
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.md-app-toolbar {
  top: -90px !important;
  height: 80px;
  background-color: white !important;
  display: flex;
  padding: 0 24px !important;
}
.md-app-toolbar .md-button.menu {
  display: none;
}
.md-app .md-app-content {
  background-color: #f1f5f9 !important;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-app-drawer {
  width: 280px !important;
  background: #0f172a !important;
}

.navigation_verticale .navigation_item {
  margin-top: 24px !important;
}
.navigation_item_row {
  margin: 0 12px;
}
.navigation_item_row .navigation_item_wrapper:hover {
  opacity: 1;
  background: rgb(245 245 245 / 16%);
}
.navigation_item_wrapper {
  cursor: pointer;
}
.navigation_item_row .navigation_item_title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  border-radius: 6px;
}
.navigation_item_row .navigation_item_title .title {
  color: #818cf8;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
}
.navigation_item_row .navigation_item_title .item_wrapper .md-icon {
  color: #fff !important;
  opacity: 0.8;
}
.navigation_item_row .navigation_item_title:hover .item_wrapper .md-icon {
  opacity: 1;
}
.navigation_item_row .navigation_item_title .item_wrapper .item_title {
  color: #fff !important;
  opacity: 0.8;
  margin-left: 5px;
}
.navigation_item_row .navigation_item_title:hover .item_wrapper .item_title {
  opacity: 1;
}
.mb-4 {
  margin-bottom: 4px;
}
.md-raised {
  background-color: #f1f5f9 !important;
}
.border-b {
  border-bottom: 1px solid #e2e8f0 !important;
}
.border-l {
  border-left: 1px solid #e2e8f0 !important;
}

.border-r {
  border-right: 1px solid #e2e8f0 !important;
}
@media (max-width: 974px) {
  .md-app-toolbar .md-button.menu {
    display: inline-block;
  }
  .navigation-orizontale {
    display: none;
  }
  .title_dashboard {
    display: none;
  }
}
@media screen and (max-width: 440px) {
  .md-app-toolbar {
    padding: 0 !important;
  }
}
</style>
