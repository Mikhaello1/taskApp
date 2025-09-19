export const STRINGS = {
    COMMON: {
        ERROR: "Error",
        SUCCESS: "Success",
        CANCEL: "Cancel",
        DELETE: "Delete",
        SAVE: "Save",
        CONFIRM: "Confirm",
        TASK_NOT_FOUND: "Task not found",
        COULD_NOT_OPEN_MAPS: "Could not open maps app",
    },
    TASK_DETAIL: {
        DESCRIPTION: "Description",
        DATE_AND_TIME: "Date and Time",
        LOCATION: "Location",
        CREATED_AT: "Created At",
    },
    TASK_LIST: {
        EMPTY_TITLE: "No tasks yet",
        EMPTY_SUBTITLE: "Add a new task to get started",
        DELETE_TITLE: "Delete Task",
        DELETE_MESSAGE: "Are you sure you want to delete this task?",
    },
    TASK_FORM: {
        TITLE: "Task Title",
        DESCRIPTION: "Description",
        ADDRESS: "Address",
        DATE_TIME: "Date and Time of Execution",
        TITLE_REQUIRED: "Task title is required",
        DESCRIPTION_REQUIRED: "Task description is required",
        ADDRESS_REQUIRED: "Address is required",
        DATE_TIME_REQUIRED: "Please select a valid future date and time",
        SAVE_SUCCESS: "Task added successfully",
        SAVE_ERROR: "Failed to save task",
    },
    STATUS: {
        PENDING: "Pending" as const,
        IN_PROGRESS: "In Progress" as const,
        COMPLETED: "Completed" as const,
        CANCELLED: "Cancelled" as const,
    },
    ERRORS: {
        LOAD_TASKS: "Failed to load tasks",
        DELETE_TASK: "Failed to delete task",
        UPDATE_STATUS: "Failed to update task status",
    },
    SORT: {
        DATE_ADDED: "Date Added",
        STATUS: "Status",
    },
    SORT_BY: {
        DATE_ADDED: "dateAdded",
        STATUS: "status",
    },
    STATUS_ORDER: {
        PENDING: 0,
        IN_PROGRESS: 1,
        COMPLETED: 2,
        CANCELLED: 3,
    },
    ALERT: {
        DELETE_TITLE: "Delete Task",
        DELETE_MESSAGE: "Are you sure you want to delete this task?",
        CANCEL: "Cancel",
        DELETE: "Delete",
    },
    EMPTY_LIST: {
        TITLE: "No tasks yet",
        SUBTITLE: "Add a new task to get started",
    },
    HEADER: {
        TITLE: "Tasks",
    },
};
