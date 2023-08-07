export namespace FormatUtils {
    export function formatWithZeros(number: number, places: number): string {
        const zero = places - number.toString().length+1;
        return Array(+(zero > 0 && zero)).join("0")+number;
    }
}