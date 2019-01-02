<template>
  <div class="top-content">
    <section class="container">
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">
              <div class="top-menu-item">
                <span class="top-menu-item-main">HOME</span>
                <span class="top-menu-item-supplement">ホーム</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="top-menu-item">
                <span class="top-menu-item-main">Company</span>
                <span class="top-menu-item-supplement">会社概要</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="top-menu-item">
                <span class="top-menu-item-main">Service</span>
                <span class="top-menu-item-supplement">サービス案内</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="top-menu-item">
                <span class="top-menu-item-main">Recuit</span>
                <span class="top-menu-item-supplement">採用情報</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="top-menu-item">
                <span class="top-menu-item-main">Contact</span>
                <span class="top-menu-item-supplement">問い合わせ</span>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
}
</script>

<style>
.top-content {
	min-height: 100%;
  background: url('~assets/images/bg.png') no-repeat right top/40%;
	overflow: auto;
}

.top-menu-item {
  width: 500px;
  font-size:12px;
  line-height: 1;
  text-align: center;
  padding-top: 60px;
}

.top-menu-item-main {
  font-size: 40px;
  display: block;
  padding-bottom: 10px;
	font-family: 'Julius Sans One', sans-serif;	/*Google Fontsの指定*/
}
.top-menu-item-supplement {
}
</style>

