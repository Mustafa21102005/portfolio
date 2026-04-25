<template>
  <section id="contact">
    <div class="row contact-top">
      <div class="column lg-12">
        <h2 class="text-pretitle">{{ $t('contact.title') }}</h2>

        <p class="h1">
          {{ $t('contact.description') }}
        </p>
      </div>
    </div>

    <div class="row contact-bottom">
      <div class="column lg-3 md-5 tab-6 stack-on-550">
        <h3 class="text-pretitle">{{ $t('contact.reach') }}</h3>
        <p class="contact-links">
          <a href="mailto:mustafa.azmi.khalil@gmail.com">mustafa.azmi.khalil@gmail.com</a>
          <br />
          <a style="direction: ltr !important; unicode-bidi: embed" href="tel:+966545117570">
            +966 54 511 7570
          </a>
        </p>
      </div>
      <div class="column lg-4 md-5 tab-6 stack-on-550 space-left">
        <h3 class="text-pretitle">{{ $t('contact.social') }}</h3>
        <ul class="contact-social">
          <li><a href="https://github.com/Mustafa21102005" target="_blank">Github</a></li>
          <li><a href="https://wa.me/966545117570" target="_blank">WhatsApp</a></li>
          <li>
            <a href="https://www.linkedin.com/in/mustafa-azmi-3718463a2/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
