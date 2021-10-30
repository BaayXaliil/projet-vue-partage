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
                        <img src="./assets/flags/US.svg" alt="">
                      </div>
                      <div class="item_title">
                        <span>Anglais</span>
                      </div>
                    </div>
                  </md-menu-item>
                  <md-menu-item>
                    <div class="item_wrapper">
                      <div class="item_icon">
                        <img src="./assets/flags/TR.svg" alt="">
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
              <md-button class="md-icon-button">
                <img
                  src="./assets/icons/bookmark_border_black_24dp.svg"
                  alt=""
                />
              </md-button>
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
        <!-- <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list> -->
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
