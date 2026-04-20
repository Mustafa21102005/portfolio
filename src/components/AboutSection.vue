<template>
  <section id="about" class="s-about">
    <div class="row about-info wide">
      <div class="column lg-6 md-12">
        <img src="/images/about-image.png" alt="Mustafa" title="Mustafa" class="about-info__pic" />
      </div>

      <div class="column lg-6 md-12">
        <div class="about-info__text">
          <h2 class="text-pretitle with-line">About</h2>
          <p class="attention-getter">
            I’m Mustafa Azmi Khalil, a Full Stack Software Engineer based in Riyadh, Saudi Arabia. I
            build responsive, scalable web applications using Laravel, PHP, MySQL, JavaScript, Vue,
            Bootstrap, and Tailwind CSS. I have hands-on experience developing systems for
            education, task management, booking platforms, and QR-based attendance solutions.
            Passionate about clean architecture, problem-solving, and creating smooth user
            experiences.
          </p>
          <p class="cv-split__hint">Want my CV? Pick your language 😉</p>
          <div class="cv-split">
            <a
              href="https://drive.google.com/file/d/1BcTTYmLyuZTuMii_YGugOfCxRKfbpa--/view"
              class="btn cv-split__btn cv-split__btn--left"
              target="_blank"
              aria-label="Download CV in English"
            >
              English
            </a>
            <a
              href="https://drive.google.com/file/d/1Bp_EGaCgLyLPQRijJN25rOf5gqd2AfA8/view"
              class="btn text-large cv-split__btn cv-split__btn--right"
              target="_blank"
              aria-label="تحميل السيرة الذاتية باللغة العربية"
            >
              عربي
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="row about-expertise">
      <div class="column lg-12">
        <h2 class="text-pretitle">Expertise</h2>

        <ul class="skills-list h1">
          <li>Full Stack Web Development</li>
          <li>Laravel & PHP</li>
          <li>JavaScript & Vue.js</li>
          <li>MySQL & Database Design</li>
          <li>Bootstrap & Tailwind CSS</li>
          <li>Agile & Problem Solving</li>
        </ul>
      </div>
    </div>

    <div class="row about-timelines">
      <div class="column lg-6 tab-12">
        <h2 class="text-pretitle">Education</h2>

        <div class="timeline">
          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div>
              <h4 class="timeline__title">ABC Horizon Academy</h4>
              <h5 class="timeline__meta">International Level 3 Subsidiary Diploma</h5>
              <p class="timeline__timeframe">December 2022 - June 2023</p>
            </div>
            <div>
              <p>
                Completed a Pearson BTEC Level 3 Diploma in Applied Science, an internationally
                recognized qualification equivalent to a high school diploma. The program provided a
                strong foundation in applied scientific principles, covering biology, chemistry, and
                physics.
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div>
              <h4 class="timeline__title">ABC Horizon Academy</h4>
              <h5 class="timeline__meta">Level 5 Higher National Diploma</h5>
              <p class="timeline__timeframe">Septemer 2023 - January 2025</p>
            </div>
            <div>
              <p>
                Studied Software Engineering with a focus on modern software development principles
                and practices. The program emphasized problem-solving, programming fundamentals,
                system design, and the development of scalable applications.
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div>
              <h4 class="timeline__title">
                University of Bolton
                <small class="timeline__note"
                  >(Transitioning to University of Greater Manchester)</small
                >
              </h4>
              <h5 class="timeline__meta">Software Engineering BEng (Hons) HE6 top-up</h5>
              <p class="timeline__timeframe">June 2025 - December 2025</p>
            </div>
            <div>
              <p>
                Pursuing a BEng (Hons) in Software Engineering (HE6 top-up), building upon prior
                HND-level studies. The program focuses on advanced software development, system
                design, and engineering principles required to build and maintain large-scale
                software systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline__note {
  display: block;
  margin: 1.3rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-text-light, #777);
  letter-spacing: 0.02em;
}

.text-large {
  font-size: 1.5rem;
}

.cv-split {
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
}

.cv-split__hint {
  margin-bottom: -2.8rem;
  font-size: 1.8rem;
  color: var(--color-white);
  text-align: center;
}

.cv-split__btn {
  flex: 1;
  text-align: center;
  border-radius: 0;
  position: relative;
}

/* LEFT BUTTON */
.cv-split__btn--left {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  /* diagonal cut */
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
}

/* RIGHT BUTTON */
.cv-split__btn--right {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  /* diagonal cut */
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
}

/* Remove gap between them */
.cv-split__btn + .cv-split__btn {
  margin-left: -35px;
}

.cv-split__btn {
  transition: all 0.2s ease;
}

.cv-split__btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}
</style>
