var appframe = { 
	template: `
  <section>
    <div class="container d-flex my-4">
      <a href="#" id="title" class="sm">
        <p class="header-title">
          International Conference on Artificial Intelligence of Things and
          Systems
        </p>
      </a>
    </div>
    <img
      src="./assets/header-1.jpg"
      alt="webp"
      class="w-100 d-none d-lg-block"
    />
    <img
      src="./assets/header-mobile.jpg"
      alt="webp"
      class="w-100 d-lg-none"
    />
  </section>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarHome"
        aria-controls="navbarNavHome"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarHome">
        <ul class="navbar-nav">

          <li class="nav-item dropdown">
            <button
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link class="nav-link dropdown-item" to="/"> Welcome Page </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="organizingcommittee"> Organizing Committee </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="conferencepolicies"> Conference Policies </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <button
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Calls
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link class="nav-link dropdown-item" to="importantdates"> Important Dates </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="callforpapers"> Call for Papers </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="callforcaaspecialtrack"> Call for CAA Special Track </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="callforsigbedchinaspecialtrack"> Call for SIGBED CHINA Special Track </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="callforaiiot"> Call for AIIOT Special Track </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="callforubicom"> Call for CCF Ubiquitous Computing Special Track </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="callforiscc"> Call for ISCC Special Track </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="callforaiec"> Call for AIEC Special Track </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <button
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Paper Submission
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link class="nav-link dropdown-item" to="paperguidelines"> AIoTSys Paper Submission and Guidelines </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="camerareadyinstructions"> Camera Ready Instructions </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active" to="Registration"> Registration </router-link>
          </li>

          <li class="nav-item dropdown">
            <button
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Award
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link class="nav-link dropdown-item" to="youngscientistaward"> AIoTSys Young Scientist Award </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="bestpaperaward"> Best Paper Award </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <button
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Program
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link class="nav-link dropdown-item" to="program"> Program </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="invitedtalk"> Invited Talk </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="presentationInstructions"> Presentation Instructions </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="panel"> Panels </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="session1"> Sessions </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="report"> Report </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <button
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Venue & Travel
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link class="nav-link dropdown-item" to="venue"> Venue </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="acommodationinformation"> Acommodation Information </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="transportation"> Transportation </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <button
              class="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Related News
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link class="nav-link dropdown-item" to="conferenceagenda"> Conference Agenda </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="conferenceintroduction"> Conference Introduction </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="guestedspeaker"> Guested Speaker </router-link>
              </li>
              <li>
                <router-link class="nav-link dropdown-item" to="youngscientistaward"> Young Scientist Award </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active" to="contactus"> Contact us </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>

  <div class="b-divider"></div>

  <section style="background-color: #00629b; color: white">
    <div class="container">
      <footer class="py-5">
        <div class="mb-3">
          <ul class="nav">
            <li class="nav-item mx-2">
              <a href="#" class="nav-link p-0 text-muted">Home</a>
            </li>
            <div class="vr"></div>
            <li class="nav-item mx-2">
              <a
                href="http://www.ieee.org/sitemap.html"
                class="nav-link p-0 text-muted"
                >Sitemap</a
              >
            </li>
            <div class="vr"></div>
            <li class="nav-item mx-2">
              <a
                href="https://www.ieee.org/accessibility-statement.html"
                class="nav-link p-0 text-muted"
                >Nondiscrimination Policy</a
              >
            </li>
            <div class="vr"></div>
            <li class="nav-item mx-2">
              <a
                href="https://www.ieee.org/about/corporate/governance/p9-26.html"
                class="nav-link p-0 text-muted"
                >IEEE Ethics Reporting</a
              >
            </li>
            <div class="vr"></div>
            <li class="nav-item mx-2">
              <a
                href="http://www.ieee-ethics-reporting.org/"
                class="nav-link p-0 text-muted"
                >Terms</a
              >
            </li>
            <div class="vr"></div>
            <li class="nav-item mx-2">
              <a
                href="https://www.ieee.org/about/help/site-terms-conditions.html"
                class="nav-link p-0 text-muted"
                >IEEE Privacy Policy</a
              >
            </li>
            <div class="vr"></div>
            <li class="nav-item mx-2">
              <a
                href="https://www.ieee.org/about/help/site-terms-conditions.html"
                class="nav-link p-0 text-muted"
                >IEEE Privacy Policy</a
              >
            </li>
          </ul>
        </div>

        <div
          class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
        >
          <p class="copyright">
            &copy; Copyright 2023 IEEE - All rights reserved. A not-for-profit
            organization, IEEE is the world's largest technical professional
            organization dedicated to advancing technology for the benefit of
            humanity.
          </p>
        </div>
      </footer>
    </div>
  </section>
  `
};
