export function viewSorting(nameField, sortingField, sortingOrder, asc) {
    if (nameField === sortingField) {
        if (sortingOrder === asc) {
            return "⇧"
        } else {
            return "⇩"
        }
    }
}