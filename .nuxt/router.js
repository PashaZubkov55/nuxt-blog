import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1a1f8ae4 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _da693c20 = () => interopDefault(import('..\\pages\\admin\\create.vue' /* webpackChunkName: "pages_admin_create" */))
const _342990dc = () => interopDefault(import('..\\pages\\admin\\list.vue' /* webpackChunkName: "pages_admin_list" */))
const _86d044b6 = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages_admin_login" */))
const _2374df7e = () => interopDefault(import('..\\pages\\admin\\logout.vue' /* webpackChunkName: "pages_admin_logout" */))
const _f457d782 = () => interopDefault(import('..\\pages\\admin\\user.vue' /* webpackChunkName: "pages_admin_user" */))
const _cf10bc82 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages_post__id" */))
const _58a78912 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _1a1f8ae4,
      name: "admin"
    }, {
      path: "/admin/create",
      component: _da693c20,
      name: "admin-create"
    }, {
      path: "/admin/list",
      component: _342990dc,
      name: "admin-list"
    }, {
      path: "/admin/login",
      component: _86d044b6,
      name: "admin-login"
    }, {
      path: "/admin/logout",
      component: _2374df7e,
      name: "admin-logout"
    }, {
      path: "/admin/user",
      component: _f457d782,
      name: "admin-user"
    }, {
      path: "/post/:id?",
      component: _cf10bc82,
      name: "post-id"
    }, {
      path: "/",
      component: _58a78912,
      name: "index"
    }],

    fallback: false
  })
}
