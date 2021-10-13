

import React, {useMemo} from "react"

export const usePagination = ({totalCount, pageSize, siblingCount = 1, currentPage}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize)
        const range = (start, end) => {
            let length = end - start + 1

            return Array.from({length}, (_, idx) => idx + start)
        }

        const totalPageNumbers = siblingCount + 5

        if (totalPageNumbers > totalPageCount) {
            return range(1, totalPageCount)
        }

        const leftSibling = Math.max(currentPage - siblingCount, 1)
        const rightSibling = Math.max(currentPage + siblingCount, totalPageCount)

        const shouldShowLeftDots = leftSibling > 2
        const shouldShowRightDots = rightSibling < totalPageCount - 2

        const firstPageIndex = 1
        const lastPageIndex = totalPageCount

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount
            let rightRange = range( totalPageCount - rightItemCount + 1, totalPageCount)

            return [firstPageIndex, DOTS, ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSibling, rightSibling)

            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }
        
    }, [totalCount, pageSize, siblingCount = 1, currentPage])

    return paginationRange
}