export interface Task {
  id: string;
  title: string;
  description: string;
  address: string;
  dateTime: string;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
  createdAt: string;
}

export type TaskStatus = Task['status'];


export type ScreenConfig = {
  name: string;
  options: {
    title: string;
    headerShown?: boolean;
    presentation?: 'card' | 'modal' | 'transparentModal';
  };
};