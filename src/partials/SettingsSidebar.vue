<template>
  <div class="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3">
    <!-- Group 1 -->
    <div>
      <div class="text-xs font-semibold text-slate-400 uppercase mb-3">My Account</div>
      <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
        <router-link to="/settings/account" custom v-slot="{ href, navigate, isExactActive }">
          <li class="mr-0.5 md:mr-0 md:mb-0.5">
            <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap" :class="isExactActive && 'bg-indigo-50'" :href="href" @click="navigate">
              <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" :class="isExactActive && 'text-indigo-400'" viewBox="0 0 16 16">
                <path d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z" />
              </svg>
              <span class="text-sm font-medium text-slate-600" :class="isExactActive ? 'text-indigo-500' : 'hover:text-slate-700'">My Account</span>
            </a>
          </li>
        </router-link>
        <router-link to="/settings/apps" custom v-slot="{ href, navigate, isExactActive }">
          <li class="mr-0.5 md:mr-0 md:mb-0.5">
            <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap" :class="isExactActive && 'bg-indigo-50'" :href="href" @click="navigate">
              <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" :class="isExactActive && 'text-indigo-400'" viewBox="0 0 16 16">
                <path d="M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z" />
              </svg>
              <span class="text-sm font-medium text-slate-600" :class="isExactActive ? 'text-indigo-500' : 'hover:text-slate-700'">Connected Apps</span>
            </a>
          </li>
        </router-link>
      </ul>
    </div>
    <!-- Group 2 -->
    <div>
      <div class="text-xs font-semibold text-slate-400 uppercase mb-3">General settings</div>
      <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
        <router-link to="/settings/activity-types" custom v-slot="{ href, navigate, isExactActive }">
          <li class="mr-0.5 md:mr-0 md:mb-0.5">
            <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap" :class="isExactActive && 'bg-indigo-50'" :href="href" @click="navigate">
              <svg :class="isExactActive && 'text-indigo-400'" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              <span class="text-sm font-medium text-slate-600" :class="isExactActive ? 'text-indigo-500' : 'hover:text-slate-700'">Activity types</span>
            </a>
          </li>
        </router-link>
        <router-link to="/settings" custom v-slot="{ href, navigate, isExactActive }">
          <li class="mr-0.5 md:mr-0 md:mb-0.5">
            <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap" :class="isExactActive && 'bg-indigo-50'" :href="href" @click="navigate">
              <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" :class="isExactActive && 'text-indigo-400'" viewBox="0 0 16 16">
                <path d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z" />
              </svg>
              <span class="text-sm font-medium text-slate-600" :class="isExactActive ? 'text-indigo-500' : 'hover:text-slate-700'">Challenge settings</span>
            </a>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>