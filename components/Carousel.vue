<template>
  <div class="container">
    <div id="carousel" class="carousel" data-carousel="slide">
      <div v-if="photos.length > 1" class="carousel-indicators">
        <button
            v-for="(photo, index) in photos"
            type="button"
            data-bs-target="#carousel"
            v-bind:data-bs-slide-to="index"
            :class="{ active: index == 0 }"
            v-bind:aria-current="(index == 0) ? 'true' : ''"
            v-bind:aria-label="`Photo ${index + 1}`"
        >
        </button>
      </div>

      <div class="carousel-inner">
        <div
            v-for="(photo, index) in photos"
            class="carousel-item"
            :class="{ active: index == 0 }"
            style="height: 75vh;"
            data-bs-interval="10000"
        >
          <img
              :src="`/images/${id}/${photo.path}`"
              class="img-thumbnail d-block m-auto"
              style="max-height: 90%;"
          />
          <div v-if="'caption' in photo" class="text-center">
            <p class="font-weight-bold">{{ photo.caption }}</p>
          </div>
        </div>

        <div v-if="photos.length > 1">
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    id: String,
    photos: Array[Object],
  },
}
</script>
