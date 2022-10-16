<template>
  <div class="grow">

    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-gray-800 font-bold mb-5">Challenge Settings</h2>

      <!-- Challenge duration -->
      <section>
        <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">Duration</h3>
        <div class="text-sm">
          Challenge duration controls which activities will be taken into account during challenge. Activities completed outside of challenge time window won't contribute to user's points.
        </div>

        <!-- Datepicker (built with flatpickr) -->
        <div class="mt-5">
          <div class="relative">
            <input class="datepicker form-input pl-9 text-gray-500 hover:text-gray-600 font-medium focus:border-gray-300 w-60" placeholder="Select dates" />
            <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
              <svg class="w-4 h-4 fill-current text-gray-500 ml-3" viewBox="0 0 16 16">
                <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
              </svg>
            </div>
          </div>
          <!-- End -->
        </div>

      </section>

      <!-- Badges -->
      <section>

        <div class="flex justify-between">
          <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">Badges</h3>
          <!-- Create badge modal -->
        </div>
        <div class="text-sm">
          Badges are awarded to users who collected certain number of points. Check out <span class="font-semibold">leaderboard</span> to see per-user awards.
        </div>

        <div class="grid grid-cols-12 gap-6 mt-5">
          <!-- badge 1 -->
          <div class="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
            <!-- Card content -->
            <div class="flex flex-col h-full p-5">
              <div class="grow">
                <header class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-light-blue-500 to-light-blue-300 mr-3">
                    <svg class="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                      <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                    </svg>
                  </div>
                  <h3 class="text-lg text-gray-800 font-semibold">Sportacus</h3>
                </header>
                <div class="text-sm">You are the real Sportacus. Keep going.</div>
              </div>
              <!-- Card footer -->
              <footer class="mt-4">
                <div class="flex flex-wrap justify-between items-center">
                  <!-- Left side -->
                  <div class="flex space-x-3">
                    <div class="flex items-center text-yellow-500">
                      <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                      <div class="text-sm text-yellow-600">4500</div>
                    </div>
                  </div>
                  <!-- Right side -->
                  <button @click=""
                          class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
                    <svg class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span>Edit</span>
                  </button>
                </div>
              </footer>
            </div>
          </div>
          <!-- badge 2 -->
          <div class="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
            <!-- Card content -->
            <div class="flex flex-col h-full p-5">
              <div class="grow">
                <header class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-green-500 to-green-300 mr-3">
                    <svg class="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                      <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                    </svg>
                  </div>
                  <h3 class="text-lg text-gray-800 font-semibold">Novice</h3>
                </header>
                <div class="text-sm">First activity already behind you. It wasn't that hard, wasn't it?</div>
              </div>
              <!-- Card footer -->
              <footer class="mt-4">
                <div class="flex flex-wrap justify-between items-center">
                  <!-- Left side -->
                  <div class="flex space-x-3">
                    <div class="flex items-center text-yellow-500">
                      <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                      <div class="text-sm text-yellow-600">1</div>
                    </div>
                  </div>
                  <!-- Right side -->
                  <button class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
                    <svg class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span>Edit</span>
                  </button>
                </div>
              </footer>
            </div>
          </div>
          <!-- badge 3 -->
          <div class="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
            <!-- Card content -->
            <div class="flex flex-col h-full p-5">
              <div class="grow">
                <header class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-pink-500 to-pink-300 mr-3">
                    <svg class="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                      <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                    </svg>
                  </div>
                  <h3 class="text-lg text-gray-800 font-semibold">Advanced</h3>
                </header>
                <div class="text-sm">Steady progress made you advanced. Sportacus badge is just around the corer. Keep going!</div>
              </div>
              <!-- Card footer -->
              <footer class="mt-4">
                <div class="flex flex-wrap justify-between items-center">
                  <!-- Left side -->
                  <div class="flex space-x-3">
                    <div class="flex items-center text-yellow-500">
                      <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                      <div class="text-sm text-yellow-600">1000</div>
                    </div>
                  </div>
                  <!-- Right side -->
                  <button class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
                    <svg class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span>Edit</span>
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-gray-200">
        <div class="flex self-end">
          <button class="btn border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
        </div>
      </div>
    </footer>

  </div>
</template>