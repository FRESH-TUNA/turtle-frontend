<template>
  <v-container :fluid="fluid" class="pa-0">
    <v-row justify='center'>
      <v-col cols="9">
        <slot name="content"></slot>
      </v-col>
    </v-row>
</v-container>
</template>
    
<script scoped>
  export default {
    name: 'AbstractCenterJustifiedComponent',
    components: {
  
    },
    props: {
      fluid: {
        default: true,
        type: Boolean
      }
    },
    data: () => ({
  
    }),
    methods: {
    
    }
  };
  </script>