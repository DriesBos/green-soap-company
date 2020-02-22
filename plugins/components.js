import Vue from "vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import NewsCarouselItem from "~/components/NewsCarouselItem.vue"

import Page from "~/components/Page.vue"
import LandingItem from "~/components/LandingItem.vue"
import IntroductionItem from "~/components/IntroductionItem.vue"

Vue.component("markdown", MarkdownItem)
Vue.component("news-carousel", NewsCarouselItem)

Vue.component("blok-page", Page)
Vue.component("blok-landing-item", LandingItem)
Vue.component("blok-introduction-item", IntroductionItem)
