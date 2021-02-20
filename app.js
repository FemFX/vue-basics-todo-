const App = {
  data() {
    return {
      title: "Список заметок",
      counter: 0,
      placeholder: "Введите текст",
      value: "",
      notes: [],
    };
  },
  methods: {
    addNote() {
      if (this.value) {
        this.notes.push(this.value);
        this.value = "";
      }
    },
    deleteNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
};

const app = Vue.createApp(App);
app.mount("#app");
