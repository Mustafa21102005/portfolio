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
              href="https://drive.google.com/file/d/18Qn0jmld0uIj9-DJztuV7GfPXNpzT3z4/view"
              class="btn cv-split__btn cv-split__btn--left"
              target="_blank"
              aria-label="Download CV in English"
              rel="noopener noreferrer"
            >
              English
            </a>
            <a
              href="https://drive.google.com/file/d/1UQholH5_kfSo_OqKSjJvIJr85RZWFH_W/view"
              class="btn cv-split__btn cv-split__btn--right"
              target="_blank"
              aria-label="تحميل السيرة الذاتية باللغة العربية"
              rel="noopener noreferrer"
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
          <li>Laravel & PHP</li>
          <br />
          <li>Typescript & Vue.js</li>
          <br />
          <li>MySQL & PostgreSQL</li>
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
              <h4 class="timeline__title">
                <a href="https://abchorizon.com/" target="_blank" rel="noopener noreferrer">
                  ABC Horizon Academy
                </a>
              </h4>
              <h5 class="timeline__meta">
                <a
                  class="timeline__cert-link"
                  href="https://drive.google.com/file/d/1EgkAFslY2KaYqkjZy2wOQ_7oVxW31bD4/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t('about.diploma') }}
                  <svg
                    fill="#FFF"
                    width="18px"
                    height="18px"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M790 790H208V208h291v-83H208q-35 0-59 24.5T125 208v582q0 35 24 59t59 24h582q35 0 59-24t24-59V499h-83v291zM582 125v83h150L323 617l58 58 409-408v149h83V125H582z"
                    />
                  </svg>
                </a>
              </h5>
              <p class="timeline__timeframe">
                <time datetime="2023-09">{{ $t('about.diploma_start_date') }}</time>
                –
                <time datetime="2025-01">{{ $t('about.diploma_end_date') }}</time>
              </p>
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
                <a
                  href="https://greatermanchester.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Bolton
                </a>
                <small class="timeline__note">
                  {{ $t('about.university_transition') }}
                </small>
              </h4>
              <h5 class="timeline__meta">
                <a
                  class="timeline__cert-link"
                  href="https://drive.google.com/file/d/1bJOBjKa8QUoGtukN4PmG6XzIyvcM-qT0/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t('about.bachelor') }}
                  <svg
                    fill="#FFF"
                    width="18px"
                    height="18px"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M790 790H208V208h291v-83H208q-35 0-59 24.5T125 208v582q0 35 24 59t59 24h582q35 0 59-24t24-59V499h-83v291zM582 125v83h150L323 617l58 58 409-408v149h83V125H582z"
                    />
                  </svg>
                </a>
              </h5>
              <p class="timeline__timeframe">
                <time datetime="2025-06">{{ $t('about.bachelor_start_date') }}</time>
                –
                <time datetime="2025-12">{{ $t('about.bachelor_end_date') }}</time>
              </p>
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

.timeline__cert-link {
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s;
}

.timeline__cert-link:hover {
  opacity: 0.7;
}

.timeline__cert-link svg {
  transition: transform 0.2s ease;
  vertical-align: middle;
}

.timeline__cert-link:hover svg {
  transform: scale(1.2);
}

[dir='rtl'] .timeline__cert-link svg {
  transform: scaleX(-1);
}

[dir='rtl'] .timeline__cert-link:hover svg {
  transform: scaleX(-1) scale(1.2);
}
</style>
