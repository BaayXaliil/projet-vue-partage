<template>
  <div class="footer">
    <div class="header">Trouvé encore plus de médias</div>
    <div class="text-sm">Essayer ces catégories</div>
    <div class="grid">
      <div class="grid_item">
        <div class="title">Photo</div>
        <div>Paysage</div>
        <div>Région</div>
        <div>Outre-mer</div>
        <div>Banlieue</div>
        <div>Quartier</div>
        <div>Cité</div>
      </div>
      <div class="grid_item">
        <div class="title">Vidéo</div>
        <div>Paysage</div>
        <div>Région</div>
        <div>Outre-mer</div>
        <div>Banlieue</div>
        <div>Quartier</div>
        <div>Cité</div>
      </div>
      <div class="grid_item">
        <div class="title">Texture</div>
        <div>Paysage</div>
        <div>Région</div>
        <div>Outre-mer</div>
        <div>Banlieue</div>
        <div>Quartier</div>
        <div>Cité</div>
      </div>
      <div class="grid_item barre">
        <div class="pb-5">
          <span>Babashot</span> est un projet visant à aider les médias à
          disposer du bon matérial.
        </div>
        <div>
          Vous avez une question ? veuillez remplir le formulaire de contact.
        </div>
        <div class="button">
          <div><button>Contactez-nous</button></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #475569;
  color: #fff;
  margin: 20px -17px -16px;
  padding: 0 52px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.header {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  margin: 40px 0 0;
  width: 100%;
  text-align: start;
  line-height: 21px;
}

.text-sm {
  font-size: 12px;
  width: 100%;
  line-height: 18px;
  text-align: start;
}

.grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr) !important;
  padding: 20px 0 0;
  grid-gap: 1rem;
  gap: 1rem;
  text-align: start;
}
.grid_item div {
  line-height: 21px;
  font-weight: 400;
}
.title {
  font-weight: 600 !important;
  padding-bottom: 1.25rem;
  font-size: 14px;
  line-height: 21px;
}

.barre {
  padding-left: 2.5rem;
  border-left: 1px solid;
}
.barre .pb-5 {
  padding-bottom: 1.25rem;
}
.pb-5 span {
  font-weight: 600;
}
.button button {
  color: #60a5fa;
  background-color: #f1f5f9;
  margin: 4px 0 0 40px;
  border: 0.5px solid transparent;
  border-radius: 0.25rem !important;
  font-size: 14px;
  line-height: 21px;
  padding: 0.25rem;
  cursor: pointer;
}
/**
  @media query
*/
@media (max-width: 920px) {
  .barre {
    padding-left: 1rem;
  }
  .barre .button button {
    margin: 4px 0 0;
  }
}

@media (max-width: 820px) {
  .grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
  .barre {
    border-left: none;
    padding: 0;
    border-top: 1px solid;
    padding-top: 1rem;
  }
  .barre .button button {
    margin: 4px 0 0;
  }
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .barre {
    border: none;
    padding: 0;
    border-left: 1px solid;
    padding-left: 1rem;
  }
  .barre .button button{
    margin: 4px 0 0 !important;
  }
}

@media (max-width: 385px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}
</style>