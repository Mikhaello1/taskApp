export const SCREENS = {
  INDEX: {
    name: "index" as const,
    options: {
      title: "Field Tasks",
      headerShown: false
    }
  },
  ADD_TASK: {
    name: "addTask" as const,
    options: {
      title: "Add New Task",
      presentation: "modal" as const,
    }
  },
  TASK_DETAIL: {
    name: "taskDetail" as const,
    options: {
      title: "Task Details",
    }
  }
} as const;
