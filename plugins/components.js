import Vue from "vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import NewsCarouselItem from "~/components/NewsCarouselItem.vue"

import Page from "~/components/Page.vue"
import LandingItem from "~/components/LandingItem.vue"
import LandingSlider from "~/components/LandingSlider.vue"
import IntroductionItem from "~/components/IntroductionItem.vue"
import TextItem from "~/components/TextItem.vue"
import StatsItem from "~/components/StatsItem.vue"
import ContentblokItem from "~/components/ContentblokItem.vue"
import ContentblokWrapper from "~/components/ContentblokWrapper.vue"
import VueCarouselItem from "~/components/VueCarouselItem.vue"

Vue.component("markdown", MarkdownItem)
Vue.component("news-carousel", NewsCarouselItem)

Vue.component("blok-page", Page)
Vue.component("blok-landing-item", LandingItem)
Vue.component("blok-landing-slider", LandingSlider)
Vue.component("blok-introduction-item", IntroductionItem)
Vue.component("blok-text-item", TextItem)
Vue.component("blok-stats-item", StatsItem)
Vue.component("blok-contentblok-item", ContentblokItem)
Vue.component("blok-contentblok-wrapper", ContentblokWrapper)
Vue.component("vue-carousel-item", VueCarouselItem)
