<template>
  <Transition @before-enter="close" @leave="close" @enter="open" @before-leave="open" >
    <div v-show="visible" :style="{transition: '150ms ease-out', ...style, overflow: 'hidden'}" :class="class">
      <slot></slot>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, Transition } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: "accordion",
  props: {
    visible: { type: Boolean, required: true},
    style: Object as PropType<any>,
    class: Object as PropType<any>
  },
  components: { Transition },
  methods: {
    close (el: HTMLElement) { el.style.height = '0' },
    open (el: HTMLElement) { el.style.height = el.scrollHeight + 'px' }
  }
})
</script>