import { useMemo, useState } from "react";

import { STRINGS } from "@/constants/strings";
import { Task } from "@/types";

export const useTaskSorting = (tasks: Task[]) => {
    const [sortBy, setSortBy] = useState(STRINGS.SORT_BY.DATE_ADDED);

    const sortedTasks = useMemo(() => {
        const sorted = [...tasks];

        if (sortBy === STRINGS.SORT_BY.DATE_ADDED) {
            sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        } else if (sortBy === STRINGS.SORT_BY.STATUS) {
            const statusOrder = {
                [STRINGS.STATUS.PENDING]: STRINGS.STATUS_ORDER.PENDING,
                [STRINGS.STATUS.IN_PROGRESS]: STRINGS.STATUS_ORDER.IN_PROGRESS,
                [STRINGS.STATUS.COMPLETED]: STRINGS.STATUS_ORDER.COMPLETED,
                [STRINGS.STATUS.CANCELLED]: STRINGS.STATUS_ORDER.CANCELLED,
            };
            sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
        }

        return sorted;
    }, [tasks, sortBy]);

    return {
        sortBy,
        setSortBy,
        sortedTasks,
    };
};
