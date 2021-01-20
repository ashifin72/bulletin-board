<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        temporary
        app
      >
        <v-list dense>
          <v-list-item
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-item-action>
              <v-icon>mdi-{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link
            :to="{name: 'home'}"
            tag="span"
            class="pointer">
            Ad application
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down"
               dark color="indigo"
               v-for="link in links"
               :key="link.title"
               :to="link.url"
        >
          <v-icon left>mdi-{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-app-bar>
      <v-main>

          <router-view></router-view>

      </v-main>
      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data () {
      return {
        drawer: false,
        links: [
          {
            title: 'Login',
            icon: 'lock',
            url: { name: 'login' }
          },
          {
            title: 'Registration',
            icon: 'face',
            url: { name: 'registration' }
          },
          {
            title: 'Orders',
            icon: 'bookmark-check-outline',
            url: { name: 'orders' }
          },
          {
            title: 'New ad',
            icon: 'pencil-plus',
            url: { name: 'newAdd' }
          },
          {
            title: 'My ads',
            icon: 'clipboard-list-outline',
            url: { name: 'list' }
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
