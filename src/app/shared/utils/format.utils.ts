export namespace FormatUtils {
    export function formatWithZeros(number: number, places: number): string {
        const zero = places - number.toString().length+1;
        return Array(+(zero > 0 && zero)).join("0")+number;
    }

    export function formatServerDateToHHmm(serverDate: Date): string | null {
        if (serverDate === null) return null;
        
        const localDate = new Date(new Date(serverDate).toLocaleString());

        const hours = localDate.getHours();
        const minutes = localDate.getMinutes();

        const formatedHours = hours.toString().padStart(2, '0');
        const formatedMinutes = minutes.toString().padStart(2, '0');

        return `${formatedHours}:${formatedMinutes}`;
    }
}