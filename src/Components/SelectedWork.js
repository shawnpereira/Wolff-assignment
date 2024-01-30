import React from "react";

const SelectedWork = () => {
  return (
    <div>
      <div class="grid md:grid-cols-12 gap-5 md:gap-x-0">
        <div
          data-start-y="0"
          class="align-center relative flex h-full w-full flex-col md:col-span-7 md:pr-2.5 transition-transform ease-quint duration-[1200ms] transform translate-y-0"
        >
          <a class="group cursor-swarr" rel="noreferrer" href="/work/bay-area">
            <div class="relative aspect-square w-full md:aspect-[3/2]">
              <div class="pointer-events-none absolute z-10 h-full w-full transition-colors duration-500 ease-quint group-hover:bg-darken-filter"></div>
              <img
                src="wodden.png"
                alt="Bringing the Bay Area together"
                class="h-full w-full object-cover object-center backdrop-brightness-50 transition-transform duration-700"
                sizes="100vw"
              />
            </div>
            <div>
              <h2 class="mt-5 text-lg leading-120">Bay Area</h2>
              <div>
                <p class="mb-3 mt-2 text-lg leading-120 text-gray-300">
                  Bringing the Bay Area together
                </p>
                <div class="tags mt-3 flex select-none flex-wrap gap-x-1 gap-y-2 text-sm text-gray-300">
                  <span class="mr-1 border border-gray-300 px-4">
                    Transport
                  </span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Brand Strategy
                  </span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Brand Architecture
                  </span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Visual Identity
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div
          data-start-y="50"
          class="align-center relative flex h-full w-full flex-col md:col-span-5 md:col-start-8 md:pl-2.5 transition-transform ease-quint duration-[1200ms] transform translate-y-0"
        >
          <div>
            <div class="relative aspect-square w-full md:aspect-[3/2]">
              <div class="pointer-events-none absolute z-10 h-full w-full transition-colors duration-500 ease-quint group-hover:bg-darken-filter"></div>
              <img
                alt="Coming soon"
                src="Lg.png"
                class="h-full w-full object-cover object-center backdrop-brightness-50 transition-transform duration-700"
                sizes="100vw"
              />
            </div>
            <div>
              <h2 class="mt-5 text-lg leading-120">LG Electronics</h2>
              <div>
                <p class="mb-3 mt-2 text-lg leading-120 text-gray-300">
                  Coming soon
                </p>
                <div class="tags mt-3 flex select-none flex-wrap gap-x-1 gap-y-2 text-sm text-gray-300">
                  <span class="mr-1 border border-gray-300 px-4">Tech</span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Brand Strategy
                  </span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Brand Architecture
                  </span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Visual Identity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-start-y="15"
          class="align-center relative flex h-full w-full flex-col md:col-span-full md:pr-2.5 transition-transform ease-quint duration-[1200ms] transform translate-y-0"
        >
          <a class="group cursor-swarr" rel="noreferrer" href="/work/instacart">
            <div class="relative aspect-square w-full md:aspect-[3/2]">
              <div class="pointer-events-none absolute z-10 h-full w-full transition-colors duration-500 ease-quint group-hover:bg-darken-filter"></div>
              <img
                alt="From grocery app to delivery leader"
                src="instacart.png"
                class="h-full w-full object-cover object-center backdrop-brightness-50 transition-transform duration-700"
                sizes="100vw"
              />
            </div>
            <div>
              <h2 class="mt-5 text-lg leading-120">Instacart</h2>
              <div>
                <p class="mb-3 mt-2 text-lg leading-120 text-gray-300">
                  From grocery app to delivery leader
                </p>
                <div class="tags mt-3 flex select-none flex-wrap gap-x-1 gap-y-2 text-sm text-gray-300">
                  <span class="mr-1 border border-gray-300 px-4">Retail</span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Brand Strategy
                  </span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Visual Identity
                  </span>
                  <span class="rounded-full border border-gray-300 px-3">
                    Verbal Identity
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div
          data-start-y="15"
          className="align-center relative flex h-full w-full flex-col md:col-span-6 md:pr-2.5 transition-transform ease-quint duration-[1200ms] transform translate-y-0"
        >
          <a
            className="group cursor-swarr"
            rel="noreferrer"
            href="/work/jack-daniel-s"
          >
            <div className="relative aspect-square w-full md:aspect-[3/2]">
              <div className="pointer-events-none absolute z-10 h-full w-full transition-colors duration-500 ease-quint group-hover:bg-darken-filter"></div>
              <img
                alt="Every drop a tale"
                src="gsk.gif"
                className="h-full w-full object-cover object-center backdrop-brightness-50 transition-transform duration-700"
                sizes="100vw"
              />
            </div>
            <div>
              <h2 className="mt-5 text-lg leading-120">Jack Daniel's</h2>
              <div>
                <p className="mb-3 mt-2 text-lg leading-120 text-gray-300">
                  Every drop a tale
                </p>
                <div className="tags mt-3 flex select-none flex-wrap gap-x-1 gap-y-2 text-sm text-gray-300">
                  <span className="mr-1 border border-gray-300 px-4">
                    Alcohol
                  </span>
                  <span className="rounded-full border border-gray-300 px-3">
                    Brand Strategy
                  </span>
                  <span className="rounded-full border border-gray-300 px-3">
                    Visual Identity
                  </span>
                  <span className="rounded-full border border-gray-300 px-3">
                    Verbal Identity
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Modified code for TheMet.png */}
        <div
          data-start-y="0"
          className="align-center relative flex h-full w-full flex-col md:col-span-6 md:pl-2.5 transition-transform ease-quint duration-[1200ms] transform translate-y-0"
        >
          <a
            className="group cursor-swarr"
            rel="noreferrer"
            href="/work/ambitious-health-brand"
          >
            <div className="relative aspect-square w-full md:aspect-[3/2]">
              <div className="pointer-events-none absolute z-10 h-full w-full transition-colors duration-500 ease-quint group-hover:bg-darken-filter"></div>
              <img
                src="TheMet.png"
                alt="Empowering an ambitious health brand"
                className="h-full w-full object-cover object-center backdrop-brightness-50 transition-transform duration-700"
                sizes="100vw"
              />
            </div>
            <div>
              <h2 className="mt-5 text-lg leading-120">
                An ambitious health brand
              </h2>
              <div>
                <p className="mb-3 mt-2 text-lg leading-120 text-gray-300">
                  Empowering an ambitious health brand
                </p>
                <div className="tags mt-3 flex select-none flex-wrap gap-x-1 gap-y-2 text-sm text-gray-300">
                  <span className="mr-1 border border-gray-300 px-4">
                    Healthcare
                  </span>
                  <span className="rounded-full border border-gray-300 px-3">
                    Brand Strategy
                  </span>
                  <span className="rounded-full border border-gray-300 px-3">
                    Visual Identity
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
