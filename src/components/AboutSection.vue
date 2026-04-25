<template>
  <section id="about" class="s-about">
    <div class="row about-info wide">
      <div class="column lg-6 md-12">
        <img src="/images/about-image.png" alt="Mustafa" title="Mustafa" class="about-info__pic" />
      </div>

      <div class="column lg-6 md-12">
        <div class="about-info__text">
          <h2 class="text-pretitle with-line">{{ $t('about.title') }}</h2>
          <p class="attention-getter">
            {{ $t('about.description') }}
          </p>
          <p class="cv-split__hint">{{ $t('about.cv') }}</p>
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
              class="btn cv-split__btn cv-split__btn--right"
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
        <h2 class="text-pretitle">{{ $t('about.expertise') }}</h2>

        <ul class="skills-list h1">
          <li>Full Stack Web Development</li>
          <br />
          <li>Figma & UI/UX Design</li>
          <br />
          <li>Laravel & PHP</li>
          <br />
          <li>JavaScript & jQuery & Vue.js</li>
          <br />
          <li>MySQL & Database Design</li>
          <br />
          <li>Bootstrap & Tailwind CSS</li>
          <br />
          <li>Agile & Problem Solving</li>
          <br />
          <li>API & Postman</li>
        </ul>
      </div>
    </div>

    <div class="row about-timelines">
      <div class="column lg-6 tab-12">
        <h2 class="text-pretitle">{{ $t('about.education') }}</h2>

        <div class="timeline">
          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div>
              <h4 class="timeline__title">ABC Horizon Academy</h4>
              <h5 class="timeline__meta">{{ $t('about.subsidiary') }}</h5>
              <p class="timeline__timeframe">{{ $t('about.subsidiary_date') }}</p>
            </div>
            <div>
              <p>
                {{ $t('about.subsidiary_description') }}
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div>
              <h4 class="timeline__title">ABC Horizon Academy</h4>
              <h5 class="timeline__meta">{{ $t('about.diploma') }}</h5>
              <p class="timeline__timeframe">{{ $t('about.diploma_date') }}</p>
            </div>
            <div>
              <p>
                {{ $t('about.diploma_description') }}
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div>
              <h4 class="timeline__title">
                University of Bolton
                <small class="timeline__note">
                  {{ $t('about.university_transition') }}
                </small>
              </h4>
              <h5 class="timeline__meta">{{ $t('about.bachelor') }}</h5>
              <p class="timeline__timeframe">{{ $t('about.bachelor_date') }}</p>
            </div>
            <div>
              <p>
                {{ $t('about.bachelor_description') }}
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

.cv-split {
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
}

html[dir='rtl'] .cv-split {
  flex-direction: row-reverse;
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
  margin-inline-start: -6.3%;
}

html[dir='rtl'] .cv-split__btn + .cv-split__btn {
  margin-inline-start: 0;
  margin-inline-end: -6%;
}

@media (max-width: 600px) {
  html[dir='rtl'] .cv-split__btn + .cv-split__btn {
    margin-inline-end: -6.5%;
  }
}

.cv-split__btn {
  transition: all 0.2s ease;
}

.cv-split__btn:hover {
  filter: brightness(1.1);
}
</style>
