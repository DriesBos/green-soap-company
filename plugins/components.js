import Vue from "vue"
import MarkdownItem from "~/components/MarkdownItem.vue"
import NewsCarouselItem from "~/components/NewsCarouselItem.vue"

import Page from "~/components/Page.vue"
import LandingItem from "~/components/LandingItem.vue"
import LandingSlider from "~/components/LandingSlider.vue"
import TextItem from "~/components/TextItem.vue"
import PartnersList from "~/components/PartnersList.vue"
import StatsItem from "~/components/StatsItem.vue"
import BrandItem from "~/components/BrandItem.vue"
import TeamContainer from "~/components/TeamContainer.vue"
import TeamMember from "~/components/TeamMember.vue"
import CasestudyContainer from "~/components/CasestudyContainer.vue"
import CasestudyItem from "~/components/CasestudyItem.vue"
import HistoryContainer from "~/components/HistoryContainer.vue"
import HistoryItem from "~/components/HistoryItem.vue"
import ContentblokItem from "~/components/ContentblokItem.vue"
import ContentblokWrapper from "~/components/ContentblokWrapper.vue"
import VueCarouselItem from "~/components/VueCarouselItem.vue"

Vue.component("markdown", MarkdownItem)
Vue.component("news-carousel", NewsCarouselItem)
Vue.component("blok-page", Page)
Vue.component("blok-landing-item", LandingItem)
Vue.component("blok-landing-slider", LandingSlider)
Vue.component("blok-text-item", TextItem)
Vue.component("blok-partners-list", PartnersList)
Vue.component("blok-stats-item", StatsItem)
Vue.component("blok-brand-item", BrandItem)
Vue.component("blok-team-container", TeamContainer)
Vue.component("blok-team-member", TeamMember)
Vue.component("blok-casestudy-container", CasestudyContainer)
Vue.component("blok-casestudy-item", CasestudyItem)
Vue.component("blok-history-container", HistoryContainer)
Vue.component("blok-history-item", HistoryItem)
Vue.component("blok-contentblok-item", ContentblokItem)
Vue.component("blok-contentblok-wrapper", ContentblokWrapper)
Vue.component("vue-carousel-item", VueCarouselItem)
