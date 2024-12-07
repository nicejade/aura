<template>
  <div class="relative">
    <div
      v-show="isShowButton"
      class="elevator flex flex-col justify-center items-center laptop:hidden target:hidden space-y-[16px]"
    >
      <div class="tooltip">
        <div class="pannel desktop:w-[300px]">
          <div class="flex flex-col items-center">
            <img class="block w-[200px] h-[200px]" src="./../assets/images/qrcode.png" alt="蓝河操作系统 BlueOS" />
            <span class="text-blackgrey text-[16px] right-4 pt-[15px]">微信扫码加好友，进入蓝河操作系统交流群</span>
          </div>
        </div>
        <div class="connect">
          <svg
            class="eicon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style="enable-background: new 0 0 24 24"
            xml:space="preserve"
          >
            <path
              d="M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1h1zm5 4h-4v-2h2v-2h2v4zM3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm15 0h3v2h-3v-2zM6 6v2h2V6H6zm0 10v2h2v-2H6zM16 6v2h2V6h-2z"
              style="fill: #595959"
            />
          </svg>
        </div>
      </div>
      <button
        class="totop flex items-center justify-center w-[40px] h-[40px] right-[16px] p-[8px] bg-white text-white rounded-full outline-none"
        @click="scrollToTop"
      >
        <svg
          class="eicon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          style="enable-background: new 0 0 20 20"
          xml:space="preserve"
        >
          <g />
          <path
            d="M.6 0h18.8c.3 0 .6.3.6.6v.1c0 .3-.3.6-.6.6H.6C.3 1.3 0 1 0 .7V.6C0 .3.3 0 .6 0m17.9 12.6-8.2-9c-.2-.2-.4-.2-.6 0l-8.2 9c-.2.3-.1.7.3.7h4.9v6.3c0 .2.2.4.4.4h5.8c.2 0 .4-.2.4-.4v-6.3h4.9c.4 0 .6-.4.3-.7z"
            style="fill: #595959"
          />
        </svg>
      </button>
    </div>
    <div class="desktop:hidden w-full laptop:py-[60px] tablet:py-[40px] tablet:px-[16px]">
      <div class="flex flex-row items-center justify-center space-x-8 tablet:space-x-[16px]">
        <img
          class="block w-[200px] h-[200px] tablet:w-[140px] tablet:h-[140px]"
          src="./../assets/images/qrcode.png"
          alt="蓝河操作系统 BlueOS"
        />
        <div class="flex flex-col text-blackgrey">
          <span class="text-[16px] tablet:text-[14px] tablet:leading-[24px]">
            微信中长按识别二维码添加好友，加入蓝河操作系统交流群
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isSmallerScreen } from './../helper/utils'
export default {
  name: 'Elevator',

  data() {
    return {
      hasBeenRolled: false
    }
  },

  computed: {
    isShowButton() {
      return this.hasBeenRolled && !isSmallerScreen()
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.hasBeenRolled = scrollTop >= 200
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped lang="scss">
$factor: 16px;
$black: #000000;
$white: #ffffff;
$zindex-elevator: 10000;

.elevator {
  position: fixed;
  bottom: 135px;
  right: 40px;
  z-index: $zindex-elevator;
  animation: fadein 1s;
}

.connect {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 999;
  text-align: center;
  font-weight: 300;
  color: $black;
  background-color: $white;
  word-break: keep-all;
  padding: 0;
  margin: 0;
  outline: none;
  &:hover {
    cursor: pointer;
  }
}

.totop,
.connect {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.eicon {
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  transform: scale(1);
  transition: fill 0.3s ease-in-out;
  &:hover {
    fill: #007aff;
    path {
      fill: #007aff !important;
    }
  }
}

.elevator .tooltip {
  position: relative;
  display: inline-block;

  &:hover {
    .pannel {
      visibility: visible;
    }
  }

  .pannel {
    position: absolute;
    bottom: -90px;
    right: 70px;
    z-index: 100;
    visibility: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: $white;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    padding: 2 * $factor;
    border-radius: 2 * $factor;

    &:before {
      content: '';
      position: absolute;
      left: 100%;
      top: 12.5 * $factor;
      width: 0;
      height: 0;
      border-top: $factor solid transparent;
      border-left: $factor solid $white;
      border-bottom: $factor solid transparent;
    }
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
