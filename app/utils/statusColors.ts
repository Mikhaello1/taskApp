import { COLORS } from '@/constants/styles';
import { TaskStatus } from '@/types';

export const getStatusColor = (status: TaskStatus): string => {
  switch (status) {
    case 'Pending': return COLORS.PENDING;
    case 'In Progress': return COLORS.IN_PROGRESS;
    case 'Completed': return COLORS.COMPLETED;
    case 'Cancelled': return COLORS.CANCELLED;
    default: return COLORS.DEFAULT;
  }
};      