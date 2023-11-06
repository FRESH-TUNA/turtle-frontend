<template >
  <div class="my-paginator">
    <vue-awesome-paginate
        :total-items="totalItems"
        :items-per-page="size"
        :max-pages-shown="maxPage"
        v-model="currentPage"
        :on-click="routingCallback"
    >
      <template #prev-button>
        <span>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="12"
              height="12"
              viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>

      <template #next-button>
        <span>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="12"
              height="12"
              viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script setup>

import {ref} from "vue";

const props = defineProps(["page", "totalItems", "size", "maxPage", "routingCallback"]);


const currentPage = ref(props.page);

// const emit = defineEmits(["pageChangedEvent"]);
//
// function pageChanged() {
//   emit("pageChangedEvent");
// }
</script>

<style>
.my-paginator .pagination-container {
  column-gap: 10px;
  align-items: center;
}
.my-paginator .paginate-buttons {
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  color: black;
}

.my-paginator .back-button,
.my-paginator .next-button {
  background-color: black;
  color: white;
  border-radius: 8px;
  height: 45px;
  width: 45px;
}
.my-paginator .active-page {
  background-color: #e5e5e5;
}
.my-paginator .paginate-buttons:hover {
  background-color: #f5f5f5;
}
.my-paginator .active-page:hover {
  background-color: #e5e5e5;
}

.my-paginator .back-button svg {
  transform: rotate(180deg) translateY(-2px);
}
.my-paginator .next-button svg {
  transform: translateY(2px);
}

.my-paginator .back-button:hover,
.my-paginator .next-button:hover {
  background-color: rgb(45, 45, 45);
}

.my-paginator .back-button:active,
.my-paginator .next-button:active {
  background-color: rgb(85, 85, 85);
}
</style>
