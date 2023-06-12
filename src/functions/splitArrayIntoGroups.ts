interface ISplitArrayIntoGroupsParameters {
    array: any[]
    groupsAmount: number
}

export const splitArrayIntoGroups = ({
    array,
    groupsAmount,
}: ISplitArrayIntoGroupsParameters) => {
    const arr: any[][] = Array.from({ length: groupsAmount }, () => [])
    let currentGroup = 0

    array.forEach(value => {
        arr[currentGroup].push(value)
        currentGroup === groupsAmount - 1 ? (currentGroup = 0) : currentGroup++
    })

    return arr
}
