<template>
  <div id="app">
    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div
          v-for="column in columns"
          :key="column.title"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
        >
          <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{column.title}}</p>
          <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
          <draggable :list="column.tasks" :animation="200" ghost-class="ghost-card" group="tasks">
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <task-card
              v-for="(task) in column.tasks"
              :key="task.id"
              :task="task"
              class="mt-3 cursor-move"
            ></task-card>
            <!-- </transition-group> -->
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "./components/TaskCard.vue";
export default {
  name: "App",
  components: {
    TaskCard,
    draggable
  },
  data() {
    return {
      columns: [
        {
          title: "Abertas",
          tasks: [
            {
              id: 6,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 7,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 8,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Backend"
            }
          ]
        },
        {
          title: "Done",
          tasks: [
            {
              id: 16,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
.ghost-card {
  opacity: 0.5;
  background: #F7FAFC;
  border: 1px solid #4299e1;
}
</style>
