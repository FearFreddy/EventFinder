<script setup>
defineProps(['heading', 'details', 'url', 'logo','date','venue'])
</script>

<template>
  <div class="item">
    <img v:if="logo" :src="logo" />
    <b>{{ date }} - {{ venue }}</b>
    <h3>
      {{ heading }}
    </h3>
    <p>{{ details }}</p>
    <a v:if="url" :href="url" target="_blank">Link to event</a>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

img {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem 175px;
  }

  img {
    top: calc(50% - 37.5px);
    left: 0;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 150px;
    height: 75px;
  }

  .item:before {
    content: ' ';
    border-left: 3px solid var(--color-border);
    position: absolute;
    left: 75px;
    bottom: calc(50% + 37.5px);
    height: calc(50% - 37.5px);
  }

  .item:after {
    content: ' ';
    border-left: 3px solid var(--color-border);
    position: absolute;
    left: 75px;
    top: calc(50% + 37.5px);
    height: calc(50% - 37.5px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
