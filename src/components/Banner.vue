<template>
  <section class="banner-section">
    <div
      class="banner-bg w-full min-h-[460px] laptop:min-h-[920px] desktop:min-h-[100vh] h-[460px] laptop:h-[920px] desktop:h-[100vh] text-white">
      <canvas ref="skyCanvas" class="sky-canvas" aria-hidden="true"></canvas>
      <div class="sky-overlay" aria-hidden="true"></div>

      <div
        class="banner-content w-full h-full flex items-center justify-center flex-col text-start">
        <header
          class="tablet:mt-[52px] laptop:mt-[90px] tablet:mb-[12px] laptop:mb-[24px] desktop:mb-[30px] flex flex-col desktop:flex-row desktop:items-center">
          <h1
            class="gradient-title font-extrabold whitespace-nowrap tablet:text-[30px] tablet:leading-[30px] laptop:text-[60px] laptop:leading-[76px] desktop:text-[88px] desktop:leading-[88px] desktop:font-bold">
            清风明月轩
          </h1>
        </header>

        <div
          class="gradient-desc text-greywhile tablet:mb-[12px] laptop:mb-[39px] desktop:mb-[40px] laptop:text-[28px] desktop:text-[28px] tablet:text-[14px] tablet:leading-[24px] laptop:leading-[42px] desktop:leading-[40px]">
          收录精心打磨的轩帅作品与独立网站
        </div>

        <a
          class="homepage-link outline-none flex justify-center items-center tablet:w-[80px] tablet:h-[30px] laptop:w-[160px] laptop:h-[60px] desktop:w-[176px] desktop:h-[52px] tablet:text-[12px] laptop:text-[24px] desktop:text-[20px] rounded-[30px] desktop:rounded-[26px] border border-white text-white"
          href="https://www.niceshare.site/"
          target="_blank"
          rel="noopener"
          aria-label="访问个人主页">
          个人主页
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Banner',

    data() {
      return {
        ctx: null,
        canvasWidth: 0,
        canvasHeight: 0,
        stars: [],
        meteors: [],
        animationId: null,
        resizeId: null,
        lastTimestamp: 0,
        nextMeteorAt: 0,
        reducedMotion: false,
      }
    },

    mounted() {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      this.setupCanvas()
      this.scheduleNextMeteor(performance.now())
      this.animationId = requestAnimationFrame((timestamp) => this.renderFrame(timestamp))
      window.addEventListener('resize', this.handleResize, { passive: true })
    },

    beforeUnmount() {
      if (this.animationId !== null) {
        cancelAnimationFrame(this.animationId)
      }

      if (this.resizeId !== null) {
        cancelAnimationFrame(this.resizeId)
      }

      window.removeEventListener('resize', this.handleResize)
    },

    methods: {
      handleResize() {
        if (this.resizeId !== null) {
          cancelAnimationFrame(this.resizeId)
        }

        this.resizeId = requestAnimationFrame(() => {
          this.setupCanvas()
          this.lastTimestamp = 0
        })
      },

      setupCanvas() {
        const canvas = this.$refs.skyCanvas
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const width = Math.max(1, Math.round(rect.width))
        const height = Math.max(1, Math.round(rect.height))
        const dpr = Math.min(window.devicePixelRatio || 1, 2)

        this.canvasWidth = width
        this.canvasHeight = height

        canvas.width = Math.floor(width * dpr)
        canvas.height = Math.floor(height * dpr)

        const context = canvas.getContext('2d')
        if (!context) return

        context.setTransform(dpr, 0, 0, dpr, 0, 0)
        this.ctx = context
        this.createStars()
        this.meteors = []
      },

      createStars() {
        const area = this.canvasWidth * this.canvasHeight
        const count = Math.min(220, Math.max(90, Math.round(area / 9800)))

        this.stars = Array.from({ length: count }, () => {
          const bright = Math.random() > 0.9
          return {
            x: Math.random() * this.canvasWidth,
            y: Math.random() * this.canvasHeight,
            radius: bright ? 1.3 + Math.random() * 0.9 : 0.35 + Math.random() * 1.05,
            baseAlpha: bright ? 0.45 + Math.random() * 0.3 : 0.2 + Math.random() * 0.35,
            twinkleSpeed: 0.0012 + Math.random() * 0.0022,
            twinkleOffset: Math.random() * Math.PI * 2,
            driftX: (Math.random() - 0.5) * 0.006,
            driftY: (Math.random() - 0.5) * 0.01,
            bright,
          }
        })
      },

      scheduleNextMeteor(now) {
        this.nextMeteorAt = now + 3000 + Math.random() * 1000
      },

      spawnMeteor() {
        const angle = (Math.PI / 180) * (24 + Math.random() * 14)
        const speed = 850 + Math.random() * 260
        const length = 130 + Math.random() * 150

        this.meteors.push({
          x: this.canvasWidth * (Math.random() * 0.55 - 0.12),
          y: this.canvasHeight * (Math.random() * 0.3 - 0.1),
          angle,
          speed,
          length,
          width: 1 + Math.random() * 1.4,
          life: 0,
          ttl: 850 + Math.random() * 400,
        })
      },

      drawBackdrop() {
        if (!this.ctx) return

        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasHeight)
        gradient.addColorStop(0, '#030812')
        gradient.addColorStop(0.5, '#040b1f')
        gradient.addColorStop(1, '#01030a')

        this.ctx.fillStyle = gradient
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

        const glow = this.ctx.createRadialGradient(
          this.canvasWidth * 0.72,
          this.canvasHeight * 0.1,
          0,
          this.canvasWidth * 0.72,
          this.canvasHeight * 0.1,
          this.canvasWidth * 0.85,
        )
        glow.addColorStop(0, 'rgba(128, 166, 255, 0.22)')
        glow.addColorStop(0.6, 'rgba(52, 88, 170, 0.08)')
        glow.addColorStop(1, 'rgba(3, 8, 22, 0)')
        this.ctx.fillStyle = glow
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
      },

      drawStars(timestamp, deltaMs) {
        if (!this.ctx) return

        for (const star of this.stars) {
          const twinkle = (Math.sin(timestamp * star.twinkleSpeed + star.twinkleOffset) + 1) / 2
          const alpha = Math.min(0.95, star.baseAlpha + twinkle * 0.35)

          this.ctx.beginPath()
          this.ctx.fillStyle = `rgba(229, 239, 255, ${alpha.toFixed(3)})`

          if (star.bright) {
            this.ctx.shadowColor = 'rgba(198, 222, 255, 0.55)'
            this.ctx.shadowBlur = 8
          } else {
            this.ctx.shadowBlur = 0
          }

          this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
          this.ctx.fill()

          star.x += star.driftX * deltaMs
          star.y += star.driftY * deltaMs

          if (star.x < -2) star.x = this.canvasWidth + 2
          if (star.x > this.canvasWidth + 2) star.x = -2
          if (star.y < -2) star.y = this.canvasHeight + 2
          if (star.y > this.canvasHeight + 2) star.y = -2
        }

        this.ctx.shadowBlur = 0
      },

      drawMeteors(deltaMs) {
        if (!this.ctx || !this.meteors.length) return

        this.meteors = this.meteors.filter((meteor) => {
          meteor.life += deltaMs
          const progress = meteor.life / meteor.ttl
          if (progress >= 1) return false

          const step = deltaMs / 1000
          meteor.x += Math.cos(meteor.angle) * meteor.speed * step
          meteor.y += Math.sin(meteor.angle) * meteor.speed * step

          const opacity = 1 - progress
          const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length
          const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length

          const trail = this.ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY)
          trail.addColorStop(0, `rgba(250, 254, 255, ${(opacity * 0.95).toFixed(3)})`)
          trail.addColorStop(0.35, `rgba(191, 225, 255, ${(opacity * 0.5).toFixed(3)})`)
          trail.addColorStop(1, 'rgba(191, 225, 255, 0)')

          this.ctx.lineWidth = meteor.width
          this.ctx.lineCap = 'round'
          this.ctx.strokeStyle = trail
          this.ctx.beginPath()
          this.ctx.moveTo(tailX, tailY)
          this.ctx.lineTo(meteor.x, meteor.y)
          this.ctx.stroke()

          this.ctx.beginPath()
          this.ctx.fillStyle = `rgba(255, 255, 255, ${(opacity * 0.75).toFixed(3)})`
          this.ctx.arc(meteor.x, meteor.y, meteor.width * 1.1, 0, Math.PI * 2)
          this.ctx.fill()

          return (
            meteor.x < this.canvasWidth + meteor.length &&
            meteor.y < this.canvasHeight + meteor.length &&
            meteor.x > -meteor.length &&
            meteor.y > -meteor.length
          )
        })
      },

      renderFrame(timestamp) {
        if (!this.ctx) {
          this.animationId = requestAnimationFrame((nextTimestamp) =>
            this.renderFrame(nextTimestamp),
          )
          return
        }

        const deltaMs = this.lastTimestamp ? Math.min(50, timestamp - this.lastTimestamp) : 16
        this.lastTimestamp = timestamp

        this.drawBackdrop()
        this.drawStars(timestamp, deltaMs)

        if (!this.reducedMotion) {
          if (timestamp >= this.nextMeteorAt) {
            this.spawnMeteor()
            this.scheduleNextMeteor(timestamp)
          }
          this.drawMeteors(deltaMs)
        }

        this.animationId = requestAnimationFrame((nextTimestamp) => this.renderFrame(nextTimestamp))
      },
    },
  }
</script>

<style scoped lang="scss">
  .banner-bg {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    background: #030812;
  }

  .banner-content {
    position: relative;
    z-index: 2;
  }

  .sky-canvas,
  .sky-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .sky-canvas {
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  .sky-overlay {
    z-index: 1;
    background:
      radial-gradient(circle at 18% 16%, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0) 45%),
      linear-gradient(180deg, rgba(3, 8, 18, 0.08) 0%, rgba(3, 8, 18, 0.36) 100%);
  }

  .gradient-title {
    background: linear-gradient(110deg, #f7fbff 5%, #d6e6ff 42%, #f8fbff 78%, #d4e1fa 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-font-smoothing: antialiased;
    text-shadow: 0 10px 28px rgba(12, 20, 46, 0.44);
  }

  .gradient-desc {
    background: linear-gradient(120deg, #edf5ff 0%, #cfddf7 55%, #e7eefc 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-font-smoothing: antialiased;
    text-shadow: 0 6px 22px rgba(8, 15, 36, 0.36);
  }

  .homepage-link {
    background: rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      0 12px 32px rgba(3, 9, 22, 0.28);
    transition:
      transform 240ms ease,
      background-color 240ms ease,
      box-shadow 240ms ease;
  }

  .homepage-link:hover {
    cursor: pointer;
    transform: translateY(-1px) scale(1.01);
    background: rgba(255, 255, 255, 0.24);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.48),
      0 16px 36px rgba(3, 9, 22, 0.36);
  }

  @media (prefers-reduced-motion: reduce) {
    .homepage-link {
      transition: none;
    }
  }
</style>
