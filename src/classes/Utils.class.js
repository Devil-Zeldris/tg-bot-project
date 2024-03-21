export class Utils {
    static getUniqueRandomElements({ arr, amount }) {
        if (amount === undefined) return new Array(arr[Math.floor(Math.random() * arr.length)])
        if (!amount || !arr.length) return new Array();

        const set = new Set(arr);
        if (amount >= set.size) return Array.from(set);

        set.clear();
        for (; set.size < amount && arr.length > amount;) {
            set.add(arr[Math.floor(Math.random() * arr.length)])
        }
        return Array.from(set)
    }
}