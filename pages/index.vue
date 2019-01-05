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
            <nuxt-link to="/skill">
              <div class="top-menu-item">
                <span class="top-menu-item-main">Skill</span>
                <span class="top-menu-item-supplement">スキル</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/history">
              <div class="top-menu-item">
                <span class="top-menu-item-main">History</span>
                <span class="top-menu-item-supplement">経歴</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/history">
              <div class="top-menu-item">
                <span class="top-menu-item-main">Blog</span>
                <span class="top-menu-item-supplement">ブログ</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
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

.top-menu-item:hover {
  color: #ccc;
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

