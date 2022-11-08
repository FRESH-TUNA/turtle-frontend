<template>
  <v-container :fluid="fluid" class="pa-0">
    <v-row justify="center" class="ma-0">
      <v-col :cols="colSize" class="pa-0">
        <slot name="content"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script scoped>
export default {
  name: "AbstractCenterJustifiedComponent",
  components: {},
  props: {
    fluid: {
      default: true,
      type: Boolean,
    },
    colSize: {
      default: "9",
      type: String,
    },
  },
  data: () => ({}),
  methods: {},
};
</script>
