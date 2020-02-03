import Vue from "vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import Page from "~/components/Page.vue"
import Teaser from "~/components/Teaser.vue"
import Grid from "~/components/Grid.vue"
import Feature from "~/components/Feature.vue"
import LandingItem from "~/components/LandingItem.vue"
import IntroductionItem from "~/components/IntroductionItem.vue"

Vue.component("markdown", MarkdownItem)
Vue.component("blok-page", Page)
Vue.component("blok-teaser", Teaser)
Vue.component("blok-grid", Grid)
Vue.component("blok-feature", Feature)
Vue.component("blok-landing-item", LandingItem)
Vue.component("blok-introduction-item", IntroductionItem)
