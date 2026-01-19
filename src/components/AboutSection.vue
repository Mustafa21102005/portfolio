<script setup></script>

<template>
  <section id="about" class="s-about target-section">
    <div class="row about-info wide">
      <div class="column lg-6 md-12 about-info__pic-block">
        <img src="/images/about-image.png" alt="Mustafa" class="about-info__pic" />
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
          <a href="/files/Mustafa-Azmi-Resume.pdf" download class="btn btn--medium u-fullwidth">Download CV</a>
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
              <p class="timeline__timeframe">June 2023</p>
            </div>
            <div>
              <p>
                Completed a Pearson BTEC Level 3 Diploma in Applied Science, an internationally
                recognized qualification equivalent to a high school diploma. The program provided a
                strong foundation in applied scientific principles, covering biology, chemistry, and
                physics. Emphasis was placed on practical learning, analytical thinking, and
                scientific problem-solving, preparing for further studies in higher education and
                technical disciplines.
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div>
              <h4 class="timeline__title">ABC Horizon Academy</h4>
              <h5 class="timeline__meta">Level 5 Higher National Diploma</h5>
              <p class="timeline__timeframe">January 2021</p>
            </div>
            <div>
              <p>
                Studied Software Engineering with a focus on modern software development principles
                and practices. The program emphasized problem-solving, programming fundamentals,
                system design, and the development of scalable applications. Coursework and projects
                strengthened analytical thinking and prepared for advanced studies and real-world
                roles in the software and IT industry.
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div>
              <h4 class="timeline__title">
                University of Bolton
                <small class="timeline__note">(Transitioning to University of Greater Manchester)</small>
              </h4>
              <h5 class="timeline__meta">Software Engineering BEng (Hons) HE6 top-up</h5>
              <p class="timeline__timeframe">December 2025</p>
            </div>
            <div>
              <p>
                Pursuing a BEng (Hons) in Software Engineering (HE6 top-up), building upon prior
                HND-level studies. The program focuses on advanced software development, system
                design, and engineering principles required to build and maintain large-scale
                software systems. Emphasis is placed on applying existing technical knowledge to
                real-world software engineering challenges, preparing for professional roles in the
                software industry.
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
</style>
