<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(ad, i) in ads"
        :key="i"
        :src="ad.imageSrc"
      >
        <div class="car-link">
          <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad of ads"
          :key="ad.id"
        >
          <v-card>
            <v-img
              :src="ad.imageSrc"
              height="200px"
            >
              <v-card-title class="title__cart">{{ad.title}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number {{ad.id}}</v-card-subtitle>

            <v-card-text class="text--primary">


              <div>{{ad.description}}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>

  export default {
    name: 'Home',
    data () {
      return {
        ads: [
          {
            title: 'First ad',
            description: 'Hello i am description',
            promo: false,
            imageSrc: 'https://w-dog.ru/wallpapers/9/19/429925869375672/lodka-priroda-pejzazh-ozero-osen-les-derevya-doma-listya-trava.jpg',
            id: '123'
          },
          {
            title: 'Second ad',
            description: 'Hello i am description',
            promo: true,
            imageSrc: 'https://cdn.pixabay.com/photo/2021/01/07/22/15/dandelion-5898546_1280.jpg',
            id: '1234'
          },
          {
            title: 'Third ad',
            description: 'Hello i am description',
            promo: true,
            imageSrc: 'https://cdn.pixabay.com/photo/2020/11/20/16/10/tower-bridge-5762070_1280.jpg',
            id: '12345'
          }
        ]
      }
    }

  }
</script>
<style scoped>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .title__cart {
    background: black;
    color: #ffffff
  }

</style>
