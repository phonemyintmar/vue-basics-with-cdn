const app = Vue.createApp({
  data() {
    return {
      title: "test",
      age: 12,
      student: ["hla hla", "mya mya"],
      color: "red",
      teacher: [
        { name: "mya mya", age: "14", isGood: true },
        { name: "hla hla", age: "16", isGood: false },
        { name: "ag ag", age: "16", isGood: true },
      ],
    };
  },
  methods: {
    changeTitle() {
      this.title = "New Title";
    },
    mouserOver(e) {
      console.log("mouse over event");
      console.log(e);
    },
  },
  computed: {
    filteredTeachers(){
        return this.teacher.filter(teacher=>teacher.isGood===true)
    }
  },
});
app.mount("#app");
