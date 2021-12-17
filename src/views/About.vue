<template>
  <div class="container">
    <!-- Header -->
    <div
      class="baniere"
      style="
        background-image: url('https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg');
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      "
    >
      <div class="baniere-title">
        <!--Contact us. -->
        <div class="center">About</div>
      </div>
    </div>
    <!-- body page -->
    <!-- Features -->
    <div class="body-content">
      <div class="content-full">
        <div class="content-header">
          <div class="content-title">
            Everything you need to build efficiently
          </div>
          <div class="content-subtitle">
            Start building your project using our tools, be efficient, spend
            less time with details more time with your business
          </div>
        </div>
        <!-- Features grid -->
        <div class="grid">
          <div>
            <span class="flex">
              <md-icon class="fa fa-pencil-square-o"></md-icon>
            </span>
            <div class="mt-4">Create and Edit Projects</div>
            <div class="mt-2">
              Create and edit projects, upload images via drag drop, add
              categories, add custom fields, create interactive forms and more.
            </div>
          </div>
          <div>
            <span class="flex">
              <md-icon class="fa fa-filter"></md-icon>
            </span>
            <div class="mt-4">Search and Filter</div>
            <div class="mt-2">
              Search and filter within the projects, categories and custom
              fields. Save search and filter details for easy access.
            </div>
          </div>
          <div>
            <span class="flex">
              <md-icon class="fa fa-refresh"></md-icon>
            </span>
            <div class="mt-4">Real Time Updates</div>
            <div class="mt-2">
              Real time updates that doesn't require page reload. Lean back and
              watch the changes happen in real time.
            </div>
          </div>
          <div>
            <span class="flex">
              <md-icon class="fa fa-tag"></md-icon>
            </span>
            <div class="mt-4">Meta Information</div>
            <div class="mt-2">
              Add and remove meta information to custom fields to differentiate
              them in reports and analytics results, use them for detailed
              reports.
            </div>
          </div>
          <div>
            <span class="flex">
              <md-icon class="fa fa-file-text-o"></md-icon>
            </span>
            <div class="mt-4">Pre-rendered Results</div>
            <div class="mt-2">
              Pre-render results to make reports and analytics more accessible
              by screen readers and other accessibility tools.
            </div>
          </div>
          <div>
            <span class="flex">
              <md-icon class="fa fa-bar-chart"></md-icon>
            </span>
            <div class="mt-4">Simple Analytics</div>
            <div class="mt-2">
              Simple analytics with no unnecessary data flow or weight. More
              readable results with less data consumption.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
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
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  position: relative;
  overflow: hidden;
  padding-bottom: 7rem;
}
.baniere .baniere-title {
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.baniere-title .center {
  letter-spacing: -0.025em;
  line-height: 1.25;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-top: 0.25rem;
}
.body-content {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-full {
  max-width: 80rem;
  width: 100%;
}
.content-title {
  letter-spacing: -0.025em;
  line-height: 1.25;
  font-weight: 800;
  font-size: 2rem;
}
.content-subtitle {
  font-size: 1.125rem;
  max-width: 36rem;
  margin-top: 0.5em;
  color: #64748b;
}
.grid {
  margin-top: 3rem;
  display: grid;
  row-gap: 3rem;
  column-gap: 1.5rem;
}
.grid .flex {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.25rem;
  background-color: #4f46e5;
  color: white;
}
.flex .md-icon {
  /* font-size: 28px !important; */
  color: white !important;
}
.grid .mt-4 {
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
}
.grid .mt-2 {
  line-height: 1.5rem;
  margin-top: 0.5rem;
  color: #64748b;
}
@media screen and (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 4rem !important;
  }
}
@media screen and (min-width: 600px) {
  .baniere {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 5rem;
    padding-bottom: 12rem;
  }
  .baniere-title .center {
    font-size: 3rem;
  }
  .body-content {
    padding-bottom: 5rem;
    padding-top: 4.5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 4rem;
  }
}
</style>
