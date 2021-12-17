<template>
  <div class="container">
    <!-- Header -->
    <div
      class="baniere"
      style="
        background-image: url('https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_1280.jpg');
      "
    >
      <div class="flex flex-col items-center">
        <div class="title">Gagnez du temps en trouvant la bonne image.</div>

        <div class="search">
          <input type="text" />
          <md-icon>search</md-icon>
        </div>
      </div>
    </div>

    <div class="info">
      <span>Search and get the image you need start now</span>
    </div>
    <div class="body-content">
      <div class="grid">
        <div v-for="(image, index) in images" :key="index" class="pt-5">
          <a
            :href="
              require(`../assets/images/angular-material/scenes/${image.id}.scene.jpg`)
            "
            target="_blank"
            rel="noreferrer"
            class="card"
          >
            <img
              :src="
                require(`../assets/images/angular-material/scenes/${image.id}.scene.jpg`)
              "
            />
            <div class="description">
              <div class="text-secondary">{{ image.name }}</div>
              <div class="text-secondary">{{ image.summary }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
const images = [
  {
    id: "laptop-336373_640 (4)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "autocomplete-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-autocomplete-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (11)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "badge-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-badge-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (11)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "bottom-sheet-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-bottom-sheet-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (10)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "button-",
      exclude: ["button-toggle-"],
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-button-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (1)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "button-toggle-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-button-toggle-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (2)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "card-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-card-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (3)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "checkbox-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-checkbox-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (4)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "chips-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-chips-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (5)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "core-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-core-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (6)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "date",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-datepicker-testing.html",
      },
    ],
  },
  {
    id: "lamp",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "dialog-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-dialog-testing.html",
      },
    ],
  },
  {
    id: "laptop-336373_640 (8)",
    name: "Photo name",
    summary: "Lorem ipsum.",
    exampleSpecs: {
      prefix: "divider-",
    },
    additionalApiDocs: [
      {
        name: "Testing",
        path: "material-divider-testing.html",
      },
    ],
  },
];
export default {
  name: "Home",
  data: () => ({
    images,
  }),
};
</script>
<style scoped>
.container {
  margin: -27px -17px 0;
  padding: 0;
  padding-top: 0.75rem;
  background-color: #fff;
  color: #1e293b;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
}
.baniere {
  position: relative;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  padding-bottom: 7rem;
}
.flex.flex-col.items-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.baniere .title {
  font-size: 1.25rem;
  color: white;
  text-align: center;
  margin-top: 1rem;
}
.baniere .search {
  margin-top: 1.25rem;
  min-width: 20rem;
  max-width: 30rem;
  position: relative;
  width: 100%;
}
.baniere .search input {
  width: 100%;
  min-height: 40px;
  border-radius: 20px;
  position: relative;
  padding: 0 16px;
  padding-left: 50px;
  border-width: 1px;
  outline: none;
}
.search .md-icon {
  position: absolute;
  z-index: 10;
  left: 16px;
  top: 10px;
  font-size: 28px !important;
  color: #94a3b8 !important;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4rem;
  border-bottom: 1px solid #94a3b8;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  background-color: #94a3b8;
}
.body-content {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0.5rem;
}
.body-content .grid {
  grid-template-columns: repeat(1, minmax(0, 1fr));
  display: grid;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.pt-5 {
  padding-top: 7px;
}
.grid .card {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  transition-property: box-shadow !important;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  text-decoration: none;
}
.card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.description {
  padding-left: 1.25rem !important;
  padding-right: 1.25rem !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  color: #64748b;
}
.description .text-secondary:first-child {
  font-size: 1.125rem !important;
  color: #64748b;
  margin-bottom: 0.25rem;
}
@media screen and (min-width: 1280px) {
  .body-content .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }
}
@media screen and (min-width: 960px) {
  .info {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
  }
}
@media screen and (min-width: 600px) {
  .baniere {
    padding-top: 20rem;
    padding-bottom: 12rem;
    padding-left: 4px;
    padding-right: 4rem;
  }
  .body-content {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  .body-content .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
