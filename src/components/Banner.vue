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
        windParticles: [],
        animationId: null,
        resizeId: null,
        lastTimestamp: 0,
        nextMeteorAt: 0,
        reducedMotion: false,
        // Moon position (relative)
        moonX: 0.78,
        moonY: 0.15,
        // Precomputed for performance
        _backdropGradient: null,
        _nebulaLayers: null,
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
      // Apple-style easing: sine ease-in-out
      easeSine(t) {
        return -(Math.cos(Math.PI * t) - 1) / 2
      },

      // Smooth step for natural transitions
      smoothStep(edge0, edge1, x) {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)))
        return t * t * (3 - 2 * t)
      },

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

        // Invalidate cached gradients
        this._backdropGradient = null
        this._nebulaLayers = null

        this.createStars()
        this.createWindParticles()
        this.meteors = []
      },

      createStars() {
        const area = this.canvasWidth * this.canvasHeight
        const count = Math.min(280, Math.max(120, Math.round(area / 7200)))

        // Star color palette: cool whites, warm yellows, pale blues
        const starColors = [
          { r: 229, g: 239, b: 255 }, // cool white-blue
          { r: 255, g: 244, b: 230 }, // warm cream
          { r: 210, g: 230, b: 255 }, // pale ice-blue
          { r: 255, g: 252, b: 240 }, // moonlight white
          { r: 180, g: 210, b: 255 }, // soft periwinkle
        ]

        this.stars = Array.from({ length: count }, () => {
          const bright = Math.random() > 0.88
          const colorIndex = Math.floor(Math.random() * starColors.length)
          const color = starColors[colorIndex]
          // Depth layer: 0 = far/small/slow, 1 = mid, 2 = near/bright/fast
          const layer = bright ? 2 : Math.random() < 0.35 ? 0 : 1
          const layerScale = [0.5, 1.0, 1.6][layer]

          return {
            x: Math.random() * this.canvasWidth,
            y: Math.random() * this.canvasHeight,
            radius: (bright ? 1.2 + Math.random() * 0.8 : 0.3 + Math.random() * 0.9) * layerScale,
            baseAlpha: bright
              ? 0.5 + Math.random() * 0.35
              : [0.12, 0.22, 0.35][layer] + Math.random() * 0.2,
            // Slower, more varied twinkle speeds for organic feel
            twinkleSpeed: (0.0006 + Math.random() * 0.0018) / layerScale,
            // Secondary harmonic for complex twinkle
            twinkleSpeed2: 0.0003 + Math.random() * 0.001,
            twinkleOffset: Math.random() * Math.PI * 2,
            twinkleOffset2: Math.random() * Math.PI * 2,
            // Parallax drift based on depth
            driftX: (Math.random() - 0.5) * 0.004 * layerScale,
            driftY: (Math.random() - 0.5) * 0.006 * layerScale,
            color,
            layer,
            bright,
          }
        })
      },

      createWindParticles() {
        const count = Math.min(18, Math.max(8, Math.round(this.canvasWidth / 120)))

        this.windParticles = Array.from({ length: count }, () => ({
          x: Math.random() * this.canvasWidth,
          y: Math.random() * this.canvasHeight,
          // Wind blows gently from left to right with slight vertical wave
          vx: 0.15 + Math.random() * 0.35,
          vy: (Math.random() - 0.5) * 0.08,
          // Each wisp has its own wave parameters
          waveAmp: 8 + Math.random() * 20,
          waveFreq: 0.0004 + Math.random() * 0.0008,
          waveOffset: Math.random() * Math.PI * 2,
          // Size and opacity
          length: 60 + Math.random() * 140,
          width: 0.4 + Math.random() * 0.8,
          baseAlpha: 0.015 + Math.random() * 0.035,
          // Lifecycle for gentle fade in/out
          life: Math.random() * 20000,
          ttl: 18000 + Math.random() * 12000,
        }))
      },

      scheduleNextMeteor(now) {
        this.nextMeteorAt = now + 4000 + Math.random() * 3000
      },

      spawnMeteor() {
        const angle = (Math.PI / 180) * (22 + Math.random() * 16)
        const speed = 700 + Math.random() * 350
        const length = 100 + Math.random() * 180

        this.meteors.push({
          x: this.canvasWidth * (Math.random() * 0.6 - 0.1),
          y: this.canvasHeight * (Math.random() * 0.28 - 0.08),
          angle,
          speed,
          length,
          width: 0.8 + Math.random() * 1.2,
          life: 0,
          ttl: 900 + Math.random() * 500,
          // Spark particles trailing behind
          sparks: [],
        })
      },

      drawBackdrop(timestamp) {
        if (!this.ctx) return

        const w = this.canvasWidth
        const h = this.canvasHeight

        // Base sky gradient: deep midnight blue with subtle warmth at horizon
        const gradient = this.ctx.createLinearGradient(0, 0, 0, h)
        gradient.addColorStop(0, '#020810')
        gradient.addColorStop(0.3, '#04101e')
        gradient.addColorStop(0.6, '#061428')
        gradient.addColorStop(0.85, '#081830')
        gradient.addColorStop(1, '#040e1c')

        this.ctx.fillStyle = gradient
        this.ctx.fillRect(0, 0, w, h)

        // Moonlight glow: large diffuse radial from moon position
        const mx = w * this.moonX
        const my = h * this.moonY
        const moonRadius = Math.max(w, h) * 0.7

        const moonGlow = this.ctx.createRadialGradient(mx, my, 0, mx, my, moonRadius)
        moonGlow.addColorStop(0, 'rgba(160, 195, 255, 0.18)')
        moonGlow.addColorStop(0.15, 'rgba(130, 175, 240, 0.12)')
        moonGlow.addColorStop(0.4, 'rgba(80, 120, 200, 0.06)')
        moonGlow.addColorStop(0.7, 'rgba(40, 70, 140, 0.025)')
        moonGlow.addColorStop(1, 'rgba(4, 10, 28, 0)')
        this.ctx.fillStyle = moonGlow
        this.ctx.fillRect(0, 0, w, h)

        // Subtle nebula glow: soft colored patches for depth
        // Very slow breathing animation
        const breathe = Math.sin(timestamp * 0.00008) * 0.5 + 0.5
        const breathe2 = Math.sin(timestamp * 0.00012 + 1.2) * 0.5 + 0.5

        // Blue-violet nebula patch (upper left area)
        const n1 = this.ctx.createRadialGradient(w * 0.22, h * 0.2, 0, w * 0.22, h * 0.2, w * 0.4)
        const n1Alpha = 0.025 + breathe * 0.015
        n1.addColorStop(0, `rgba(100, 130, 220, ${n1Alpha.toFixed(4)})`)
        n1.addColorStop(0.5, `rgba(60, 80, 160, ${(n1Alpha * 0.4).toFixed(4)})`)
        n1.addColorStop(1, 'rgba(4, 10, 28, 0)')
        this.ctx.fillStyle = n1
        this.ctx.fillRect(0, 0, w, h)

        // Warm subtle glow near horizon (hint of amber, like distant dawn)
        const n2 = this.ctx.createRadialGradient(w * 0.5, h * 0.95, 0, w * 0.5, h * 0.95, w * 0.6)
        const n2Alpha = 0.012 + breathe2 * 0.008
        n2.addColorStop(0, `rgba(140, 120, 90, ${n2Alpha.toFixed(4)})`)
        n2.addColorStop(0.4, `rgba(80, 70, 60, ${(n2Alpha * 0.4).toFixed(4)})`)
        n2.addColorStop(1, 'rgba(4, 10, 28, 0)')
        this.ctx.fillStyle = n2
        this.ctx.fillRect(0, 0, w, h)

        // Very faint teal-green atmospheric glow (jade hint, brand connection)
        const n3 = this.ctx.createRadialGradient(w * 0.35, h * 0.6, 0, w * 0.35, h * 0.6, w * 0.5)
        const n3Alpha = 0.008 + breathe * 0.006
        n3.addColorStop(0, `rgba(85, 187, 138, ${n3Alpha.toFixed(4)})`)
        n3.addColorStop(0.5, `rgba(60, 130, 100, ${(n3Alpha * 0.3).toFixed(4)})`)
        n3.addColorStop(1, 'rgba(4, 10, 28, 0)')
        this.ctx.fillStyle = n3
        this.ctx.fillRect(0, 0, w, h)
      },

      drawMoon(timestamp) {
        if (!this.ctx) return

        const w = this.canvasWidth
        const h = this.canvasHeight
        const mx = w * this.moonX
        const my = h * this.moonY
        const moonSize = Math.min(w, h) * 0.028

        // Outer halo: very soft, large
        const halo = this.ctx.createRadialGradient(mx, my, moonSize * 0.5, mx, my, moonSize * 12)
        const haloPulse = 0.9 + Math.sin(timestamp * 0.0001) * 0.1
        halo.addColorStop(0, `rgba(200, 220, 255, ${(0.08 * haloPulse).toFixed(4)})`)
        halo.addColorStop(0.3, `rgba(160, 190, 240, ${(0.04 * haloPulse).toFixed(4)})`)
        halo.addColorStop(0.6, `rgba(120, 155, 220, ${(0.015 * haloPulse).toFixed(4)})`)
        halo.addColorStop(1, 'rgba(60, 90, 160, 0)')
        this.ctx.fillStyle = halo
        this.ctx.fillRect(0, 0, w, h)

        // Inner moon glow
        const innerGlow = this.ctx.createRadialGradient(
          mx,
          my,
          moonSize * 0.1,
          mx,
          my,
          moonSize * 3.5,
        )
        innerGlow.addColorStop(0, 'rgba(230, 240, 255, 0.35)')
        innerGlow.addColorStop(0.3, 'rgba(210, 225, 250, 0.15)')
        innerGlow.addColorStop(0.6, 'rgba(180, 205, 245, 0.05)')
        innerGlow.addColorStop(1, 'rgba(140, 170, 220, 0)')
        this.ctx.fillStyle = innerGlow
        this.ctx.fillRect(0, 0, w, h)

        // Moon body: subtle gradient for volume
        const body = this.ctx.createRadialGradient(
          mx - moonSize * 0.15,
          my - moonSize * 0.15,
          0,
          mx,
          my,
          moonSize,
        )
        body.addColorStop(0, 'rgba(245, 248, 255, 0.92)')
        body.addColorStop(0.5, 'rgba(225, 235, 250, 0.85)')
        body.addColorStop(0.85, 'rgba(200, 218, 245, 0.7)')
        body.addColorStop(1, 'rgba(180, 200, 235, 0.4)')

        this.ctx.beginPath()
        this.ctx.fillStyle = body
        this.ctx.arc(mx, my, moonSize, 0, Math.PI * 2)
        this.ctx.fill()

        // Subtle surface detail: faint darker patches
        this.ctx.globalAlpha = 0.08
        this.ctx.beginPath()
        this.ctx.fillStyle = 'rgba(120, 140, 180, 1)'
        this.ctx.arc(mx - moonSize * 0.2, my + moonSize * 0.1, moonSize * 0.25, 0, Math.PI * 2)
        this.ctx.fill()

        this.ctx.beginPath()
        this.ctx.arc(mx + moonSize * 0.25, my - moonSize * 0.2, moonSize * 0.18, 0, Math.PI * 2)
        this.ctx.fill()

        this.ctx.beginPath()
        this.ctx.arc(mx + moonSize * 0.05, my + moonSize * 0.35, moonSize * 0.15, 0, Math.PI * 2)
        this.ctx.fill()

        this.ctx.globalAlpha = 1.0

        // Lens flare: subtle cross-shaped light streaks
        const flareAlpha = 0.06 + Math.sin(timestamp * 0.00015) * 0.02
        this.ctx.save()
        this.ctx.globalAlpha = flareAlpha

        // Horizontal streak
        const hFlare = this.ctx.createLinearGradient(mx - moonSize * 6, my, mx + moonSize * 6, my)
        hFlare.addColorStop(0, 'rgba(200, 220, 255, 0)')
        hFlare.addColorStop(0.35, 'rgba(210, 225, 255, 0.3)')
        hFlare.addColorStop(0.5, 'rgba(235, 245, 255, 0.6)')
        hFlare.addColorStop(0.65, 'rgba(210, 225, 255, 0.3)')
        hFlare.addColorStop(1, 'rgba(200, 220, 255, 0)')
        this.ctx.fillStyle = hFlare
        this.ctx.fillRect(mx - moonSize * 6, my - moonSize * 0.15, moonSize * 12, moonSize * 0.3)

        // Vertical streak (shorter)
        const vFlare = this.ctx.createLinearGradient(mx, my - moonSize * 4, mx, my + moonSize * 4)
        vFlare.addColorStop(0, 'rgba(200, 220, 255, 0)')
        vFlare.addColorStop(0.35, 'rgba(210, 225, 255, 0.25)')
        vFlare.addColorStop(0.5, 'rgba(235, 245, 255, 0.5)')
        vFlare.addColorStop(0.65, 'rgba(210, 225, 255, 0.25)')
        vFlare.addColorStop(1, 'rgba(200, 220, 255, 0)')
        this.ctx.fillStyle = vFlare
        this.ctx.fillRect(mx - moonSize * 0.12, my - moonSize * 4, moonSize * 0.24, moonSize * 8)

        this.ctx.restore()
      },

      drawStars(timestamp, deltaMs) {
        if (!this.ctx) return

        for (const star of this.stars) {
          // Dual-harmonic twinkle for organic feel (Apple-style smooth animation)
          const t1 = Math.sin(timestamp * star.twinkleSpeed + star.twinkleOffset)
          const t2 = Math.sin(timestamp * star.twinkleSpeed2 + star.twinkleOffset2)
          // Combine harmonics with smooth step for softer transitions
          const twinkle = this.easeSine((t1 * 0.7 + t2 * 0.3 + 1) / 2)
          const alpha = Math.min(0.95, star.baseAlpha + twinkle * 0.3)

          const { r, g, b } = star.color

          this.ctx.beginPath()
          this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`

          if (star.bright) {
            // Soft glow for bright stars - reduced shadowBlur for performance
            this.ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.4)`
            this.ctx.shadowBlur = 6
          } else {
            this.ctx.shadowBlur = 0
          }

          this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
          this.ctx.fill()

          // Draw a subtle cross-spike for bright stars (Apple-style star rendering)
          if (star.bright && alpha > 0.55) {
            this.ctx.shadowBlur = 0
            const spikeAlpha = (alpha - 0.55) * 1.2
            const spikeLen = star.radius * 3.5
            this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(spikeAlpha * 0.25).toFixed(3)})`
            this.ctx.lineWidth = 0.4
            this.ctx.beginPath()
            this.ctx.moveTo(star.x - spikeLen, star.y)
            this.ctx.lineTo(star.x + spikeLen, star.y)
            this.ctx.stroke()
            this.ctx.beginPath()
            this.ctx.moveTo(star.x, star.y - spikeLen)
            this.ctx.lineTo(star.x, star.y + spikeLen)
            this.ctx.stroke()
          }

          // Parallax drift
          star.x += star.driftX * deltaMs
          star.y += star.driftY * deltaMs

          if (star.x < -4) star.x = this.canvasWidth + 4
          if (star.x > this.canvasWidth + 4) star.x = -4
          if (star.y < -4) star.y = this.canvasHeight + 4
          if (star.y > this.canvasHeight + 4) star.y = -4
        }

        this.ctx.shadowBlur = 0
      },

      drawWindParticles(timestamp, deltaMs) {
        if (!this.ctx || !this.windParticles.length) return

        this.ctx.save()
        this.ctx.lineCap = 'round'

        for (const p of this.windParticles) {
          p.life += deltaMs

          // Lifecycle: smooth fade in and out
          let lifeProgress = p.life / p.ttl
          if (lifeProgress >= 1) {
            // Respawn
            p.x = -p.length
            p.y = Math.random() * this.canvasHeight
            p.life = 0
            p.ttl = 18000 + Math.random() * 12000
            p.baseAlpha = 0.015 + Math.random() * 0.035
            lifeProgress = 0
          }

          // Smooth fade envelope
          const fadeIn = this.smoothStep(0, 0.15, lifeProgress)
          const fadeOut = 1 - this.smoothStep(0.8, 1, lifeProgress)
          const opacity = p.baseAlpha * fadeIn * fadeOut

          if (opacity < 0.002) continue

          // Wind movement with gentle wave
          const wave = Math.sin(timestamp * p.waveFreq + p.waveOffset) * p.waveAmp
          const waveDelta = Math.cos(timestamp * p.waveFreq + p.waveOffset) * p.waveAmp * 0.001

          p.x += p.vx * deltaMs * 0.06
          p.y += (p.vy + waveDelta) * deltaMs * 0.03

          // Wrap around
          if (p.x > this.canvasWidth + p.length) {
            p.x = -p.length
            p.y = Math.random() * this.canvasHeight
          }

          // Draw wisp: a soft curved line
          const startX = p.x
          const startY = p.y + wave
          const endX = p.x + p.length
          const endY =
            p.y + wave + Math.sin(timestamp * p.waveFreq * 1.5 + p.waveOffset) * p.waveAmp * 0.4

          const trail = this.ctx.createLinearGradient(startX, startY, endX, endY)
          trail.addColorStop(0, `rgba(180, 210, 255, 0)`)
          trail.addColorStop(0.2, `rgba(190, 215, 255, ${(opacity * 0.6).toFixed(4)})`)
          trail.addColorStop(0.5, `rgba(200, 225, 255, ${opacity.toFixed(4)})`)
          trail.addColorStop(0.8, `rgba(190, 215, 255, ${(opacity * 0.6).toFixed(4)})`)
          trail.addColorStop(1, `rgba(180, 210, 255, 0)`)

          this.ctx.strokeStyle = trail
          this.ctx.lineWidth = p.width
          this.ctx.beginPath()

          // Bezier curve for natural wind shape
          const cpX = (startX + endX) / 2
          const cpY = (startY + endY) / 2 + wave * 0.3
          this.ctx.moveTo(startX, startY)
          this.ctx.quadraticCurveTo(cpX, cpY, endX, endY)
          this.ctx.stroke()
        }

        this.ctx.restore()
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

          // Smooth cubic fade-out (Apple-style ease-out)
          const t = 1 - progress
          const opacity = t * t * (3 - 2 * t)

          const headX = meteor.x
          const headY = meteor.y
          const tailX = headX - Math.cos(meteor.angle) * meteor.length
          const tailY = headY - Math.sin(meteor.angle) * meteor.length

          // Outer glow (bloom effect)
          this.ctx.save()
          this.ctx.globalAlpha = opacity * 0.3
          this.ctx.shadowColor = 'rgba(180, 210, 255, 0.8)'
          this.ctx.shadowBlur = 12
          this.ctx.lineWidth = meteor.width * 3
          this.ctx.lineCap = 'round'
          this.ctx.strokeStyle = 'rgba(180, 210, 255, 0.15)'
          this.ctx.beginPath()
          this.ctx.moveTo(tailX + (headX - tailX) * 0.6, tailY + (headY - tailY) * 0.6)
          this.ctx.lineTo(headX, headY)
          this.ctx.stroke()
          this.ctx.restore()

          // Main trail
          const trail = this.ctx.createLinearGradient(headX, headY, tailX, tailY)
          trail.addColorStop(0, `rgba(248, 252, 255, ${(opacity * 0.95).toFixed(3)})`)
          trail.addColorStop(0.2, `rgba(220, 238, 255, ${(opacity * 0.7).toFixed(3)})`)
          trail.addColorStop(0.5, `rgba(180, 210, 255, ${(opacity * 0.35).toFixed(3)})`)
          trail.addColorStop(1, 'rgba(140, 180, 240, 0)')

          this.ctx.lineWidth = meteor.width
          this.ctx.lineCap = 'round'
          this.ctx.strokeStyle = trail
          this.ctx.beginPath()
          this.ctx.moveTo(tailX, tailY)
          this.ctx.lineTo(headX, headY)
          this.ctx.stroke()

          // Bright head point
          this.ctx.beginPath()
          this.ctx.fillStyle = `rgba(255, 255, 255, ${(opacity * 0.85).toFixed(3)})`
          this.ctx.arc(headX, headY, meteor.width * 1.2, 0, Math.PI * 2)
          this.ctx.fill()

          // Spawn and draw spark particles
          if (progress < 0.7 && Math.random() < 0.35) {
            meteor.sparks.push({
              x: headX + (Math.random() - 0.5) * 2,
              y: headY + (Math.random() - 0.5) * 2,
              vx: (Math.random() - 0.5) * 0.8 - Math.cos(meteor.angle) * 0.3,
              vy: (Math.random() - 0.5) * 0.8 - Math.sin(meteor.angle) * 0.3 + 0.1,
              life: 0,
              ttl: 200 + Math.random() * 300,
              radius: 0.3 + Math.random() * 0.5,
            })
          }

          // Update and draw sparks
          meteor.sparks = meteor.sparks.filter((spark) => {
            spark.life += deltaMs
            if (spark.life >= spark.ttl) return false

            spark.x += spark.vx * deltaMs * 0.05
            spark.y += spark.vy * deltaMs * 0.05
            spark.vy += 0.0002 * deltaMs // subtle gravity

            const sparkProgress = spark.life / spark.ttl
            const sparkAlpha = (1 - sparkProgress) * (1 - sparkProgress) * opacity * 0.6

            if (sparkAlpha < 0.005) return false

            this.ctx.beginPath()
            this.ctx.fillStyle = `rgba(220, 235, 255, ${sparkAlpha.toFixed(3)})`
            this.ctx.arc(spark.x, spark.y, spark.radius * (1 - sparkProgress * 0.5), 0, Math.PI * 2)
            this.ctx.fill()

            return true
          })

          return (
            headX < this.canvasWidth + meteor.length &&
            headY < this.canvasHeight + meteor.length &&
            headX > -meteor.length &&
            headY > -meteor.length
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

        // Draw layers in order: backdrop -> moon -> stars -> wind -> meteors
        this.drawBackdrop(timestamp)
        this.drawMoon(timestamp)
        this.drawStars(timestamp, deltaMs)

        if (!this.reducedMotion) {
          this.drawWindParticles(timestamp, deltaMs)

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
