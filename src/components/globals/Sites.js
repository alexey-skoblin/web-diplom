import {usePathname} from "next/navigation";

export const sites = {
    Workspace: "",
    tasks: "tasks",
    "Сим-карты": "sim-cards",
    users: "users",
    requests: "requests",
    analytics: "analytics"
};

export const useNavigation = () => {
    // Получаем текущий путь с помощью usePathname
    const currentPath = usePathname();

    // Функция для проверки, является ли путь активным
    const isActivePath = (path) => {
        return currentPath === path;
    };

    return {sites, isActivePath};
};
